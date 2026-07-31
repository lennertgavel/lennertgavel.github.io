// Lightweight image lightbox built on the native <dialog> element.
// showModal() gives us the top-layer, backdrop, focus trapping and
// Escape-to-close for free — we only add prev/next and click-vs-drag guarding.

let cleanup: (() => void) | null = null;

function initLightbox(): void {
  const dialog = document.querySelector<HTMLDialogElement>('.lightbox');
  if (!dialog || typeof dialog.showModal !== 'function') return;

  const imgEl = dialog.querySelector<HTMLImageElement>('.lightbox__img');
  const zoomables = Array.from(document.querySelectorAll<HTMLImageElement>('.zoomable'));
  if (!imgEl || zoomables.length === 0) return;

  const items = zoomables.map((img) => ({ src: img.currentSrc || img.src, alt: img.alt }));
  let index = 0;

  const controller = new AbortController();
  const { signal } = controller;

  const render = (): void => {
    imgEl.src = items[index].src;
    imgEl.alt = items[index].alt;
  };

  const step = (dir: number): void => {
    index = (index + dir + items.length) % items.length;
    render();
  };

  const open = (i: number): void => {
    index = i;
    render();
    dialog.showModal();
  };

  // Open on click, but skip clicks that were really a carousel drag.
  zoomables.forEach((img, i) => {
    let downX = 0;
    let downY = 0;
    img.addEventListener('pointerdown', (e) => {
      downX = e.clientX;
      downY = e.clientY;
    }, { signal });
    img.addEventListener('click', (e) => {
      if (Math.hypot(e.clientX - downX, e.clientY - downY) > 8) return;
      open(i);
    }, { signal });
  });

  dialog.querySelector('[data-lightbox-prev]')?.addEventListener('click', () => step(-1), { signal });
  dialog.querySelector('[data-lightbox-next]')?.addEventListener('click', () => step(1), { signal });
  dialog.querySelector('[data-lightbox-close]')?.addEventListener('click', () => dialog.close(), { signal });

  // Clicking the empty backdrop area (the dialog itself) closes it.
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) dialog.close();
  }, { signal });

  // Arrow keys page through images. Escape closes natively — either way we stop
  // the key from bubbling to the tab navigator behind the modal.
  dialog.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      step(-1);
      e.preventDefault();
    } else if (e.key === 'ArrowRight') {
      step(1);
      e.preventDefault();
    }
    e.stopPropagation();
  }, { signal });

  cleanup = () => controller.abort();
}

// Tear down before Astro swaps the DOM, then re-wire on the next page.
document.addEventListener('astro:before-swap', () => {
  cleanup?.();
  cleanup = null;
});

document.addEventListener('astro:page-load', initLightbox);
