import { e as useRoute, b as useChats, _ as __nuxt_component_0$1, t as tv, i as _appConfig } from './server.mjs';
import { defineComponent, computed, unref, withCtx, createBlock, createCommentVNode, openBlock, toDisplayString, createVNode, useSlots, mergeProps, renderSlot, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { Primitive } from 'reka-ui';
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

var _a;
const theme = {
  "slots": {
    "root": "rounded-[calc(var(--ui-radius)*2)]",
    "header": "p-4 sm:px-6",
    "body": "p-4 sm:p-6",
    "footer": "p-4 sm:px-6"
  },
  "variants": {
    "variant": {
      "solid": {
        "root": "bg-(--ui-bg-inverted) text-(--ui-bg)"
      },
      "outline": {
        "root": "bg-(--ui-bg) ring ring-(--ui-border) divide-y divide-(--ui-border)"
      },
      "soft": {
        "root": "bg-(--ui-bg-elevated)/50 divide-y divide-(--ui-border)"
      },
      "subtle": {
        "root": "bg-(--ui-bg-elevated)/50 ring ring-(--ui-border) divide-y divide-(--ui-border)"
      }
    }
  },
  "defaultVariants": {
    "variant": "outline"
  }
};
const appConfigCard = _appConfig;
const card = tv({ extend: tv(theme), ...((_a = appConfigCard.ui) == null ? void 0 : _a.card) || {} });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    as: {},
    variant: {},
    class: {},
    ui: {}
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const ui = computed(() => card({ variant: props.variant }));
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: _ctx.as,
        class: ui.value.root({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b, _c, _d, _e, _f;
          if (_push2) {
            if (!!slots.header) {
              _push2(`<div class="${ssrRenderClass(ui.value.header({ class: (_a3 = props.ui) == null ? void 0 : _a3.header }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "header", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (!!slots.default) {
              _push2(`<div class="${ssrRenderClass(ui.value.body({ class: (_b = props.ui) == null ? void 0 : _b.body }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (!!slots.footer) {
              _push2(`<div class="${ssrRenderClass(ui.value.footer({ class: (_c = props.ui) == null ? void 0 : _c.footer }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              !!slots.header ? (openBlock(), createBlock("div", {
                key: 0,
                class: ui.value.header({ class: (_d = props.ui) == null ? void 0 : _d.header })
              }, [
                renderSlot(_ctx.$slots, "header")
              ], 2)) : createCommentVNode("", true),
              !!slots.default ? (openBlock(), createBlock("div", {
                key: 1,
                class: ui.value.body({ class: (_e = props.ui) == null ? void 0 : _e.body })
              }, [
                renderSlot(_ctx.$slots, "default")
              ], 2)) : createCommentVNode("", true),
              !!slots.footer ? (openBlock(), createBlock("div", {
                key: 2,
                class: ui.value.footer({ class: (_f = props.ui) == null ? void 0 : _f.footer })
              }, [
                renderSlot(_ctx.$slots, "footer")
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@https+++pkg.pr.new_6168458293122d7cd2d67add5b8edd35/node_modules/@nuxt/ui/dist/runtime/components/Card.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$1, { __name: "UCard" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const projectId = route.params.projectId;
    const { chatsInProject } = useChats();
    const chats = computed(() => chatsInProject(projectId));
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_UCard = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if ((_a2 = unref(chats)) == null ? void 0 : _a2.length) {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"><!--[-->`);
        ssrRenderList(unref(chats), (chat) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: chat.id,
            to: `/projects/${unref(projectId)}/chats/${chat.id}`
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_UCard, { class: "h-full" }, {
                  header: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<h3 class="text-md font-medium"${_scopeId2}>${ssrInterpolate(chat.title || "Untitled Chat")}</h3>`);
                    } else {
                      return [
                        createVNode("h3", { class: "text-md font-medium" }, toDisplayString(chat.title || "Untitled Chat"), 1)
                      ];
                    }
                  }),
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    var _a3, _b, _c, _d;
                    if (_push3) {
                      if ((_a3 = chat.messages) == null ? void 0 : _a3.length) {
                        _push3(`<p class="text-sm line-clamp-2 text-(--ui-text-dimmed)"${_scopeId2}>${ssrInterpolate((_b = chat.messages[chat.messages.length - 1]) == null ? void 0 : _b.content)}</p>`);
                      } else {
                        _push3(`<!---->`);
                      }
                    } else {
                      return [
                        ((_c = chat.messages) == null ? void 0 : _c.length) ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-sm line-clamp-2 text-(--ui-text-dimmed)"
                        }, toDisplayString((_d = chat.messages[chat.messages.length - 1]) == null ? void 0 : _d.content), 1)) : createCommentVNode("", true)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_UCard, { class: "h-full" }, {
                    header: withCtx(() => [
                      createVNode("h3", { class: "text-md font-medium" }, toDisplayString(chat.title || "Untitled Chat"), 1)
                    ]),
                    default: withCtx(() => {
                      var _a3, _b;
                      return [
                        ((_a3 = chat.messages) == null ? void 0 : _a3.length) ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-sm line-clamp-2 text-(--ui-text-dimmed)"
                        }, toDisplayString((_b = chat.messages[chat.messages.length - 1]) == null ? void 0 : _b.content), 1)) : createCommentVNode("", true)
                      ];
                    }),
                    _: 2
                  }, 1024)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/chat/app/pages/projects/[projectId]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-B8_ajLEr.mjs.map
