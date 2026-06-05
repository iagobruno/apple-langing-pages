export function fitTextToWidth(element: HTMLElement) {
  const textEl = element;
  const wrapperEl = element.parentElement;

  if (!textEl || !wrapperEl) return;

  // Reset to a large size to measure
  textEl.style.fontSize = '100vh';

  // Get the container width with padding consideration
  const rootEl = wrapperEl.closest('div');
  const containerWidth = rootEl?.clientWidth || window.innerWidth;

  // Calculate padding from computed styles
  const computedStyle = rootEl ? getComputedStyle(rootEl) : null;
  const paddingLeft = computedStyle ? parseFloat(computedStyle.paddingLeft) : 0;
  const paddingRight = computedStyle
    ? parseFloat(computedStyle.paddingRight)
    : 0;
  const totalPadding = paddingLeft + paddingRight;

  // Binary search for the perfect font size
  let min = 1;
  let max = 500;
  let bestSize = max;

  while (min <= max) {
    const mid = Math.floor((min + max) / 2);
    textEl.style.fontSize = `${mid}px`;

    // Check if text overflows
    const textWidth = textEl.scrollWidth;

    if (textWidth <= containerWidth - totalPadding) {
      bestSize = mid;
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }

  textEl.style.fontSize = `${bestSize}px`;
}
