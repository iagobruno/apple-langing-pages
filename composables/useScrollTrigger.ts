import { isRef, onMounted, onUnmounted, type TemplateRef } from 'vue';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function useScrollTrigger(
  target: TemplateRef<HTMLElement> | HTMLElement,
  options: ScrollTrigger.Vars = {},
) {
  let instance: ScrollTrigger | null = null;

  onMounted(() => {
    const element = isRef(target) ? target.value : target;

    if (!element) {
      console.warn('[useScrollTrigger] target element not found.');
      return;
    }

    instance = ScrollTrigger.create({
      trigger: element,
      ...options,
    });
  });

  onUnmounted(() => {
    instance?.kill();
    instance = null;
  });

  return {
    instance,
  };
}
