import { navigate } from 'astro:transitions/client';
import { tabs } from '../data/tabs';

declare global {
  interface Window {
    __folderNav?: boolean;
  }
}

// Folder sequence: home first, then the tabs in first → last order.
const order = ['/', ...tabs.map((t) => `/${t.slug}/`)];

function normalize(path: string): string {
  return path !== '/' && !path.endsWith('/') ? `${path}/` : path;
}

function currentIndex(): number {
  return order.indexOf(normalize(window.location.pathname));
}

function step(delta: number): void {
  const idx = currentIndex();
  if (idx === -1) return;
  const next = Math.min(Math.max(idx + delta, 0), order.length - 1);
  if (next === idx) return;
  navigate(order[next]);
}

if (!window.__folderNav) {
  window.__folderNav = true;

  // One tab per scroll: accumulate wheel distance until it crosses a threshold,
  // then move and start a short cooldown. The cooldown swallows a flick's inertial
  // momentum (so one flick = one tab) but releases on a fixed timer, so you can
  // scroll again right after — it never stays locked while momentum keeps firing.
  const STEP_THRESHOLD = 100; // accumulated px of scroll to move one tab
  const COOLDOWN = 520; // ms lockout after a move, to absorb momentum
  let acc = 0;
  let readyAt = 0;

  document.addEventListener(
    'wheel',
    (e) => {
      // Ignore scrolling while a modal lightbox is open.
      if (document.querySelector('.lightbox[open]')) {
        acc = 0;
        return;
      }
      if (e.timeStamp < readyAt) {
        // Within the cooldown: discard momentum so it doesn't skip ahead.
        acc = 0;
        return;
      }
      acc += e.deltaY;
      if (Math.abs(acc) < STEP_THRESHOLD) return;
      const dir = acc > 0 ? 1 : -1;
      acc = 0;
      readyAt = e.timeStamp + COOLDOWN;
      step(dir);
    },
    { passive: true }
  );

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') navigate('/');
  });
}
