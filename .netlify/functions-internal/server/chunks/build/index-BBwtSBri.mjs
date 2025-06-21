import { _ as __nuxt_component_0 } from './Container-Eoho1LEH.mjs';
import { a as useAppConfig, b as useChats, c as __nuxt_component_2$1, I as ImageComponent, d as __nuxt_component_1 } from './server.mjs';
import { defineComponent, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'reka-ui';
import '../_/nitro.mjs';
import 'uuid';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:fs';
import 'node:path';
import 'chokidar';
import 'anymatch';
import 'vue-router';
import '@iconify/vue';
import '@vueuse/core';
import '@iconify/utils/lib/css/icon';
import 'tailwind-variants';
import '@vue/shared';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const appConfig = useAppConfig();
    const { createChatAndNavigate } = useChats();
    async function handleCreateChat() {
      await createChatAndNavigate();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = __nuxt_component_0;
      const _component_UButton = __nuxt_component_2$1;
      const _component_NuxtImg = ImageComponent;
      const _component_UIcon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "landing-page" }, _attrs))} data-v-6bdca921>`);
      _push(ssrRenderComponent(_component_UContainer, { class: "hero-section" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="hero-content" data-v-6bdca921${_scopeId}><h1 class="hero-title" data-v-6bdca921${_scopeId}>${ssrInterpolate(unref(appConfig).title)}</h1><p class="hero-subtitle" data-v-6bdca921${_scopeId}> Experience the future of conversation with our intelligent chat platform. Start meaningful conversations powered by cutting-edge AI technology. </p>`);
            _push2(ssrRenderComponent(_component_UButton, {
              class: "text-center font-bold self-center",
              size: "xl",
              onClick: handleCreateChat
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Start Your First Chat `);
                } else {
                  return [
                    createTextVNode(" Start Your First Chat ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="hero-image" data-v-6bdca921${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: "/hero.png",
              alt: "Chat Interface Preview",
              class: "hero-img"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "hero-content" }, [
                createVNode("h1", { class: "hero-title" }, toDisplayString(unref(appConfig).title), 1),
                createVNode("p", { class: "hero-subtitle" }, " Experience the future of conversation with our intelligent chat platform. Start meaningful conversations powered by cutting-edge AI technology. "),
                createVNode(_component_UButton, {
                  class: "text-center font-bold self-center",
                  size: "xl",
                  onClick: handleCreateChat
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Start Your First Chat ")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "hero-image" }, [
                createVNode(_component_NuxtImg, {
                  src: "/hero.png",
                  alt: "Chat Interface Preview",
                  class: "hero-img"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UContainer, { class: "features-section" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="section-wrapper" data-v-6bdca921${_scopeId}><h2 class="section-title" data-v-6bdca921${_scopeId}>Why Choose Our Chat Platform?</h2><div class="features-grid" data-v-6bdca921${_scopeId}><div class="feature-card" data-v-6bdca921${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: "/ai-conversations.png",
              alt: "AI Powered",
              class: "feature-image",
              width: "200",
              densities: "x1"
            }, null, _parent2, _scopeId));
            _push2(`<h3 class="feature-title" data-v-6bdca921${_scopeId}>AI-Powered Conversations</h3><p class="feature-description" data-v-6bdca921${_scopeId}> Experience intelligent responses and natural conversation flow with our advanced AI technology. </p></div><div class="feature-card" data-v-6bdca921${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: "/realtime.png",
              alt: "Real Time",
              class: "feature-image"
            }, null, _parent2, _scopeId));
            _push2(`<h3 class="feature-title" data-v-6bdca921${_scopeId}>Real-Time Messaging</h3><p class="feature-description" data-v-6bdca921${_scopeId}> Instant responses and seamless communication with lightning-fast message delivery. </p></div><div class="feature-card" data-v-6bdca921${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: "/secure.png",
              alt: "Secure",
              class: "feature-image"
            }, null, _parent2, _scopeId));
            _push2(`<h3 class="feature-title" data-v-6bdca921${_scopeId}>Secure &amp; Private</h3><p class="feature-description" data-v-6bdca921${_scopeId}> Your conversations are protected with enterprise-grade security and privacy measures. </p></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "section-wrapper" }, [
                createVNode("h2", { class: "section-title" }, "Why Choose Our Chat Platform?"),
                createVNode("div", { class: "features-grid" }, [
                  createVNode("div", { class: "feature-card" }, [
                    createVNode(_component_NuxtImg, {
                      src: "/ai-conversations.png",
                      alt: "AI Powered",
                      class: "feature-image",
                      width: "200",
                      densities: "x1"
                    }),
                    createVNode("h3", { class: "feature-title" }, "AI-Powered Conversations"),
                    createVNode("p", { class: "feature-description" }, " Experience intelligent responses and natural conversation flow with our advanced AI technology. ")
                  ]),
                  createVNode("div", { class: "feature-card" }, [
                    createVNode(_component_NuxtImg, {
                      src: "/realtime.png",
                      alt: "Real Time",
                      class: "feature-image"
                    }),
                    createVNode("h3", { class: "feature-title" }, "Real-Time Messaging"),
                    createVNode("p", { class: "feature-description" }, " Instant responses and seamless communication with lightning-fast message delivery. ")
                  ]),
                  createVNode("div", { class: "feature-card" }, [
                    createVNode(_component_NuxtImg, {
                      src: "/secure.png",
                      alt: "Secure",
                      class: "feature-image"
                    }),
                    createVNode("h3", { class: "feature-title" }, "Secure & Private"),
                    createVNode("p", { class: "feature-description" }, " Your conversations are protected with enterprise-grade security and privacy measures. ")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UContainer, { class: "benefits-section" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="benefits-content" data-v-6bdca921${_scopeId}><div class="benefits-text" data-v-6bdca921${_scopeId}><h2 class="section-title" data-v-6bdca921${_scopeId}>Transform Your Communication</h2><p class="benefits-description" data-v-6bdca921${_scopeId}> Our chat platform revolutionizes how you interact with AI. Whether you&#39;re seeking information, brainstorming ideas, or having casual conversations, we provide an intuitive and powerful experience. </p><div class="benefits-list" data-v-6bdca921${_scopeId}><div class="benefit-item" data-v-6bdca921${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-check-circle",
              class: "benefit-icon"
            }, null, _parent2, _scopeId));
            _push2(`<span data-v-6bdca921${_scopeId}>Instant AI responses</span></div><div class="benefit-item" data-v-6bdca921${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-check-circle",
              class: "benefit-icon"
            }, null, _parent2, _scopeId));
            _push2(`<span data-v-6bdca921${_scopeId}>Natural conversation flow</span></div><div class="benefit-item" data-v-6bdca921${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UIcon, {
              name: "i-heroicons-check-circle",
              class: "benefit-icon"
            }, null, _parent2, _scopeId));
            _push2(`<span data-v-6bdca921${_scopeId}>24/7 availability</span></div></div></div><div class="benefits-image" data-v-6bdca921${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: "/people.png",
              alt: "Communication Benefits",
              class: "benefits-img"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "benefits-content" }, [
                createVNode("div", { class: "benefits-text" }, [
                  createVNode("h2", { class: "section-title" }, "Transform Your Communication"),
                  createVNode("p", { class: "benefits-description" }, " Our chat platform revolutionizes how you interact with AI. Whether you're seeking information, brainstorming ideas, or having casual conversations, we provide an intuitive and powerful experience. "),
                  createVNode("div", { class: "benefits-list" }, [
                    createVNode("div", { class: "benefit-item" }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-check-circle",
                        class: "benefit-icon"
                      }),
                      createVNode("span", null, "Instant AI responses")
                    ]),
                    createVNode("div", { class: "benefit-item" }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-check-circle",
                        class: "benefit-icon"
                      }),
                      createVNode("span", null, "Natural conversation flow")
                    ]),
                    createVNode("div", { class: "benefit-item" }, [
                      createVNode(_component_UIcon, {
                        name: "i-heroicons-check-circle",
                        class: "benefit-icon"
                      }),
                      createVNode("span", null, "24/7 availability")
                    ])
                  ])
                ]),
                createVNode("div", { class: "benefits-image" }, [
                  createVNode(_component_NuxtImg, {
                    src: "/people.png",
                    alt: "Communication Benefits",
                    class: "benefits-img"
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UContainer, { class: "cta-section" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="section-wrapper" data-v-6bdca921${_scopeId}><div class="cta-content" data-v-6bdca921${_scopeId}><h2 class="cta-title" data-v-6bdca921${_scopeId}>Ready to Get Started?</h2><p class="cta-subtitle" data-v-6bdca921${_scopeId}> Join thousands of users who are already experiencing the future of AI conversation. </p>`);
            _push2(ssrRenderComponent(_component_UButton, {
              class: "cta-button",
              size: "xl",
              variant: "outline",
              onClick: handleCreateChat
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Create A New Chat `);
                } else {
                  return [
                    createTextVNode(" Create A New Chat ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "section-wrapper" }, [
                createVNode("div", { class: "cta-content" }, [
                  createVNode("h2", { class: "cta-title" }, "Ready to Get Started?"),
                  createVNode("p", { class: "cta-subtitle" }, " Join thousands of users who are already experiencing the future of AI conversation. "),
                  createVNode(_component_UButton, {
                    class: "cta-button",
                    size: "xl",
                    variant: "outline",
                    onClick: handleCreateChat
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Create A New Chat ")
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/marketing/app/pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6bdca921"]]);

export { index as default };
//# sourceMappingURL=index-BBwtSBri.mjs.map
