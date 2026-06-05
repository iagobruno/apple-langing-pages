import {
  useIntersectionObserver,
  type ArgumentsType,
  type UseIntersectionObserverOptions,
} from '@vueuse/core';
import { ref } from 'vue';

type Target = ArgumentsType<typeof useIntersectionObserver>[0];

/**
 * Executa um callback uma única vez quando o elemento estiver visível na tela.
 *
 * @example
 * const section = useTemplateRef('section');
 * useVisibleTrigger(section, () => {
 *   console.log('Elemento visível!');
 * });
 */
export function useVisibilityTrigger(
  target: Target,
  callback: Function,
  options: UseIntersectionObserverOptions = {},
) {
  const called = ref(false);

  const { stop } = useIntersectionObserver(
    target,
    ([{ isIntersecting }]) => {
      if (!isIntersecting) return;

      if (!called.value) {
        callback();
        called.value = true;
      }
      stop();
    },
    options,
  );
}
