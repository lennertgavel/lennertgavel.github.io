import EmblaCarousel from 'embla-carousel';
import type { EmblaCarouselType } from 'embla-carousel';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';

let embla: EmblaCarouselType | null = null;

function initCarousel(): void {
  const emblaNode = document.querySelector<HTMLElement>('.embla');
  if (!emblaNode) return;

  embla = EmblaCarousel(
    emblaNode,
    {
      align: 'start',
      containScroll: 'trimSnaps',
      loop: false,
      watchDrag: true, // pointer/touch swiping (on by default; explicit here)
      dragThreshold: 8,
    },
    // Trackpad/wheel swiping. Only reacts to gestures along the carousel's own
    // (horizontal) axis, so vertical scrolling still drives the tab navigation.
    [WheelGesturesPlugin()]
  );

  const prevBtn = document.querySelector<HTMLButtonElement>('[data-embla-prev]');
  const nextBtn = document.querySelector<HTMLButtonElement>('[data-embla-next]');

  function updateButtons(): void {
    if (!embla) return;
    if (prevBtn) prevBtn.disabled = !embla.canScrollPrev();
    if (nextBtn) nextBtn.disabled = !embla.canScrollNext();
  }

  prevBtn?.addEventListener('click', () => embla?.scrollPrev());
  nextBtn?.addEventListener('click', () => embla?.scrollNext());

  embla.on('select', updateButtons);
  embla.on('reInit', updateButtons);
  updateButtons();
}

// Destroy before DOM swap to avoid orphaned instances
document.addEventListener('astro:before-swap', () => {
  embla?.destroy();
  embla = null;
});

// Re-initialize on every page load (including first load)
document.addEventListener('astro:page-load', initCarousel);
