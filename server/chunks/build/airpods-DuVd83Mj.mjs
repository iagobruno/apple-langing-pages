import { defineComponent, useTemplateRef, mergeProps, withCtx, createTextVNode, ref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderStyle, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { B as Button, u as useVisibilityTrigger } from './useVisibilityTrigger-ofKzLIfV.mjs';
import { u as useHead, _ as _export_sfc } from './_plugin-vue_export-helper-Brwmui-l.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import '@vueuse/core';
import './server.mjs';
import 'vue-router';

const _imports_0$6 = publicAssetsURL("/apple-logo.png");
const _imports_1$1 = publicAssetsURL("/airpods-hero.mp4");
const frameCount = 147;
const currentFrame = (index) => `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, "0")}.jpg`;
const preloadImages = () => {
  for (let i = 1; i <= frameCount; i++) {
    const image = new Image();
    image.src = currentFrame(i);
    image.onload = () => {
    };
  }
};
preloadImages();
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Hero",
  __ssrInlineRender: true,
  setup(__props) {
    useTemplateRef("heading");
    useTemplateRef("video");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "h-svh lg:min-h-[720px] w-full px-6 pt-16 md:pt-30 relative overflow-hidden" }, _attrs))}><div class="text-[5rem] md:text-[6rem] flex flex-col items-center text-center relative z-3"><img${ssrRenderAttr("src", _imports_0$6)} class="h-[0.4em] block mx-auto mb-3"><h1 class="font-medium text-[0.4em]">AirPods Pro</h1><h1 class="font-semibold text-[0.65em]/16 md:text-[1em]/28 invisible"> Icônicos. Supersônicos. </h1><p class="text-[0.22em] opacity-75 mt-6"> AirPods Pro apartir de R$ 1.499<br> com Cancelamento de Ruído R$ 1.999 </p>`);
      _push(ssrRenderComponent(Button, { class: "text-[0.2em]! mt-8" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Comprar`);
          } else {
            return [
              createTextVNode("Comprar")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><video${ssrRenderAttr("src", _imports_1$1)} class="object-cover aspect-1380/756 size-[120vw] md:size-[70vw] lg:size-[60vw] xl:size-[48vw] z-2 pointer-events-none absolute top-full left-2/4 -translate-x-2/4 -translate-y-10/14 md:-translate-y-3/5"${ssrIncludeBooleanAttr(false) ? " autoplay" : ""} playsinline controlslist="nofullscreen nodownload noremoteplayback" disablepictureinpicture preload="auto" muted></video></section>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/airpods/Hero.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Hero = Object.assign(_sfc_main$7, { __name: "AirpodsHero" });
const _imports_0$5 = publicAssetsURL("/apple-music-logo.png");
const _sfc_main$6 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "px-10 pt-34 pb-30 bg-[#FAFAFC]" }, _attrs))}><div class="mx-auto max-w-[1000px] flex flex-col-reverse lg:flex-row justify-between items-center gap-x-4 gap-y-14"><div class="text-[2.2rem]/11 md:text-5xl/16"><img${ssrRenderAttr("src", _imports_0$5)} class="h-[0.6em] mb-3"><h2 class="font-medium max-w-[450px]"> Ganhe 3 meses de Apple Music com seus AirPods </h2></div><div class="relative w-full max-w-[350px] lg:w-[35%] aspect-square"><!--[-->`);
  ssrRenderList([
    "/coisas-naturais-cover.jpg",
    "/melodrama-cover.png",
    "/future-nostalgia.png"
  ], (img, index) => {
    _push(`<img${ssrRenderAttr("src", img)} class="${ssrRenderClass([{
      "z-10": index === 0,
      "z-9 scale-90 -translate-y-4": index === 1,
      "z-8 scale-80 -translate-y-8": index === 2
    }, "aspect-square object-cover rounded-xl origin-top size-full absolute top-0 left-0"])}">`);
  });
  _push(`<!--]--></div></div></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/airpods/AppleMusic.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const AppleMusic = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$2]]), { __name: "AirpodsAppleMusic" });
const _imports_0$4 = publicAssetsURL("/audio_hero.png");
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "AudioExperience",
  __ssrInlineRender: true,
  setup(__props) {
    const section = useTemplateRef("section");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "section",
        ref: section,
        class: "w-full relative grid place-items-center overflow-hidden bg-[#140826]"
      }, _attrs))}><div class="text-center text-white pt-14 md:pt-60 mx-auto max-w-[700px] relative z-1"><div class="relative z-1"><h3 class="text-[1.1rem] lg:text-[1.8rem] font-medium mb-1"> Desempenho de áudio </h3><h2 class="text-[2rem]/10 lg:text-[4.8rem]/22 font-semibold"> Uma experiência <br> sonora <br> completamente <br> reinventada. </h2></div><div class="z-0 absolute top-0 left-0 size-full -translate-y-0 lg:translate-y-50 2xl:translate-y-80"><!--[-->`);
      ssrRenderList(["#E589F6", "#A338D2", "#670DA0", "#3C0C67"], (color, index) => {
        _push(`<div class="w-[120vw] lg:w-[70vw] 2xl:w-[55vw] rounded-full absolute top-1/2 left-1/2 aspect-square inset-shadow-[0_0_50px_rgb(255_255_255/25%)] bg-[url(/noise.png)]" style="${ssrRenderStyle({
          backgroundColor: color,
          transform: `translate(-50%, -50%) scale(calc(var(--scale) * ${1 + index * 0.4}))`,
          zIndex: 5 - index
        })}"></div>`);
      });
      _push(`<!--]--></div></div><img${ssrRenderAttr("src", _imports_0$4)} class="md:w-[60%] mx-auto xl:-mt-10 relative z-1"></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/airpods/AudioExperience.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const AudioExperience = Object.assign(_sfc_main$5, { __name: "AirpodsAudioExperience" });
const _imports_0$3 = publicAssetsURL("/battery-case.png");
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Battery",
  __ssrInlineRender: true,
  setup(__props) {
    const section = useTemplateRef("section");
    const showing = ref(false);
    useVisibilityTrigger(section, () => {
      showing.value = true;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><div class="w-full pt-60 pb-70 px-10 text-center relative text-white bg-linear-to-b from-transparent via-emerald-500 to-[#111111]"><h3 class="text-[1.3rem] md:text-[1.7rem] font-medium mb-2"> Bateria para o dia todo </h3><h2 class="text-[2.5rem]/13 md:text-[4rem]/19 font-semibold"> Recarrega rápido <div class="relative text-nowrap"><!--[-->`);
      ssrRenderList(7, (index) => {
        _push(`<span style="${ssrRenderStyle({
          zIndex: 10 - index,
          opacity: !showing.value ? 0 : 1 - index * 0.15 + 0.2,
          transform: index === 1 && !showing.value ? "none" : `translateY(${index * 26 - 26}px) scale(${1 - index * 0.1 + 0.1})`,
          position: index === 1 ? "relative" : "absolute",
          maskImage: index === 1 ? "" : `linear-gradient(180deg,rgba(255,255,255,0) 55%,rgb(255,255,255))`,
          transitionDelay: `${index * 100}ms`
        })}" class="${ssrRenderClass([index === 1 ? "" : "left-2/4 -translate-x-2/4", "top-0 pointer-events-none transition-all duration-500"])}"> E dura </span>`);
      });
      _push(`<!--]--></div></h2></div><img${ssrRenderAttr("src", _imports_0$3)} class="mx-auto -mt-30 w-[280px] relative z-1"><div class="text-center pt-12 px-10 mx-auto max-w-[1000px]"><p class="text-2xl font-medium opacity-90"> O estojo de recarga MagSafe está cheio de recursos úteis, como alto‑falante integrado e Busca Precisa mais poderosa, para você encontrar seus AirPods Pro 3 onde quer que estejam. E, agora, uma única recarga é suficiente para você curtir o dia. Sem parar. </p><div class="py-20 flex gap-6 *:flex-1 flex-col md:flex-row not-md:items-center"><!--[-->`);
      ssrRenderList([
        ["30 horas", "de áudio com o estojo"],
        ["5 horas", "de áudio com apenas uma recarga"],
        ["4 horas", "de áudio com o Cancelamento Ativo de Ruído"]
      ], (item) => {
        _push(`<div class="text-center md:text-left font-medium"><div class="text-xl">Até</div><div class="text-5xl font-bold bg-clip-text text-transparent bg-linear-to-br from-emerald-500 to-emerald-600">${ssrInterpolate(item[0])}</div><div class="text-xl">${ssrInterpolate(item[1])}</div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/airpods/Battery.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Battery = Object.assign(_sfc_main$4, { __name: "AirpodsBattery" });
const _imports_0$2 = publicAssetsURL("/fitness_workout.png");
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "px-10 pt-40 pb-30 bg-[#FAFAFC] relative overflow-hidden" }, _attrs))}><div class="mx-auto max-w-[1300px] flex flex-col-reverse lg:flex-row justify-between items-center gap-x-4 gap-y-14"><div class="text-[2.8rem]/13 md:text-[5rem]/24 max-w-[540px]"><h3 class="text-[0.38em] leading-normal font-medium">Saúde auditiva</h3><h2 class="font-semibold">Avalia e ajuda <br>sua audição.</h2><p class="text-[0.3em] leading-normal opacity-70 mt-6"> Os AirPods Pro 3 trazem melhorias para uma experiência completa em saúde auditiva6. Agora você pode fazer um Teste de Audição com validação científica em uma variedade maior de ambientes. O modo Aparelho Auditivo tem até 67% a mais de duração da bateria no modo Ambiente com apenas uma recarga7. E a Redução de Som Alto minimiza sua exposição a ruídos ambientes altos20. </p></div><img${ssrRenderAttr("src", _imports_0$2)} class="not-xl:hidden absolute left-2/4 bottom-0 max-h-full object-contain origin-top-left scale-170"></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/airpods/HearingHealth.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const HearingHealth = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]), { __name: "AirpodsHearingHealth" });
const _imports_0$1 = publicAssetsURL("/audio-airpods-pro-guts.png");
const _imports_1 = publicAssetsURL("/noise-control-effect.png");
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-full relative grid place-items-center overflow-hidden" }, _attrs))} data-v-f7257aff><div class="text-center pt-12 md:pt-30 relative z-3" data-v-f7257aff><h3 class="text-[1.2rem] md:text-[1.7rem] text-primary font-normal md:mb-2" data-v-f7257aff> Controle de ruído inteligente </h3><h2 class="text-[2.5rem]/12 md:text-[3.8rem]/16 font-semibold" data-v-f7257aff> A melhor coisa que você nunca ouviu </h2><p class="text-[1.15rem] md:text-[1.75rem] opacity-75 mt-3 md:mt-5" data-v-f7257aff> Você, seu som e mais nada </p></div><div class="relative w-full aspect-3/5 md:aspect-5/3 not-md:scale-200" data-v-f7257aff><img${ssrRenderAttr("src", _imports_0$1)} class="object-contain size-[60%] z-2 absolute top-2/4 left-2/4 -translate-2/4" data-v-f7257aff><img${ssrRenderAttr("src", _imports_1)} class="beat object-contain size-[100%] z-1 absolute top-2/4 left-2/4 -translate-2/4" data-v-f7257aff></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/airpods/NoiseCancellation.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const NoiseCancellation = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f7257aff"]]), { __name: "AirpodsNoiseCancellation" });
const _imports_0 = publicAssetsURL("/airpods-rotation.webm");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Usability",
  __ssrInlineRender: true,
  setup(__props) {
    useTemplateRef("sectionRef");
    useTemplateRef("video");
    useTemplateRef("videoContainer");
    useTemplateRef("label1");
    useTemplateRef("label2");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-full relative" }, _attrs))} data-v-004eb966><div class="text-center pt-26 px-6" data-v-004eb966><h3 class="text-[1.4rem] md:text-[1.75rem] text-primary font-normal md:mb-2" data-v-004eb966> Usabilidade </h3><h2 class="text-[2.6rem]/13 md:text-[4.2rem]/18 font-semibold mb-5" data-v-004eb966> Um design harmônico </h2><p class="text-[1.2rem] md:text-[1.6rem] opacity-75 mx-auto max-w-[600px]" data-v-004eb966> Os AirPods 4 oferecem um encaixe excepcional, maior estabilidade e conforto o dia todo. </p></div><div class="relative w-full max-w-[1200px] mx-auto" data-v-004eb966><div class="h-[80svh] w-full grid place-items-center" data-v-004eb966><video${ssrRenderAttr("src", _imports_0)} class="object-contain aspect-738/568 pointer-events-none"${ssrIncludeBooleanAttr(false) ? " autoplay" : ""} playsinline controlslist="nofullscreen nodownload noremoteplayback" disablepictureinpicture preload="auto" muted data-v-004eb966></video></div><div class="w-[340px] absolute top-[360px] left-6 not-lg:hidden" data-v-004eb966><div class="text-[1.1rem] font-medium mb-1" data-v-004eb966> Para um encaxe perfeito </div><p class="opacity-80" data-v-004eb966> A arquitetura interna e o acabamento refinado proporcionam um encaixe firme e confortável para ainda mais pessoas. </p></div><div class="w-[340px] absolute top-[1340px] right-6 not-lg:hidden" data-v-004eb966><div class="text-[1.1rem] font-medium mb-1" data-v-004eb966> Haste atualizada com sensor de força. </div><p class="opacity-80" data-v-004eb966> Basta apertar a haste para tocar músicas, atender chamadas e até fazer fotos e vídeos no iPhone com o novo Controle Remoto da Câmera. </p></div></div><div class="mx-auto max-w-[460px] text-center pb-20 -mt-8" data-v-004eb966><p class="text-[1.1rem] font-medium mb-1" data-v-004eb966> Resistentes a poeira, suor e água. </p><p class="opacity-75" data-v-004eb966> Os AirPods 4 e o estojo de recarga têm classificação IP54 de resistência a poeira, suor e água. Aguentam os exercícios mais intensos e até mesmo a chuva6. </p></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/airpods/Usability.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Usability = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-004eb966"]]), { __name: "AirpodsUsability" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "airpods",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "AirPods Pro - Apple",
      link: [
        {
          rel: "preload",
          as: "video",
          href: "/airpods-rotation.webm"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Hero, null, null, _parent));
      _push(ssrRenderComponent(AudioExperience, null, null, _parent));
      _push(ssrRenderComponent(Usability, null, null, _parent));
      _push(ssrRenderComponent(HearingHealth, null, null, _parent));
      _push(ssrRenderComponent(NoiseCancellation, null, null, _parent));
      _push(ssrRenderComponent(Battery, null, null, _parent));
      _push(ssrRenderComponent(AppleMusic, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/airpods.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=airpods-DuVd83Mj.mjs.map
