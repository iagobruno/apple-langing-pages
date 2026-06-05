import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-Brwmui-l.mjs';
import { useIntersectionObserver } from '@vueuse/core';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({ class: "rounded-full bg-primary px-5 py-2 text-white text-base cursor-pointer transition-all" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Button.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Button = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]), { __name: "Button" });
function useVisibilityTrigger(target, callback, options = {}) {
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
    options
  );
}

export { Button as B, useVisibilityTrigger as u };
//# sourceMappingURL=useVisibilityTrigger-ofKzLIfV.mjs.map
