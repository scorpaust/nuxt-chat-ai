import { defineComponent, useSSRContext, computed, unref, mergeProps, withCtx, renderSlot, createBlock, createCommentVNode, openBlock, toDisplayString, useSlots, createVNode, toRef, createTextVNode, resolveDynamicComponent, createSlots, Fragment, renderList, ref } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderClass, ssrInterpolate, ssrRenderVNode, ssrRenderList, ssrRenderAttrs } from 'vue/server-renderer';
import { Primitive, useForwardPropsEmits, CollapsibleRoot, CollapsibleTrigger, CollapsibleContent, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuLink, NavigationMenuContent, NavigationMenuRoot, NavigationMenuList, NavigationMenuIndicator, NavigationMenuViewport } from 'reka-ui';
import { reactivePick, createReusableTemplate } from '@vueuse/core';
import { t as tv, i as _appConfig, g as useButtonGroup, h as useComponentIcons, d as __nuxt_component_1$1, U as UAvatar, a as useAppConfig, q as get, r as ULink, s as pickLinkProps, v as ULinkBase, w as useLocale, c as __nuxt_component_2$1, e as useRoute, j as useProjects, b as useChats } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import '@iconify/utils/lib/css/icon';
import 'tailwind-variants';
import '@vue/shared';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

var _a, _b, _c, _d;
const theme$3 = {
  "slots": {
    "base": "font-medium inline-flex items-center",
    "label": "truncate",
    "leadingIcon": "shrink-0",
    "leadingAvatar": "shrink-0",
    "leadingAvatarSize": "",
    "trailingIcon": "shrink-0"
  },
  "variants": {
    "buttonGroup": {
      "horizontal": "not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none",
      "vertical": "not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none"
    },
    "color": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    },
    "variant": {
      "solid": "",
      "outline": "",
      "soft": "",
      "subtle": ""
    },
    "size": {
      "xs": {
        "base": "text-[8px]/3 px-1 py-0.5 gap-1 rounded-[calc(var(--ui-radius))]",
        "leadingIcon": "size-3",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-3"
      },
      "sm": {
        "base": "text-[10px]/3 px-1.5 py-1 gap-1 rounded-[calc(var(--ui-radius))]",
        "leadingIcon": "size-3",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-3"
      },
      "md": {
        "base": "text-xs px-2 py-1 gap-1 rounded-[calc(var(--ui-radius)*1.5)]",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4"
      },
      "lg": {
        "base": "text-sm px-2 py-1 gap-1.5 rounded-[calc(var(--ui-radius)*1.5)]",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5"
      },
      "xl": {
        "base": "text-base px-2.5 py-1 gap-1.5 rounded-[calc(var(--ui-radius)*1.5)]",
        "leadingIcon": "size-6",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-6"
      }
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "variant": "solid",
      "class": "bg-(--ui-primary) text-(--ui-bg)"
    },
    {
      "color": "secondary",
      "variant": "solid",
      "class": "bg-(--ui-secondary) text-(--ui-bg)"
    },
    {
      "color": "success",
      "variant": "solid",
      "class": "bg-(--ui-success) text-(--ui-bg)"
    },
    {
      "color": "info",
      "variant": "solid",
      "class": "bg-(--ui-info) text-(--ui-bg)"
    },
    {
      "color": "warning",
      "variant": "solid",
      "class": "bg-(--ui-warning) text-(--ui-bg)"
    },
    {
      "color": "error",
      "variant": "solid",
      "class": "bg-(--ui-error) text-(--ui-bg)"
    },
    {
      "color": "primary",
      "variant": "outline",
      "class": "text-(--ui-primary) ring ring-inset ring-(--ui-primary)/50"
    },
    {
      "color": "secondary",
      "variant": "outline",
      "class": "text-(--ui-secondary) ring ring-inset ring-(--ui-secondary)/50"
    },
    {
      "color": "success",
      "variant": "outline",
      "class": "text-(--ui-success) ring ring-inset ring-(--ui-success)/50"
    },
    {
      "color": "info",
      "variant": "outline",
      "class": "text-(--ui-info) ring ring-inset ring-(--ui-info)/50"
    },
    {
      "color": "warning",
      "variant": "outline",
      "class": "text-(--ui-warning) ring ring-inset ring-(--ui-warning)/50"
    },
    {
      "color": "error",
      "variant": "outline",
      "class": "text-(--ui-error) ring ring-inset ring-(--ui-error)/50"
    },
    {
      "color": "primary",
      "variant": "soft",
      "class": "bg-(--ui-primary)/10 text-(--ui-primary)"
    },
    {
      "color": "secondary",
      "variant": "soft",
      "class": "bg-(--ui-secondary)/10 text-(--ui-secondary)"
    },
    {
      "color": "success",
      "variant": "soft",
      "class": "bg-(--ui-success)/10 text-(--ui-success)"
    },
    {
      "color": "info",
      "variant": "soft",
      "class": "bg-(--ui-info)/10 text-(--ui-info)"
    },
    {
      "color": "warning",
      "variant": "soft",
      "class": "bg-(--ui-warning)/10 text-(--ui-warning)"
    },
    {
      "color": "error",
      "variant": "soft",
      "class": "bg-(--ui-error)/10 text-(--ui-error)"
    },
    {
      "color": "primary",
      "variant": "subtle",
      "class": "bg-(--ui-primary)/10 text-(--ui-primary) ring ring-inset ring-(--ui-primary)/25"
    },
    {
      "color": "secondary",
      "variant": "subtle",
      "class": "bg-(--ui-secondary)/10 text-(--ui-secondary) ring ring-inset ring-(--ui-secondary)/25"
    },
    {
      "color": "success",
      "variant": "subtle",
      "class": "bg-(--ui-success)/10 text-(--ui-success) ring ring-inset ring-(--ui-success)/25"
    },
    {
      "color": "info",
      "variant": "subtle",
      "class": "bg-(--ui-info)/10 text-(--ui-info) ring ring-inset ring-(--ui-info)/25"
    },
    {
      "color": "warning",
      "variant": "subtle",
      "class": "bg-(--ui-warning)/10 text-(--ui-warning) ring ring-inset ring-(--ui-warning)/25"
    },
    {
      "color": "error",
      "variant": "subtle",
      "class": "bg-(--ui-error)/10 text-(--ui-error) ring ring-inset ring-(--ui-error)/25"
    },
    {
      "color": "neutral",
      "variant": "solid",
      "class": "text-(--ui-bg) bg-(--ui-bg-inverted)"
    },
    {
      "color": "neutral",
      "variant": "outline",
      "class": "ring ring-inset ring-(--ui-border-accented) text-(--ui-text) bg-(--ui-bg)"
    },
    {
      "color": "neutral",
      "variant": "soft",
      "class": "text-(--ui-text) bg-(--ui-bg-elevated)"
    },
    {
      "color": "neutral",
      "variant": "subtle",
      "class": "ring ring-inset ring-(--ui-border-accented) text-(--ui-text) bg-(--ui-bg-elevated)"
    }
  ],
  "defaultVariants": {
    "color": "primary",
    "variant": "solid",
    "size": "md"
  }
};
const appConfigBadge = _appConfig;
const badge = tv({ extend: tv(theme$3), ...((_a = appConfigBadge.ui) == null ? void 0 : _a.badge) || {} });
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Badge",
  __ssrInlineRender: true,
  props: {
    as: { default: "span" },
    label: {},
    color: {},
    variant: {},
    size: {},
    class: {},
    ui: {},
    icon: {},
    avatar: {},
    leading: { type: Boolean },
    leadingIcon: {},
    trailing: { type: Boolean },
    trailingIcon: {}
  },
  setup(__props) {
    const props = __props;
    const { orientation, size: buttonGroupSize } = useButtonGroup(props);
    const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(props);
    const ui = computed(() => badge({
      color: props.color,
      variant: props.variant,
      size: buttonGroupSize.value || props.size,
      buttonGroup: orientation.value
    }));
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: _ctx.as,
        class: ui.value.base({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.base] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "leading", {}, () => {
              var _a3, _b2, _c2;
              if (unref(isLeading) && unref(leadingIconName)) {
                _push2(ssrRenderComponent(__nuxt_component_1$1, {
                  name: unref(leadingIconName),
                  class: ui.value.leadingIcon({ class: (_a3 = props.ui) == null ? void 0 : _a3.leadingIcon })
                }, null, _parent2, _scopeId));
              } else if (!!_ctx.avatar) {
                _push2(ssrRenderComponent(UAvatar, mergeProps({
                  size: ((_b2 = props.ui) == null ? void 0 : _b2.leadingAvatarSize) || ui.value.leadingAvatarSize()
                }, _ctx.avatar, {
                  class: ui.value.leadingAvatar({ class: (_c2 = props.ui) == null ? void 0 : _c2.leadingAvatar })
                }), null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              var _a3;
              if (_ctx.label) {
                _push2(`<span class="${ssrRenderClass(ui.value.label({ class: (_a3 = props.ui) == null ? void 0 : _a3.label }))}"${_scopeId}>${ssrInterpolate(_ctx.label)}</span>`);
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            ssrRenderSlot(_ctx.$slots, "trailing", {}, () => {
              var _a3;
              if (unref(isTrailing) && unref(trailingIconName)) {
                _push2(ssrRenderComponent(__nuxt_component_1$1, {
                  name: unref(trailingIconName),
                  class: ui.value.trailingIcon({ class: (_a3 = props.ui) == null ? void 0 : _a3.trailingIcon })
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "leading", {}, () => {
                var _a3, _b2, _c2;
                return [
                  unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(__nuxt_component_1$1, {
                    key: 0,
                    name: unref(leadingIconName),
                    class: ui.value.leadingIcon({ class: (_a3 = props.ui) == null ? void 0 : _a3.leadingIcon })
                  }, null, 8, ["name", "class"])) : !!_ctx.avatar ? (openBlock(), createBlock(UAvatar, mergeProps({
                    key: 1,
                    size: ((_b2 = props.ui) == null ? void 0 : _b2.leadingAvatarSize) || ui.value.leadingAvatarSize()
                  }, _ctx.avatar, {
                    class: ui.value.leadingAvatar({ class: (_c2 = props.ui) == null ? void 0 : _c2.leadingAvatar })
                  }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                ];
              }),
              renderSlot(_ctx.$slots, "default", {}, () => {
                var _a3;
                return [
                  _ctx.label ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: ui.value.label({ class: (_a3 = props.ui) == null ? void 0 : _a3.label })
                  }, toDisplayString(_ctx.label), 3)) : createCommentVNode("", true)
                ];
              }),
              renderSlot(_ctx.$slots, "trailing", {}, () => {
                var _a3;
                return [
                  unref(isTrailing) && unref(trailingIconName) ? (openBlock(), createBlock(__nuxt_component_1$1, {
                    key: 0,
                    name: unref(trailingIconName),
                    class: ui.value.trailingIcon({ class: (_a3 = props.ui) == null ? void 0 : _a3.trailingIcon })
                  }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                ];
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@https+++pkg.pr.new_6168458293122d7cd2d67add5b8edd35/node_modules/@nuxt/ui/dist/runtime/components/Badge.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const UBadge = Object.assign(_sfc_main$6, { __name: "UBadge" });
const theme$2 = {
  "slots": {
    "root": "",
    "content": "data-[state=open]:animate-[collapsible-down_200ms_ease-out] data-[state=closed]:animate-[collapsible-up_200ms_ease-out] overflow-hidden"
  }
};
const appConfigCollapsible = _appConfig;
const collapsible = tv({ extend: tv(theme$2), ...((_b = appConfigCollapsible.ui) == null ? void 0 : _b.collapsible) || {} });
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Collapsible",
  __ssrInlineRender: true,
  props: {
    as: {},
    class: {},
    ui: {},
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    disabled: { type: Boolean },
    unmountOnHide: { type: Boolean, default: true }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const rootProps = useForwardPropsEmits(reactivePick(props, "as", "defaultOpen", "open", "disabled", "unmountOnHide"), emits);
    const ui = collapsible();
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(ssrRenderComponent(unref(CollapsibleRoot), mergeProps(unref(rootProps), {
        class: unref(ui).root({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.root] })
      }, _attrs), {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          var _a3, _b2;
          if (_push2) {
            if (!!slots.default) {
              _push2(ssrRenderComponent(unref(CollapsibleTrigger), { "as-child": "" }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "default", { open }, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "default", { open })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(CollapsibleContent), {
              class: unref(ui).content({ class: (_a3 = props.ui) == null ? void 0 : _a3.content })
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "content", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "content")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              !!slots.default ? (openBlock(), createBlock(unref(CollapsibleTrigger), {
                key: 0,
                "as-child": ""
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", { open })
                ]),
                _: 2
              }, 1024)) : createCommentVNode("", true),
              createVNode(unref(CollapsibleContent), {
                class: unref(ui).content({ class: (_b2 = props.ui) == null ? void 0 : _b2.content })
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "content")
                ]),
                _: 3
              }, 8, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@https+++pkg.pr.new_6168458293122d7cd2d67add5b8edd35/node_modules/@nuxt/ui/dist/runtime/components/Collapsible.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const UCollapsible = Object.assign(_sfc_main$5, { __name: "UCollapsible" });
const theme$1 = {
  "slots": {
    "root": "relative flex gap-1.5 [&>div]:min-w-0",
    "list": "isolate min-w-0",
    "label": "w-full flex items-center gap-1.5 font-semibold text-xs/5 text-(--ui-text-highlighted) px-2.5 py-1.5",
    "item": "min-w-0",
    "link": "group relative w-full flex items-center gap-1.5 font-medium text-sm before:absolute before:z-[-1] before:rounded-[calc(var(--ui-radius)*1.5)] focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2",
    "linkLeadingIcon": "shrink-0 size-5",
    "linkLeadingAvatar": "shrink-0",
    "linkLeadingAvatarSize": "2xs",
    "linkTrailing": "ms-auto inline-flex gap-1.5 items-center",
    "linkTrailingBadge": "shrink-0",
    "linkTrailingBadgeSize": "sm",
    "linkTrailingIcon": "size-5 transform shrink-0 group-data-[state=open]:rotate-180 transition-transform duration-200",
    "linkLabel": "truncate",
    "linkLabelExternalIcon": "inline-block size-3 align-top text-(--ui-text-dimmed)",
    "childList": "",
    "childItem": "",
    "childLink": "group size-full px-3 py-2 rounded-[calc(var(--ui-radius)*1.5)] flex items-start gap-2 text-start",
    "childLinkWrapper": "flex flex-col items-start",
    "childLinkIcon": "size-5 shrink-0",
    "childLinkLabel": "font-semibold text-sm relative inline-flex",
    "childLinkLabelExternalIcon": "inline-block size-3 align-top text-(--ui-text-dimmed)",
    "childLinkDescription": "text-sm text-(--ui-text-muted)",
    "separator": "px-2 h-px bg-(--ui-border)",
    "viewportWrapper": "absolute top-full left-0 flex w-full",
    "viewport": "relative overflow-hidden bg-(--ui-bg) shadow-lg rounded-[calc(var(--ui-radius)*1.5)] ring ring-(--ui-border) h-(--reka-navigation-menu-viewport-height) w-full transition-[width,height,left] duration-200 origin-[top_center] data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in]",
    "content": "absolute top-0 left-0 w-full",
    "indicator": "absolute data-[state=visible]:animate-[fade-in_100ms_ease-out] data-[state=hidden]:animate-[fade-out_100ms_ease-in] data-[state=hidden]:opacity-0 bottom-0 z-[1] w-(--reka-navigation-menu-indicator-size) translate-x-(--reka-navigation-menu-indicator-position) flex h-2.5 items-end justify-center overflow-hidden transition-[translate,width] duration-200",
    "arrow": "relative top-[50%] size-2.5 rotate-45 border border-(--ui-border) bg-(--ui-bg) z-[1] rounded-[calc(var(--ui-radius)/2)]"
  },
  "variants": {
    "color": {
      "primary": {
        "link": "focus-visible:before:ring-(--ui-primary)",
        "childLink": "focus-visible:outline-(--ui-primary)"
      },
      "secondary": {
        "link": "focus-visible:before:ring-(--ui-secondary)",
        "childLink": "focus-visible:outline-(--ui-secondary)"
      },
      "success": {
        "link": "focus-visible:before:ring-(--ui-success)",
        "childLink": "focus-visible:outline-(--ui-success)"
      },
      "info": {
        "link": "focus-visible:before:ring-(--ui-info)",
        "childLink": "focus-visible:outline-(--ui-info)"
      },
      "warning": {
        "link": "focus-visible:before:ring-(--ui-warning)",
        "childLink": "focus-visible:outline-(--ui-warning)"
      },
      "error": {
        "link": "focus-visible:before:ring-(--ui-error)",
        "childLink": "focus-visible:outline-(--ui-error)"
      },
      "neutral": {
        "link": "focus-visible:before:ring-(--ui-border-inverted)",
        "childLink": "focus-visible:outline-(--ui-border-inverted)"
      }
    },
    "highlightColor": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    },
    "variant": {
      "pill": "",
      "link": ""
    },
    "orientation": {
      "horizontal": {
        "root": "items-center justify-between",
        "list": "flex items-center",
        "item": "py-2",
        "link": "px-2.5 py-1.5 before:inset-x-px before:inset-y-0",
        "childList": "grid p-2"
      },
      "vertical": {
        "root": "flex-col",
        "link": "flex-row px-2.5 py-1.5 before:inset-y-px before:inset-x-0"
      }
    },
    "contentOrientation": {
      "horizontal": {
        "viewport": "",
        "viewportWrapper": "justify-center",
        "content": "data-[motion=from-start]:animate-[enter-from-left_200ms_ease] data-[motion=from-end]:animate-[enter-from-right_200ms_ease] data-[motion=to-start]:animate-[exit-to-left_200ms_ease] data-[motion=to-end]:animate-[exit-to-right_200ms_ease]"
      },
      "vertical": {
        "viewport": "sm:w-(--reka-navigation-menu-viewport-width) left-(--reka-navigation-menu-viewport-left)",
        "content": ""
      }
    },
    "active": {
      "true": {
        "childLink": "bg-(--ui-bg-elevated) text-(--ui-text-highlighted)",
        "childLinkIcon": "text-(--ui-text)"
      },
      "false": {
        "link": "text-(--ui-text-muted)",
        "linkLeadingIcon": "text-(--ui-text-dimmed)",
        "childLink": [
          "hover:bg-(--ui-bg-elevated)/50 text-(--ui-text) hover:text-(--ui-text-highlighted)",
          "transition-colors"
        ],
        "childLinkIcon": [
          "text-(--ui-text-dimmed) group-hover:text-(--ui-text)",
          "transition-colors"
        ]
      }
    },
    "disabled": {
      "true": {
        "link": "cursor-not-allowed opacity-75"
      }
    },
    "highlight": {
      "true": ""
    },
    "level": {
      "true": ""
    },
    "collapsed": {
      "true": ""
    }
  },
  "compoundVariants": [
    {
      "orientation": "horizontal",
      "contentOrientation": "horizontal",
      "class": {
        "childList": "grid-cols-2 gap-2"
      }
    },
    {
      "orientation": "horizontal",
      "contentOrientation": "vertical",
      "class": {
        "childList": "gap-1",
        "content": "w-60"
      }
    },
    {
      "orientation": "horizontal",
      "highlight": true,
      "class": {
        "link": [
          "after:absolute after:-bottom-2 after:inset-x-2.5 after:block after:h-px after:rounded-full",
          "after:transition-colors"
        ]
      }
    },
    {
      "orientation": "vertical",
      "highlight": true,
      "level": true,
      "class": {
        "link": [
          "after:absolute after:-start-1.5 after:inset-y-0.5 after:block after:w-px after:rounded-full",
          "after:transition-colors"
        ]
      }
    },
    {
      "disabled": false,
      "active": false,
      "variant": "pill",
      "class": {
        "link": [
          "hover:text-(--ui-text-highlighted) hover:before:bg-(--ui-bg-elevated)/50",
          "transition-colors before:transition-colors"
        ],
        "linkLeadingIcon": [
          "group-hover:text-(--ui-text)",
          "transition-colors"
        ]
      }
    },
    {
      "disabled": false,
      "active": false,
      "variant": "pill",
      "orientation": "horizontal",
      "class": {
        "link": "data-[state=open]:text-(--ui-text-highlighted)",
        "linkLeadingIcon": "group-data-[state=open]:text-(--ui-text)"
      }
    },
    {
      "disabled": false,
      "variant": "pill",
      "highlight": true,
      "orientation": "horizontal",
      "class": {
        "link": "data-[state=open]:before:bg-(--ui-bg-elevated)/50"
      }
    },
    {
      "disabled": false,
      "variant": "pill",
      "highlight": false,
      "active": false,
      "orientation": "horizontal",
      "class": {
        "link": "data-[state=open]:before:bg-(--ui-bg-elevated)/50"
      }
    },
    {
      "color": "primary",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-(--ui-primary)",
        "linkLeadingIcon": "text-(--ui-primary) group-data-[state=open]:text-(--ui-primary)"
      }
    },
    {
      "color": "secondary",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-(--ui-secondary)",
        "linkLeadingIcon": "text-(--ui-secondary) group-data-[state=open]:text-(--ui-secondary)"
      }
    },
    {
      "color": "success",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-(--ui-success)",
        "linkLeadingIcon": "text-(--ui-success) group-data-[state=open]:text-(--ui-success)"
      }
    },
    {
      "color": "info",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-(--ui-info)",
        "linkLeadingIcon": "text-(--ui-info) group-data-[state=open]:text-(--ui-info)"
      }
    },
    {
      "color": "warning",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-(--ui-warning)",
        "linkLeadingIcon": "text-(--ui-warning) group-data-[state=open]:text-(--ui-warning)"
      }
    },
    {
      "color": "error",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-(--ui-error)",
        "linkLeadingIcon": "text-(--ui-error) group-data-[state=open]:text-(--ui-error)"
      }
    },
    {
      "color": "neutral",
      "variant": "pill",
      "active": true,
      "class": {
        "link": "text-(--ui-text-highlighted)",
        "linkLeadingIcon": "text-(--ui-text-highlighted) group-data-[state=open]:text-(--ui-text-highlighted)"
      }
    },
    {
      "variant": "pill",
      "active": true,
      "highlight": false,
      "class": {
        "link": "before:bg-(--ui-bg-elevated)"
      }
    },
    {
      "variant": "pill",
      "active": true,
      "highlight": true,
      "class": {
        "link": [
          "hover:before:bg-(--ui-bg-elevated)/50",
          "before:transition-colors"
        ]
      }
    },
    {
      "disabled": false,
      "active": false,
      "variant": "link",
      "class": {
        "link": [
          "hover:text-(--ui-text-highlighted)",
          "transition-colors"
        ],
        "linkLeadingIcon": [
          "group-hover:text-(--ui-text)",
          "transition-colors"
        ]
      }
    },
    {
      "disabled": false,
      "active": false,
      "variant": "link",
      "orientation": "horizontal",
      "class": {
        "link": "data-[state=open]:text-(--ui-text-highlighted)",
        "linkLeadingIcon": "group-data-[state=open]:text-(--ui-text)"
      }
    },
    {
      "color": "primary",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-(--ui-primary)",
        "linkLeadingIcon": "text-(--ui-primary) group-data-[state=open]:text-(--ui-primary)"
      }
    },
    {
      "color": "secondary",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-(--ui-secondary)",
        "linkLeadingIcon": "text-(--ui-secondary) group-data-[state=open]:text-(--ui-secondary)"
      }
    },
    {
      "color": "success",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-(--ui-success)",
        "linkLeadingIcon": "text-(--ui-success) group-data-[state=open]:text-(--ui-success)"
      }
    },
    {
      "color": "info",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-(--ui-info)",
        "linkLeadingIcon": "text-(--ui-info) group-data-[state=open]:text-(--ui-info)"
      }
    },
    {
      "color": "warning",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-(--ui-warning)",
        "linkLeadingIcon": "text-(--ui-warning) group-data-[state=open]:text-(--ui-warning)"
      }
    },
    {
      "color": "error",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-(--ui-error)",
        "linkLeadingIcon": "text-(--ui-error) group-data-[state=open]:text-(--ui-error)"
      }
    },
    {
      "color": "neutral",
      "variant": "link",
      "active": true,
      "class": {
        "link": "text-(--ui-text-highlighted)",
        "linkLeadingIcon": "text-(--ui-text-highlighted) group-data-[state=open]:text-(--ui-text-highlighted)"
      }
    },
    {
      "highlightColor": "primary",
      "highlight": true,
      "level": true,
      "active": true,
      "class": {
        "link": "after:bg-(--ui-primary)"
      }
    },
    {
      "highlightColor": "secondary",
      "highlight": true,
      "level": true,
      "active": true,
      "class": {
        "link": "after:bg-(--ui-secondary)"
      }
    },
    {
      "highlightColor": "success",
      "highlight": true,
      "level": true,
      "active": true,
      "class": {
        "link": "after:bg-(--ui-success)"
      }
    },
    {
      "highlightColor": "info",
      "highlight": true,
      "level": true,
      "active": true,
      "class": {
        "link": "after:bg-(--ui-info)"
      }
    },
    {
      "highlightColor": "warning",
      "highlight": true,
      "level": true,
      "active": true,
      "class": {
        "link": "after:bg-(--ui-warning)"
      }
    },
    {
      "highlightColor": "error",
      "highlight": true,
      "level": true,
      "active": true,
      "class": {
        "link": "after:bg-(--ui-error)"
      }
    },
    {
      "highlightColor": "neutral",
      "highlight": true,
      "level": true,
      "active": true,
      "class": {
        "link": "after:bg-(--ui-bg-inverted)"
      }
    },
    {
      "orientation": "vertical",
      "collapsed": false,
      "class": {
        "childList": "ms-5 border-s border-(--ui-border)",
        "childItem": "ps-1.5 -ms-px"
      }
    },
    {
      "orientation": "vertical",
      "collapsed": true,
      "class": {
        "link": "px-1.5"
      }
    }
  ],
  "defaultVariants": {
    "color": "primary",
    "highlightColor": "primary",
    "variant": "pill"
  }
};
const appConfigNavigationMenu = _appConfig;
const navigationMenu = tv({ extend: tv(theme$1), ...((_c = appConfigNavigationMenu.ui) == null ? void 0 : _c.navigationMenu) || {} });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenu",
  __ssrInlineRender: true,
  props: {
    as: {},
    trailingIcon: {},
    externalIcon: { type: [Boolean, String], default: true },
    items: {},
    color: {},
    variant: {},
    orientation: { default: "horizontal" },
    collapsed: { type: Boolean },
    highlight: { type: Boolean },
    highlightColor: {},
    content: {},
    contentOrientation: { default: "horizontal" },
    arrow: { type: Boolean },
    labelKey: { default: "label" },
    class: {},
    ui: {},
    modelValue: {},
    defaultValue: {},
    delayDuration: { default: 0 },
    disableClickTrigger: { type: Boolean },
    disableHoverTrigger: { type: Boolean },
    skipDelayDuration: {},
    disablePointerLeaveClose: { type: Boolean },
    unmountOnHide: { type: Boolean, default: true }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const rootProps = useForwardPropsEmits(computed(() => ({
      as: props.as,
      modelValue: props.modelValue,
      defaultValue: props.defaultValue,
      delayDuration: props.delayDuration,
      skipDelayDuration: props.skipDelayDuration,
      orientation: props.orientation,
      disableClickTrigger: props.disableClickTrigger,
      disableHoverTrigger: props.disableHoverTrigger,
      disablePointerLeaveClose: props.disablePointerLeaveClose,
      unmountOnHide: props.unmountOnHide
    })), emits);
    const contentProps = toRef(() => props.content);
    const appConfig = useAppConfig();
    const [DefineLinkTemplate, ReuseLinkTemplate] = createReusableTemplate();
    const [DefineItemTemplate, ReuseItemTemplate] = createReusableTemplate({
      props: {
        item: Object,
        index: Number,
        level: Number
      }
    });
    const ui = computed(() => navigationMenu({
      orientation: props.orientation,
      contentOrientation: props.contentOrientation,
      collapsed: props.collapsed,
      color: props.color,
      variant: props.variant,
      highlight: props.highlight,
      highlightColor: props.highlightColor || props.color
    }));
    const lists = computed(() => {
      var _a2;
      return ((_a2 = props.items) == null ? void 0 : _a2.length) ? Array.isArray(props.items[0]) ? props.items : [props.items] : [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(DefineLinkTemplate), null, {
        default: withCtx(({ item, active, index }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, item.slot || "item", {
              item,
              index
            }, () => {
              var _a3, _b2, _c2, _d2, _e;
              ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
                item,
                active,
                index
              }, () => {
                var _a4, _b3, _c3;
                if (item.avatar) {
                  _push2(ssrRenderComponent(UAvatar, mergeProps({
                    size: ((_a4 = props.ui) == null ? void 0 : _a4.linkLeadingAvatarSize) || ui.value.linkLeadingAvatarSize()
                  }, item.avatar, {
                    class: ui.value.linkLeadingAvatar({ class: (_b3 = props.ui) == null ? void 0 : _b3.linkLeadingAvatar, active, disabled: !!item.disabled })
                  }), null, _parent2, _scopeId));
                } else if (item.icon) {
                  _push2(ssrRenderComponent(__nuxt_component_1$1, {
                    name: item.icon,
                    class: ui.value.linkLeadingIcon({ class: (_c3 = props.ui) == null ? void 0 : _c3.linkLeadingIcon, active, disabled: !!item.disabled })
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              if ((!_ctx.collapsed || _ctx.orientation !== "vertical") && (unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"])) {
                _push2(`<span class="${ssrRenderClass(ui.value.linkLabel({ class: (_a3 = props.ui) == null ? void 0 : _a3.linkLabel }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
                  item,
                  active,
                  index
                }, () => {
                  _push2(`${ssrInterpolate(unref(get)(item, props.labelKey))}`);
                }, _push2, _parent2, _scopeId);
                if (item.target === "_blank" && _ctx.externalIcon !== false) {
                  _push2(ssrRenderComponent(__nuxt_component_1$1, {
                    name: typeof _ctx.externalIcon === "string" ? _ctx.externalIcon : unref(appConfig).ui.icons.external,
                    class: ui.value.linkLabelExternalIcon({ class: (_b2 = props.ui) == null ? void 0 : _b2.linkLabelExternalIcon, active })
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</span>`);
              } else {
                _push2(`<!---->`);
              }
              if ((!_ctx.collapsed || _ctx.orientation !== "vertical") && (item.badge || _ctx.orientation === "horizontal" && (((_c2 = item.children) == null ? void 0 : _c2.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) || _ctx.orientation === "vertical" && ((_d2 = item.children) == null ? void 0 : _d2.length) || item.trailingIcon || !!slots[item.slot ? `${item.slot}-trailing` : "item-trailing"])) {
                _push2(`<span class="${ssrRenderClass(ui.value.linkTrailing({ class: (_e = props.ui) == null ? void 0 : _e.linkTrailing }))}"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                  item,
                  active,
                  index
                }, () => {
                  var _a4, _b3, _c3, _d3, _e2, _f;
                  if (item.badge) {
                    _push2(ssrRenderComponent(UBadge, mergeProps({
                      color: "neutral",
                      variant: "outline",
                      size: ((_a4 = props.ui) == null ? void 0 : _a4.linkTrailingBadgeSize) || ui.value.linkTrailingBadgeSize()
                    }, typeof item.badge === "string" || typeof item.badge === "number" ? { label: item.badge } : item.badge, {
                      class: ui.value.linkTrailingBadge({ class: (_b3 = props.ui) == null ? void 0 : _b3.linkTrailingBadge })
                    }), null, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                  if (_ctx.orientation === "horizontal" && (((_c3 = item.children) == null ? void 0 : _c3.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) || _ctx.orientation === "vertical" && ((_d3 = item.children) == null ? void 0 : _d3.length)) {
                    _push2(ssrRenderComponent(__nuxt_component_1$1, {
                      name: item.trailingIcon || _ctx.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                      class: ui.value.linkTrailingIcon({ class: (_e2 = props.ui) == null ? void 0 : _e2.linkTrailingIcon, active })
                    }, null, _parent2, _scopeId));
                  } else if (item.trailingIcon) {
                    _push2(ssrRenderComponent(__nuxt_component_1$1, {
                      name: item.trailingIcon,
                      class: ui.value.linkTrailingIcon({ class: (_f = props.ui) == null ? void 0 : _f.linkTrailingIcon, active })
                    }, null, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                }, _push2, _parent2, _scopeId);
                _push2(`</span>`);
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, item.slot || "item", {
                item,
                index
              }, () => {
                var _a3, _b2, _c2, _d2, _e;
                return [
                  renderSlot(_ctx.$slots, item.slot ? `${item.slot}-leading` : "item-leading", {
                    item,
                    active,
                    index
                  }, () => {
                    var _a4, _b3, _c3;
                    return [
                      item.avatar ? (openBlock(), createBlock(UAvatar, mergeProps({
                        key: 0,
                        size: ((_a4 = props.ui) == null ? void 0 : _a4.linkLeadingAvatarSize) || ui.value.linkLeadingAvatarSize()
                      }, item.avatar, {
                        class: ui.value.linkLeadingAvatar({ class: (_b3 = props.ui) == null ? void 0 : _b3.linkLeadingAvatar, active, disabled: !!item.disabled })
                      }), null, 16, ["size", "class"])) : item.icon ? (openBlock(), createBlock(__nuxt_component_1$1, {
                        key: 1,
                        name: item.icon,
                        class: ui.value.linkLeadingIcon({ class: (_c3 = props.ui) == null ? void 0 : _c3.linkLeadingIcon, active, disabled: !!item.disabled })
                      }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                    ];
                  }),
                  (!_ctx.collapsed || _ctx.orientation !== "vertical") && (unref(get)(item, props.labelKey) || !!slots[item.slot ? `${item.slot}-label` : "item-label"]) ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: ui.value.linkLabel({ class: (_a3 = props.ui) == null ? void 0 : _a3.linkLabel })
                  }, [
                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-label` : "item-label", {
                      item,
                      active,
                      index
                    }, () => [
                      createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                    ]),
                    item.target === "_blank" && _ctx.externalIcon !== false ? (openBlock(), createBlock(__nuxt_component_1$1, {
                      key: 0,
                      name: typeof _ctx.externalIcon === "string" ? _ctx.externalIcon : unref(appConfig).ui.icons.external,
                      class: ui.value.linkLabelExternalIcon({ class: (_b2 = props.ui) == null ? void 0 : _b2.linkLabelExternalIcon, active })
                    }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                  ], 2)) : createCommentVNode("", true),
                  (!_ctx.collapsed || _ctx.orientation !== "vertical") && (item.badge || _ctx.orientation === "horizontal" && (((_c2 = item.children) == null ? void 0 : _c2.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) || _ctx.orientation === "vertical" && ((_d2 = item.children) == null ? void 0 : _d2.length) || item.trailingIcon || !!slots[item.slot ? `${item.slot}-trailing` : "item-trailing"]) ? (openBlock(), createBlock("span", {
                    key: 1,
                    class: ui.value.linkTrailing({ class: (_e = props.ui) == null ? void 0 : _e.linkTrailing })
                  }, [
                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-trailing` : "item-trailing", {
                      item,
                      active,
                      index
                    }, () => {
                      var _a4, _b3, _c3, _d3, _e2, _f;
                      return [
                        item.badge ? (openBlock(), createBlock(UBadge, mergeProps({
                          key: 0,
                          color: "neutral",
                          variant: "outline",
                          size: ((_a4 = props.ui) == null ? void 0 : _a4.linkTrailingBadgeSize) || ui.value.linkTrailingBadgeSize()
                        }, typeof item.badge === "string" || typeof item.badge === "number" ? { label: item.badge } : item.badge, {
                          class: ui.value.linkTrailingBadge({ class: (_b3 = props.ui) == null ? void 0 : _b3.linkTrailingBadge })
                        }), null, 16, ["size", "class"])) : createCommentVNode("", true),
                        _ctx.orientation === "horizontal" && (((_c3 = item.children) == null ? void 0 : _c3.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) || _ctx.orientation === "vertical" && ((_d3 = item.children) == null ? void 0 : _d3.length) ? (openBlock(), createBlock(__nuxt_component_1$1, {
                          key: 1,
                          name: item.trailingIcon || _ctx.trailingIcon || unref(appConfig).ui.icons.chevronDown,
                          class: ui.value.linkTrailingIcon({ class: (_e2 = props.ui) == null ? void 0 : _e2.linkTrailingIcon, active })
                        }, null, 8, ["name", "class"])) : item.trailingIcon ? (openBlock(), createBlock(__nuxt_component_1$1, {
                          key: 2,
                          name: item.trailingIcon,
                          class: ui.value.linkTrailingIcon({ class: (_f = props.ui) == null ? void 0 : _f.linkTrailingIcon, active })
                        }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                      ];
                    })
                  ], 2)) : createCommentVNode("", true)
                ];
              })
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(DefineItemTemplate), null, {
        default: withCtx(({ item, index, level = 0 }, _push2, _parent2, _scopeId) => {
          var _a3, _b2, _c2, _d2, _e, _f;
          if (_push2) {
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(_ctx.orientation === "vertical" && ((_a3 = item.children) == null ? void 0 : _a3.length) && !_ctx.collapsed ? UCollapsible : unref(NavigationMenuItem)), {
              as: "li",
              value: item.value || String(index),
              "default-open": item.defaultOpen,
              "unmount-on-hide": _ctx.orientation === "vertical" && ((_b2 = item.children) == null ? void 0 : _b2.length) && !_ctx.collapsed ? _ctx.unmountOnHide : void 0,
              open: item.open
            }, createSlots({
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                var _a4, _b3, _c3, _d3;
                if (_push3) {
                  if (_ctx.orientation === "vertical" && item.type === "label") {
                    _push3(`<div class="${ssrRenderClass(ui.value.label({ class: (_a4 = props.ui) == null ? void 0 : _a4.label }))}"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(ReuseLinkTemplate), {
                      item,
                      index
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else if (item.type !== "label") {
                    _push3(ssrRenderComponent(ULink, mergeProps(_ctx.orientation === "vertical" && ((_b3 = item.children) == null ? void 0 : _b3.length) && !_ctx.collapsed ? {} : unref(pickLinkProps)(item), { custom: "" }), {
                      default: withCtx(({ active, ...slotProps }, _push4, _parent4, _scopeId3) => {
                        var _a5, _b4, _c4, _d4, _e2, _f2;
                        if (_push4) {
                          ssrRenderVNode(_push4, createVNode(resolveDynamicComponent(_ctx.orientation === "horizontal" && (((_a5 = item.children) == null ? void 0 : _a5.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? unref(NavigationMenuTrigger) : unref(NavigationMenuLink)), {
                            "as-child": "",
                            active: active || item.active,
                            disabled: item.disabled,
                            onSelect: item.onSelect
                          }, {
                            default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                              var _a6, _b5;
                              if (_push5) {
                                _push5(ssrRenderComponent(ULinkBase, mergeProps(slotProps, {
                                  class: ui.value.link({ class: [(_a6 = props.ui) == null ? void 0 : _a6.link, item.class], active: active || item.active, disabled: !!item.disabled, level: _ctx.orientation === "horizontal" || level > 0 })
                                }), {
                                  default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(unref(ReuseLinkTemplate), {
                                        item,
                                        active: active || item.active,
                                        index
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(unref(ReuseLinkTemplate), {
                                          item,
                                          active: active || item.active,
                                          index
                                        }, null, 8, ["item", "active", "index"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(ULinkBase, mergeProps(slotProps, {
                                    class: ui.value.link({ class: [(_b5 = props.ui) == null ? void 0 : _b5.link, item.class], active: active || item.active, disabled: !!item.disabled, level: _ctx.orientation === "horizontal" || level > 0 })
                                  }), {
                                    default: withCtx(() => [
                                      createVNode(unref(ReuseLinkTemplate), {
                                        item,
                                        active: active || item.active,
                                        index
                                      }, null, 8, ["item", "active", "index"])
                                    ]),
                                    _: 2
                                  }, 1040, ["class"])
                                ];
                              }
                            }),
                            _: 2
                          }), _parent4, _scopeId3);
                          if (_ctx.orientation === "horizontal" && (((_b4 = item.children) == null ? void 0 : _b4.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"])) {
                            _push4(ssrRenderComponent(unref(NavigationMenuContent), mergeProps(contentProps.value, {
                              class: ui.value.content({ class: (_c4 = props.ui) == null ? void 0 : _c4.content })
                            }), {
                              default: withCtx((_2, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                                    item,
                                    active,
                                    index
                                  }, () => {
                                    var _a6;
                                    _push5(`<ul class="${ssrRenderClass(ui.value.childList({ class: (_a6 = props.ui) == null ? void 0 : _a6.childList }))}"${_scopeId4}><!--[-->`);
                                    ssrRenderList(item.children, (childItem, childIndex) => {
                                      var _a7;
                                      _push5(`<li class="${ssrRenderClass(ui.value.childItem({ class: (_a7 = props.ui) == null ? void 0 : _a7.childItem }))}"${_scopeId4}>`);
                                      _push5(ssrRenderComponent(ULink, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                        default: withCtx(({ active: childActive, ...childSlotProps }, _push6, _parent6, _scopeId5) => {
                                          if (_push6) {
                                            _push6(ssrRenderComponent(unref(NavigationMenuLink), {
                                              "as-child": "",
                                              active: childActive,
                                              onSelect: childItem.onSelect
                                            }, {
                                              default: withCtx((_3, _push7, _parent7, _scopeId6) => {
                                                var _a8, _b5;
                                                if (_push7) {
                                                  _push7(ssrRenderComponent(ULinkBase, mergeProps({ ref_for: true }, childSlotProps, {
                                                    class: ui.value.childLink({ class: [(_a8 = props.ui) == null ? void 0 : _a8.childLink, childItem.class], active: childActive })
                                                  }), {
                                                    default: withCtx((_4, _push8, _parent8, _scopeId7) => {
                                                      var _a9, _b6, _c5, _d5, _e3, _f3, _g, _h, _i, _j;
                                                      if (_push8) {
                                                        if (childItem.icon) {
                                                          _push8(ssrRenderComponent(__nuxt_component_1$1, {
                                                            name: childItem.icon,
                                                            class: ui.value.childLinkIcon({ class: (_a9 = props.ui) == null ? void 0 : _a9.childLinkIcon, active: childActive })
                                                          }, null, _parent8, _scopeId7));
                                                        } else {
                                                          _push8(`<!---->`);
                                                        }
                                                        _push8(`<div class="${ssrRenderClass(ui.value.childLinkWrapper({ class: (_b6 = props.ui) == null ? void 0 : _b6.childLinkWrapper }))}"${_scopeId7}><p class="${ssrRenderClass(ui.value.childLinkLabel({ class: (_c5 = props.ui) == null ? void 0 : _c5.childLinkLabel, active: childActive }))}"${_scopeId7}>${ssrInterpolate(unref(get)(childItem, props.labelKey))} `);
                                                        if (childItem.target === "_blank" && _ctx.externalIcon !== false) {
                                                          _push8(ssrRenderComponent(__nuxt_component_1$1, {
                                                            name: typeof _ctx.externalIcon === "string" ? _ctx.externalIcon : unref(appConfig).ui.icons.external,
                                                            class: ui.value.childLinkLabelExternalIcon({ class: (_d5 = props.ui) == null ? void 0 : _d5.childLinkLabelExternalIcon, active: childActive })
                                                          }, null, _parent8, _scopeId7));
                                                        } else {
                                                          _push8(`<!---->`);
                                                        }
                                                        _push8(`</p>`);
                                                        if (childItem.description) {
                                                          _push8(`<p class="${ssrRenderClass(ui.value.childLinkDescription({ class: (_e3 = props.ui) == null ? void 0 : _e3.childLinkDescription, active: childActive }))}"${_scopeId7}>${ssrInterpolate(childItem.description)}</p>`);
                                                        } else {
                                                          _push8(`<!---->`);
                                                        }
                                                        _push8(`</div>`);
                                                      } else {
                                                        return [
                                                          childItem.icon ? (openBlock(), createBlock(__nuxt_component_1$1, {
                                                            key: 0,
                                                            name: childItem.icon,
                                                            class: ui.value.childLinkIcon({ class: (_f3 = props.ui) == null ? void 0 : _f3.childLinkIcon, active: childActive })
                                                          }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                          createVNode("div", {
                                                            class: ui.value.childLinkWrapper({ class: (_g = props.ui) == null ? void 0 : _g.childLinkWrapper })
                                                          }, [
                                                            createVNode("p", {
                                                              class: ui.value.childLinkLabel({ class: (_h = props.ui) == null ? void 0 : _h.childLinkLabel, active: childActive })
                                                            }, [
                                                              createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                              childItem.target === "_blank" && _ctx.externalIcon !== false ? (openBlock(), createBlock(__nuxt_component_1$1, {
                                                                key: 0,
                                                                name: typeof _ctx.externalIcon === "string" ? _ctx.externalIcon : unref(appConfig).ui.icons.external,
                                                                class: ui.value.childLinkLabelExternalIcon({ class: (_i = props.ui) == null ? void 0 : _i.childLinkLabelExternalIcon, active: childActive })
                                                              }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                            ], 2),
                                                            childItem.description ? (openBlock(), createBlock("p", {
                                                              key: 0,
                                                              class: ui.value.childLinkDescription({ class: (_j = props.ui) == null ? void 0 : _j.childLinkDescription, active: childActive })
                                                            }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)
                                                          ], 2)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent7, _scopeId6));
                                                } else {
                                                  return [
                                                    createVNode(ULinkBase, mergeProps({ ref_for: true }, childSlotProps, {
                                                      class: ui.value.childLink({ class: [(_b5 = props.ui) == null ? void 0 : _b5.childLink, childItem.class], active: childActive })
                                                    }), {
                                                      default: withCtx(() => {
                                                        var _a9, _b6, _c5, _d5, _e3;
                                                        return [
                                                          childItem.icon ? (openBlock(), createBlock(__nuxt_component_1$1, {
                                                            key: 0,
                                                            name: childItem.icon,
                                                            class: ui.value.childLinkIcon({ class: (_a9 = props.ui) == null ? void 0 : _a9.childLinkIcon, active: childActive })
                                                          }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                          createVNode("div", {
                                                            class: ui.value.childLinkWrapper({ class: (_b6 = props.ui) == null ? void 0 : _b6.childLinkWrapper })
                                                          }, [
                                                            createVNode("p", {
                                                              class: ui.value.childLinkLabel({ class: (_c5 = props.ui) == null ? void 0 : _c5.childLinkLabel, active: childActive })
                                                            }, [
                                                              createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                              childItem.target === "_blank" && _ctx.externalIcon !== false ? (openBlock(), createBlock(__nuxt_component_1$1, {
                                                                key: 0,
                                                                name: typeof _ctx.externalIcon === "string" ? _ctx.externalIcon : unref(appConfig).ui.icons.external,
                                                                class: ui.value.childLinkLabelExternalIcon({ class: (_d5 = props.ui) == null ? void 0 : _d5.childLinkLabelExternalIcon, active: childActive })
                                                              }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                            ], 2),
                                                            childItem.description ? (openBlock(), createBlock("p", {
                                                              key: 0,
                                                              class: ui.value.childLinkDescription({ class: (_e3 = props.ui) == null ? void 0 : _e3.childLinkDescription, active: childActive })
                                                            }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)
                                                          ], 2)
                                                        ];
                                                      }),
                                                      _: 2
                                                    }, 1040, ["class"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent6, _scopeId5));
                                          } else {
                                            return [
                                              createVNode(unref(NavigationMenuLink), {
                                                "as-child": "",
                                                active: childActive,
                                                onSelect: childItem.onSelect
                                              }, {
                                                default: withCtx(() => {
                                                  var _a8;
                                                  return [
                                                    createVNode(ULinkBase, mergeProps({ ref_for: true }, childSlotProps, {
                                                      class: ui.value.childLink({ class: [(_a8 = props.ui) == null ? void 0 : _a8.childLink, childItem.class], active: childActive })
                                                    }), {
                                                      default: withCtx(() => {
                                                        var _a9, _b5, _c5, _d5, _e3;
                                                        return [
                                                          childItem.icon ? (openBlock(), createBlock(__nuxt_component_1$1, {
                                                            key: 0,
                                                            name: childItem.icon,
                                                            class: ui.value.childLinkIcon({ class: (_a9 = props.ui) == null ? void 0 : _a9.childLinkIcon, active: childActive })
                                                          }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                          createVNode("div", {
                                                            class: ui.value.childLinkWrapper({ class: (_b5 = props.ui) == null ? void 0 : _b5.childLinkWrapper })
                                                          }, [
                                                            createVNode("p", {
                                                              class: ui.value.childLinkLabel({ class: (_c5 = props.ui) == null ? void 0 : _c5.childLinkLabel, active: childActive })
                                                            }, [
                                                              createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                              childItem.target === "_blank" && _ctx.externalIcon !== false ? (openBlock(), createBlock(__nuxt_component_1$1, {
                                                                key: 0,
                                                                name: typeof _ctx.externalIcon === "string" ? _ctx.externalIcon : unref(appConfig).ui.icons.external,
                                                                class: ui.value.childLinkLabelExternalIcon({ class: (_d5 = props.ui) == null ? void 0 : _d5.childLinkLabelExternalIcon, active: childActive })
                                                              }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                            ], 2),
                                                            childItem.description ? (openBlock(), createBlock("p", {
                                                              key: 0,
                                                              class: ui.value.childLinkDescription({ class: (_e3 = props.ui) == null ? void 0 : _e3.childLinkDescription, active: childActive })
                                                            }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)
                                                          ], 2)
                                                        ];
                                                      }),
                                                      _: 2
                                                    }, 1040, ["class"])
                                                  ];
                                                }),
                                                _: 2
                                              }, 1032, ["active", "onSelect"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent5, _scopeId4));
                                      _push5(`</li>`);
                                    });
                                    _push5(`<!--]--></ul>`);
                                  }, _push5, _parent5, _scopeId4);
                                } else {
                                  return [
                                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                                      item,
                                      active,
                                      index
                                    }, () => {
                                      var _a6;
                                      return [
                                        createVNode("ul", {
                                          class: ui.value.childList({ class: (_a6 = props.ui) == null ? void 0 : _a6.childList })
                                        }, [
                                          (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                                            var _a7;
                                            return openBlock(), createBlock("li", {
                                              key: childIndex,
                                              class: ui.value.childItem({ class: (_a7 = props.ui) == null ? void 0 : _a7.childItem })
                                            }, [
                                              createVNode(ULink, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                                default: withCtx(({ active: childActive, ...childSlotProps }) => [
                                                  createVNode(unref(NavigationMenuLink), {
                                                    "as-child": "",
                                                    active: childActive,
                                                    onSelect: childItem.onSelect
                                                  }, {
                                                    default: withCtx(() => {
                                                      var _a8;
                                                      return [
                                                        createVNode(ULinkBase, mergeProps({ ref_for: true }, childSlotProps, {
                                                          class: ui.value.childLink({ class: [(_a8 = props.ui) == null ? void 0 : _a8.childLink, childItem.class], active: childActive })
                                                        }), {
                                                          default: withCtx(() => {
                                                            var _a9, _b5, _c5, _d5, _e3;
                                                            return [
                                                              childItem.icon ? (openBlock(), createBlock(__nuxt_component_1$1, {
                                                                key: 0,
                                                                name: childItem.icon,
                                                                class: ui.value.childLinkIcon({ class: (_a9 = props.ui) == null ? void 0 : _a9.childLinkIcon, active: childActive })
                                                              }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                              createVNode("div", {
                                                                class: ui.value.childLinkWrapper({ class: (_b5 = props.ui) == null ? void 0 : _b5.childLinkWrapper })
                                                              }, [
                                                                createVNode("p", {
                                                                  class: ui.value.childLinkLabel({ class: (_c5 = props.ui) == null ? void 0 : _c5.childLinkLabel, active: childActive })
                                                                }, [
                                                                  createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                                  childItem.target === "_blank" && _ctx.externalIcon !== false ? (openBlock(), createBlock(__nuxt_component_1$1, {
                                                                    key: 0,
                                                                    name: typeof _ctx.externalIcon === "string" ? _ctx.externalIcon : unref(appConfig).ui.icons.external,
                                                                    class: ui.value.childLinkLabelExternalIcon({ class: (_d5 = props.ui) == null ? void 0 : _d5.childLinkLabelExternalIcon, active: childActive })
                                                                  }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                                ], 2),
                                                                childItem.description ? (openBlock(), createBlock("p", {
                                                                  key: 0,
                                                                  class: ui.value.childLinkDescription({ class: (_e3 = props.ui) == null ? void 0 : _e3.childLinkDescription, active: childActive })
                                                                }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)
                                                              ], 2)
                                                            ];
                                                          }),
                                                          _: 2
                                                        }, 1040, ["class"])
                                                      ];
                                                    }),
                                                    _: 2
                                                  }, 1032, ["active", "onSelect"])
                                                ]),
                                                _: 2
                                              }, 1040)
                                            ], 2);
                                          }), 128))
                                        ], 2)
                                      ];
                                    })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            (openBlock(), createBlock(resolveDynamicComponent(_ctx.orientation === "horizontal" && (((_d4 = item.children) == null ? void 0 : _d4.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? unref(NavigationMenuTrigger) : unref(NavigationMenuLink)), {
                              "as-child": "",
                              active: active || item.active,
                              disabled: item.disabled,
                              onSelect: item.onSelect
                            }, {
                              default: withCtx(() => {
                                var _a6;
                                return [
                                  createVNode(ULinkBase, mergeProps(slotProps, {
                                    class: ui.value.link({ class: [(_a6 = props.ui) == null ? void 0 : _a6.link, item.class], active: active || item.active, disabled: !!item.disabled, level: _ctx.orientation === "horizontal" || level > 0 })
                                  }), {
                                    default: withCtx(() => [
                                      createVNode(unref(ReuseLinkTemplate), {
                                        item,
                                        active: active || item.active,
                                        index
                                      }, null, 8, ["item", "active", "index"])
                                    ]),
                                    _: 2
                                  }, 1040, ["class"])
                                ];
                              }),
                              _: 2
                            }, 1064, ["active", "disabled", "onSelect"])),
                            _ctx.orientation === "horizontal" && (((_e2 = item.children) == null ? void 0 : _e2.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? (openBlock(), createBlock(unref(NavigationMenuContent), mergeProps({ key: 0 }, contentProps.value, {
                              class: ui.value.content({ class: (_f2 = props.ui) == null ? void 0 : _f2.content })
                            }), {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                                  item,
                                  active,
                                  index
                                }, () => {
                                  var _a6;
                                  return [
                                    createVNode("ul", {
                                      class: ui.value.childList({ class: (_a6 = props.ui) == null ? void 0 : _a6.childList })
                                    }, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                                        var _a7;
                                        return openBlock(), createBlock("li", {
                                          key: childIndex,
                                          class: ui.value.childItem({ class: (_a7 = props.ui) == null ? void 0 : _a7.childItem })
                                        }, [
                                          createVNode(ULink, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                            default: withCtx(({ active: childActive, ...childSlotProps }) => [
                                              createVNode(unref(NavigationMenuLink), {
                                                "as-child": "",
                                                active: childActive,
                                                onSelect: childItem.onSelect
                                              }, {
                                                default: withCtx(() => {
                                                  var _a8;
                                                  return [
                                                    createVNode(ULinkBase, mergeProps({ ref_for: true }, childSlotProps, {
                                                      class: ui.value.childLink({ class: [(_a8 = props.ui) == null ? void 0 : _a8.childLink, childItem.class], active: childActive })
                                                    }), {
                                                      default: withCtx(() => {
                                                        var _a9, _b5, _c5, _d5, _e3;
                                                        return [
                                                          childItem.icon ? (openBlock(), createBlock(__nuxt_component_1$1, {
                                                            key: 0,
                                                            name: childItem.icon,
                                                            class: ui.value.childLinkIcon({ class: (_a9 = props.ui) == null ? void 0 : _a9.childLinkIcon, active: childActive })
                                                          }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                          createVNode("div", {
                                                            class: ui.value.childLinkWrapper({ class: (_b5 = props.ui) == null ? void 0 : _b5.childLinkWrapper })
                                                          }, [
                                                            createVNode("p", {
                                                              class: ui.value.childLinkLabel({ class: (_c5 = props.ui) == null ? void 0 : _c5.childLinkLabel, active: childActive })
                                                            }, [
                                                              createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                              childItem.target === "_blank" && _ctx.externalIcon !== false ? (openBlock(), createBlock(__nuxt_component_1$1, {
                                                                key: 0,
                                                                name: typeof _ctx.externalIcon === "string" ? _ctx.externalIcon : unref(appConfig).ui.icons.external,
                                                                class: ui.value.childLinkLabelExternalIcon({ class: (_d5 = props.ui) == null ? void 0 : _d5.childLinkLabelExternalIcon, active: childActive })
                                                              }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                            ], 2),
                                                            childItem.description ? (openBlock(), createBlock("p", {
                                                              key: 0,
                                                              class: ui.value.childLinkDescription({ class: (_e3 = props.ui) == null ? void 0 : _e3.childLinkDescription, active: childActive })
                                                            }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)
                                                          ], 2)
                                                        ];
                                                      }),
                                                      _: 2
                                                    }, 1040, ["class"])
                                                  ];
                                                }),
                                                _: 2
                                              }, 1032, ["active", "onSelect"])
                                            ]),
                                            _: 2
                                          }, 1040)
                                        ], 2);
                                      }), 128))
                                    ], 2)
                                  ];
                                })
                              ]),
                              _: 2
                            }, 1040, ["class"])) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    _ctx.orientation === "vertical" && item.type === "label" ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: ui.value.label({ class: (_c3 = props.ui) == null ? void 0 : _c3.label })
                    }, [
                      createVNode(unref(ReuseLinkTemplate), {
                        item,
                        index
                      }, null, 8, ["item", "index"])
                    ], 2)) : item.type !== "label" ? (openBlock(), createBlock(ULink, mergeProps({ key: 1 }, _ctx.orientation === "vertical" && ((_d3 = item.children) == null ? void 0 : _d3.length) && !_ctx.collapsed ? {} : unref(pickLinkProps)(item), { custom: "" }), {
                      default: withCtx(({ active, ...slotProps }) => {
                        var _a5, _b4, _c4;
                        return [
                          (openBlock(), createBlock(resolveDynamicComponent(_ctx.orientation === "horizontal" && (((_a5 = item.children) == null ? void 0 : _a5.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? unref(NavigationMenuTrigger) : unref(NavigationMenuLink)), {
                            "as-child": "",
                            active: active || item.active,
                            disabled: item.disabled,
                            onSelect: item.onSelect
                          }, {
                            default: withCtx(() => {
                              var _a6;
                              return [
                                createVNode(ULinkBase, mergeProps(slotProps, {
                                  class: ui.value.link({ class: [(_a6 = props.ui) == null ? void 0 : _a6.link, item.class], active: active || item.active, disabled: !!item.disabled, level: _ctx.orientation === "horizontal" || level > 0 })
                                }), {
                                  default: withCtx(() => [
                                    createVNode(unref(ReuseLinkTemplate), {
                                      item,
                                      active: active || item.active,
                                      index
                                    }, null, 8, ["item", "active", "index"])
                                  ]),
                                  _: 2
                                }, 1040, ["class"])
                              ];
                            }),
                            _: 2
                          }, 1064, ["active", "disabled", "onSelect"])),
                          _ctx.orientation === "horizontal" && (((_b4 = item.children) == null ? void 0 : _b4.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? (openBlock(), createBlock(unref(NavigationMenuContent), mergeProps({ key: 0 }, contentProps.value, {
                            class: ui.value.content({ class: (_c4 = props.ui) == null ? void 0 : _c4.content })
                          }), {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                                item,
                                active,
                                index
                              }, () => {
                                var _a6;
                                return [
                                  createVNode("ul", {
                                    class: ui.value.childList({ class: (_a6 = props.ui) == null ? void 0 : _a6.childList })
                                  }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                                      var _a7;
                                      return openBlock(), createBlock("li", {
                                        key: childIndex,
                                        class: ui.value.childItem({ class: (_a7 = props.ui) == null ? void 0 : _a7.childItem })
                                      }, [
                                        createVNode(ULink, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                          default: withCtx(({ active: childActive, ...childSlotProps }) => [
                                            createVNode(unref(NavigationMenuLink), {
                                              "as-child": "",
                                              active: childActive,
                                              onSelect: childItem.onSelect
                                            }, {
                                              default: withCtx(() => {
                                                var _a8;
                                                return [
                                                  createVNode(ULinkBase, mergeProps({ ref_for: true }, childSlotProps, {
                                                    class: ui.value.childLink({ class: [(_a8 = props.ui) == null ? void 0 : _a8.childLink, childItem.class], active: childActive })
                                                  }), {
                                                    default: withCtx(() => {
                                                      var _a9, _b5, _c5, _d4, _e2;
                                                      return [
                                                        childItem.icon ? (openBlock(), createBlock(__nuxt_component_1$1, {
                                                          key: 0,
                                                          name: childItem.icon,
                                                          class: ui.value.childLinkIcon({ class: (_a9 = props.ui) == null ? void 0 : _a9.childLinkIcon, active: childActive })
                                                        }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                        createVNode("div", {
                                                          class: ui.value.childLinkWrapper({ class: (_b5 = props.ui) == null ? void 0 : _b5.childLinkWrapper })
                                                        }, [
                                                          createVNode("p", {
                                                            class: ui.value.childLinkLabel({ class: (_c5 = props.ui) == null ? void 0 : _c5.childLinkLabel, active: childActive })
                                                          }, [
                                                            createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                            childItem.target === "_blank" && _ctx.externalIcon !== false ? (openBlock(), createBlock(__nuxt_component_1$1, {
                                                              key: 0,
                                                              name: typeof _ctx.externalIcon === "string" ? _ctx.externalIcon : unref(appConfig).ui.icons.external,
                                                              class: ui.value.childLinkLabelExternalIcon({ class: (_d4 = props.ui) == null ? void 0 : _d4.childLinkLabelExternalIcon, active: childActive })
                                                            }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                          ], 2),
                                                          childItem.description ? (openBlock(), createBlock("p", {
                                                            key: 0,
                                                            class: ui.value.childLinkDescription({ class: (_e2 = props.ui) == null ? void 0 : _e2.childLinkDescription, active: childActive })
                                                          }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)
                                                        ], 2)
                                                      ];
                                                    }),
                                                    _: 2
                                                  }, 1040, ["class"])
                                                ];
                                              }),
                                              _: 2
                                            }, 1032, ["active", "onSelect"])
                                          ]),
                                          _: 2
                                        }, 1040)
                                      ], 2);
                                    }), 128))
                                  ], 2)
                                ];
                              })
                            ]),
                            _: 2
                          }, 1040, ["class"])) : createCommentVNode("", true)
                        ];
                      }),
                      _: 2
                    }, 1040)) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 2
            }, [
              _ctx.orientation === "vertical" && ((_c2 = item.children) == null ? void 0 : _c2.length) && !_ctx.collapsed ? {
                name: "content",
                fn: withCtx((_, _push3, _parent3, _scopeId2) => {
                  var _a4, _b3;
                  if (_push3) {
                    _push3(`<ul class="${ssrRenderClass(ui.value.childList({ class: (_a4 = props.ui) == null ? void 0 : _a4.childList }))}"${_scopeId2}><!--[-->`);
                    ssrRenderList(item.children, (childItem, childIndex) => {
                      var _a5;
                      _push3(ssrRenderComponent(unref(ReuseItemTemplate), {
                        key: childIndex,
                        item: childItem,
                        index: childIndex,
                        level: level + 1,
                        class: ui.value.childItem({ class: (_a5 = props.ui) == null ? void 0 : _a5.childItem })
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--></ul>`);
                  } else {
                    return [
                      createVNode("ul", {
                        class: ui.value.childList({ class: (_b3 = props.ui) == null ? void 0 : _b3.childList })
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                          var _a5;
                          return openBlock(), createBlock(unref(ReuseItemTemplate), {
                            key: childIndex,
                            item: childItem,
                            index: childIndex,
                            level: level + 1,
                            class: ui.value.childItem({ class: (_a5 = props.ui) == null ? void 0 : _a5.childItem })
                          }, null, 8, ["item", "index", "level", "class"]);
                        }), 128))
                      ], 2)
                    ];
                  }
                }),
                key: "0"
              } : void 0
            ])), _parent2, _scopeId);
          } else {
            return [
              (openBlock(), createBlock(resolveDynamicComponent(_ctx.orientation === "vertical" && ((_d2 = item.children) == null ? void 0 : _d2.length) && !_ctx.collapsed ? UCollapsible : unref(NavigationMenuItem)), {
                as: "li",
                value: item.value || String(index),
                "default-open": item.defaultOpen,
                "unmount-on-hide": _ctx.orientation === "vertical" && ((_e = item.children) == null ? void 0 : _e.length) && !_ctx.collapsed ? _ctx.unmountOnHide : void 0,
                open: item.open
              }, createSlots({
                default: withCtx(() => {
                  var _a4, _b3;
                  return [
                    _ctx.orientation === "vertical" && item.type === "label" ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: ui.value.label({ class: (_a4 = props.ui) == null ? void 0 : _a4.label })
                    }, [
                      createVNode(unref(ReuseLinkTemplate), {
                        item,
                        index
                      }, null, 8, ["item", "index"])
                    ], 2)) : item.type !== "label" ? (openBlock(), createBlock(ULink, mergeProps({ key: 1 }, _ctx.orientation === "vertical" && ((_b3 = item.children) == null ? void 0 : _b3.length) && !_ctx.collapsed ? {} : unref(pickLinkProps)(item), { custom: "" }), {
                      default: withCtx(({ active, ...slotProps }) => {
                        var _a5, _b4, _c3;
                        return [
                          (openBlock(), createBlock(resolveDynamicComponent(_ctx.orientation === "horizontal" && (((_a5 = item.children) == null ? void 0 : _a5.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? unref(NavigationMenuTrigger) : unref(NavigationMenuLink)), {
                            "as-child": "",
                            active: active || item.active,
                            disabled: item.disabled,
                            onSelect: item.onSelect
                          }, {
                            default: withCtx(() => {
                              var _a6;
                              return [
                                createVNode(ULinkBase, mergeProps(slotProps, {
                                  class: ui.value.link({ class: [(_a6 = props.ui) == null ? void 0 : _a6.link, item.class], active: active || item.active, disabled: !!item.disabled, level: _ctx.orientation === "horizontal" || level > 0 })
                                }), {
                                  default: withCtx(() => [
                                    createVNode(unref(ReuseLinkTemplate), {
                                      item,
                                      active: active || item.active,
                                      index
                                    }, null, 8, ["item", "active", "index"])
                                  ]),
                                  _: 2
                                }, 1040, ["class"])
                              ];
                            }),
                            _: 2
                          }, 1064, ["active", "disabled", "onSelect"])),
                          _ctx.orientation === "horizontal" && (((_b4 = item.children) == null ? void 0 : _b4.length) || !!slots[item.slot ? `${item.slot}-content` : "item-content"]) ? (openBlock(), createBlock(unref(NavigationMenuContent), mergeProps({ key: 0 }, contentProps.value, {
                            class: ui.value.content({ class: (_c3 = props.ui) == null ? void 0 : _c3.content })
                          }), {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, item.slot ? `${item.slot}-content` : "item-content", {
                                item,
                                active,
                                index
                              }, () => {
                                var _a6;
                                return [
                                  createVNode("ul", {
                                    class: ui.value.childList({ class: (_a6 = props.ui) == null ? void 0 : _a6.childList })
                                  }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                                      var _a7;
                                      return openBlock(), createBlock("li", {
                                        key: childIndex,
                                        class: ui.value.childItem({ class: (_a7 = props.ui) == null ? void 0 : _a7.childItem })
                                      }, [
                                        createVNode(ULink, mergeProps({ ref_for: true }, unref(pickLinkProps)(childItem), { custom: "" }), {
                                          default: withCtx(({ active: childActive, ...childSlotProps }) => [
                                            createVNode(unref(NavigationMenuLink), {
                                              "as-child": "",
                                              active: childActive,
                                              onSelect: childItem.onSelect
                                            }, {
                                              default: withCtx(() => {
                                                var _a8;
                                                return [
                                                  createVNode(ULinkBase, mergeProps({ ref_for: true }, childSlotProps, {
                                                    class: ui.value.childLink({ class: [(_a8 = props.ui) == null ? void 0 : _a8.childLink, childItem.class], active: childActive })
                                                  }), {
                                                    default: withCtx(() => {
                                                      var _a9, _b5, _c4, _d3, _e2;
                                                      return [
                                                        childItem.icon ? (openBlock(), createBlock(__nuxt_component_1$1, {
                                                          key: 0,
                                                          name: childItem.icon,
                                                          class: ui.value.childLinkIcon({ class: (_a9 = props.ui) == null ? void 0 : _a9.childLinkIcon, active: childActive })
                                                        }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                                                        createVNode("div", {
                                                          class: ui.value.childLinkWrapper({ class: (_b5 = props.ui) == null ? void 0 : _b5.childLinkWrapper })
                                                        }, [
                                                          createVNode("p", {
                                                            class: ui.value.childLinkLabel({ class: (_c4 = props.ui) == null ? void 0 : _c4.childLinkLabel, active: childActive })
                                                          }, [
                                                            createTextVNode(toDisplayString(unref(get)(childItem, props.labelKey)) + " ", 1),
                                                            childItem.target === "_blank" && _ctx.externalIcon !== false ? (openBlock(), createBlock(__nuxt_component_1$1, {
                                                              key: 0,
                                                              name: typeof _ctx.externalIcon === "string" ? _ctx.externalIcon : unref(appConfig).ui.icons.external,
                                                              class: ui.value.childLinkLabelExternalIcon({ class: (_d3 = props.ui) == null ? void 0 : _d3.childLinkLabelExternalIcon, active: childActive })
                                                            }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                                                          ], 2),
                                                          childItem.description ? (openBlock(), createBlock("p", {
                                                            key: 0,
                                                            class: ui.value.childLinkDescription({ class: (_e2 = props.ui) == null ? void 0 : _e2.childLinkDescription, active: childActive })
                                                          }, toDisplayString(childItem.description), 3)) : createCommentVNode("", true)
                                                        ], 2)
                                                      ];
                                                    }),
                                                    _: 2
                                                  }, 1040, ["class"])
                                                ];
                                              }),
                                              _: 2
                                            }, 1032, ["active", "onSelect"])
                                          ]),
                                          _: 2
                                        }, 1040)
                                      ], 2);
                                    }), 128))
                                  ], 2)
                                ];
                              })
                            ]),
                            _: 2
                          }, 1040, ["class"])) : createCommentVNode("", true)
                        ];
                      }),
                      _: 2
                    }, 1040)) : createCommentVNode("", true)
                  ];
                }),
                _: 2
              }, [
                _ctx.orientation === "vertical" && ((_f = item.children) == null ? void 0 : _f.length) && !_ctx.collapsed ? {
                  name: "content",
                  fn: withCtx(() => {
                    var _a4;
                    return [
                      createVNode("ul", {
                        class: ui.value.childList({ class: (_a4 = props.ui) == null ? void 0 : _a4.childList })
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(item.children, (childItem, childIndex) => {
                          var _a5;
                          return openBlock(), createBlock(unref(ReuseItemTemplate), {
                            key: childIndex,
                            item: childItem,
                            index: childIndex,
                            level: level + 1,
                            class: ui.value.childItem({ class: (_a5 = props.ui) == null ? void 0 : _a5.childItem })
                          }, null, 8, ["item", "index", "level", "class"]);
                        }), 128))
                      ], 2)
                    ];
                  }),
                  key: "0"
                } : void 0
              ]), 1032, ["value", "default-open", "unmount-on-hide", "open"]))
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(NavigationMenuRoot), mergeProps(unref(rootProps), {
        "data-collapsed": _ctx.collapsed,
        class: ui.value.root({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.root] })
      }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b2, _c2, _d2, _e, _f;
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(lists.value, (list, listIndex) => {
              var _a4, _b3;
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(unref(NavigationMenuList), {
                class: ui.value.list({ class: (_a4 = props.ui) == null ? void 0 : _a4.list })
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(list, (item, index) => {
                      var _a5;
                      _push3(ssrRenderComponent(unref(ReuseItemTemplate), {
                        key: `list-${listIndex}-${index}`,
                        item,
                        index,
                        class: ui.value.item({ class: (_a5 = props.ui) == null ? void 0 : _a5.item })
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(list, (item, index) => {
                        var _a5;
                        return openBlock(), createBlock(unref(ReuseItemTemplate), {
                          key: `list-${listIndex}-${index}`,
                          item,
                          index,
                          class: ui.value.item({ class: (_a5 = props.ui) == null ? void 0 : _a5.item })
                        }, null, 8, ["item", "index", "class"]);
                      }), 128))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              if (_ctx.orientation === "vertical" && listIndex < lists.value.length - 1) {
                _push2(`<div class="${ssrRenderClass(ui.value.separator({ class: (_b3 = props.ui) == null ? void 0 : _b3.separator }))}"${_scopeId}></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]-->`);
            if (_ctx.orientation === "horizontal") {
              _push2(`<div class="${ssrRenderClass(ui.value.viewportWrapper({ class: (_a3 = props.ui) == null ? void 0 : _a3.viewportWrapper }))}"${_scopeId}>`);
              if (_ctx.arrow) {
                _push2(ssrRenderComponent(unref(NavigationMenuIndicator), {
                  class: ui.value.indicator({ class: (_b2 = props.ui) == null ? void 0 : _b2.indicator })
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    var _a4, _b3;
                    if (_push3) {
                      _push3(`<div class="${ssrRenderClass(ui.value.arrow({ class: (_a4 = props.ui) == null ? void 0 : _a4.arrow }))}"${_scopeId2}></div>`);
                    } else {
                      return [
                        createVNode("div", {
                          class: ui.value.arrow({ class: (_b3 = props.ui) == null ? void 0 : _b3.arrow })
                        }, null, 2)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(unref(NavigationMenuViewport), {
                class: ui.value.viewport({ class: (_c2 = props.ui) == null ? void 0 : _c2.viewport })
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(lists.value, (list, listIndex) => {
                var _a4, _b3;
                return openBlock(), createBlock(Fragment, {
                  key: `list-${listIndex}`
                }, [
                  createVNode(unref(NavigationMenuList), {
                    class: ui.value.list({ class: (_a4 = props.ui) == null ? void 0 : _a4.list })
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(list, (item, index) => {
                        var _a5;
                        return openBlock(), createBlock(unref(ReuseItemTemplate), {
                          key: `list-${listIndex}-${index}`,
                          item,
                          index,
                          class: ui.value.item({ class: (_a5 = props.ui) == null ? void 0 : _a5.item })
                        }, null, 8, ["item", "index", "class"]);
                      }), 128))
                    ]),
                    _: 2
                  }, 1032, ["class"]),
                  _ctx.orientation === "vertical" && listIndex < lists.value.length - 1 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: ui.value.separator({ class: (_b3 = props.ui) == null ? void 0 : _b3.separator })
                  }, null, 2)) : createCommentVNode("", true)
                ], 64);
              }), 128)),
              _ctx.orientation === "horizontal" ? (openBlock(), createBlock("div", {
                key: 0,
                class: ui.value.viewportWrapper({ class: (_d2 = props.ui) == null ? void 0 : _d2.viewportWrapper })
              }, [
                _ctx.arrow ? (openBlock(), createBlock(unref(NavigationMenuIndicator), {
                  key: 0,
                  class: ui.value.indicator({ class: (_e = props.ui) == null ? void 0 : _e.indicator })
                }, {
                  default: withCtx(() => {
                    var _a4;
                    return [
                      createVNode("div", {
                        class: ui.value.arrow({ class: (_a4 = props.ui) == null ? void 0 : _a4.arrow })
                      }, null, 2)
                    ];
                  }),
                  _: 1
                }, 8, ["class"])) : createCommentVNode("", true),
                createVNode(unref(NavigationMenuViewport), {
                  class: ui.value.viewport({ class: (_f = props.ui) == null ? void 0 : _f.viewport })
                }, null, 8, ["class"])
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@https+++pkg.pr.new_6168458293122d7cd2d67add5b8edd35/node_modules/@nuxt/ui/dist/runtime/components/NavigationMenu.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0$1 = Object.assign(_sfc_main$4, { __name: "UNavigationMenu" });
const theme = {
  "slots": {
    "root": "relative overflow-hidden w-full rounded-[calc(var(--ui-radius)*2)] p-4 flex gap-2.5",
    "wrapper": "min-w-0 flex-1 flex flex-col",
    "title": "text-sm font-medium",
    "description": "text-sm opacity-90",
    "icon": "shrink-0 size-5",
    "avatar": "shrink-0",
    "avatarSize": "2xl",
    "actions": "flex flex-wrap gap-1.5 shrink-0",
    "close": "p-0"
  },
  "variants": {
    "color": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    },
    "variant": {
      "solid": "",
      "outline": "",
      "soft": "",
      "subtle": ""
    },
    "orientation": {
      "horizontal": {
        "root": "items-center",
        "actions": "items-center"
      },
      "vertical": {
        "root": "items-start",
        "actions": "items-start mt-2.5"
      }
    },
    "title": {
      "true": {
        "description": "mt-1"
      }
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "variant": "solid",
      "class": {
        "root": "bg-(--ui-primary) text-(--ui-bg)"
      }
    },
    {
      "color": "secondary",
      "variant": "solid",
      "class": {
        "root": "bg-(--ui-secondary) text-(--ui-bg)"
      }
    },
    {
      "color": "success",
      "variant": "solid",
      "class": {
        "root": "bg-(--ui-success) text-(--ui-bg)"
      }
    },
    {
      "color": "info",
      "variant": "solid",
      "class": {
        "root": "bg-(--ui-info) text-(--ui-bg)"
      }
    },
    {
      "color": "warning",
      "variant": "solid",
      "class": {
        "root": "bg-(--ui-warning) text-(--ui-bg)"
      }
    },
    {
      "color": "error",
      "variant": "solid",
      "class": {
        "root": "bg-(--ui-error) text-(--ui-bg)"
      }
    },
    {
      "color": "primary",
      "variant": "outline",
      "class": {
        "root": "text-(--ui-primary) ring ring-inset ring-(--ui-primary)/25"
      }
    },
    {
      "color": "secondary",
      "variant": "outline",
      "class": {
        "root": "text-(--ui-secondary) ring ring-inset ring-(--ui-secondary)/25"
      }
    },
    {
      "color": "success",
      "variant": "outline",
      "class": {
        "root": "text-(--ui-success) ring ring-inset ring-(--ui-success)/25"
      }
    },
    {
      "color": "info",
      "variant": "outline",
      "class": {
        "root": "text-(--ui-info) ring ring-inset ring-(--ui-info)/25"
      }
    },
    {
      "color": "warning",
      "variant": "outline",
      "class": {
        "root": "text-(--ui-warning) ring ring-inset ring-(--ui-warning)/25"
      }
    },
    {
      "color": "error",
      "variant": "outline",
      "class": {
        "root": "text-(--ui-error) ring ring-inset ring-(--ui-error)/25"
      }
    },
    {
      "color": "primary",
      "variant": "soft",
      "class": {
        "root": "bg-(--ui-primary)/10 text-(--ui-primary)"
      }
    },
    {
      "color": "secondary",
      "variant": "soft",
      "class": {
        "root": "bg-(--ui-secondary)/10 text-(--ui-secondary)"
      }
    },
    {
      "color": "success",
      "variant": "soft",
      "class": {
        "root": "bg-(--ui-success)/10 text-(--ui-success)"
      }
    },
    {
      "color": "info",
      "variant": "soft",
      "class": {
        "root": "bg-(--ui-info)/10 text-(--ui-info)"
      }
    },
    {
      "color": "warning",
      "variant": "soft",
      "class": {
        "root": "bg-(--ui-warning)/10 text-(--ui-warning)"
      }
    },
    {
      "color": "error",
      "variant": "soft",
      "class": {
        "root": "bg-(--ui-error)/10 text-(--ui-error)"
      }
    },
    {
      "color": "primary",
      "variant": "subtle",
      "class": {
        "root": "bg-(--ui-primary)/10 text-(--ui-primary) ring ring-inset ring-(--ui-primary)/25"
      }
    },
    {
      "color": "secondary",
      "variant": "subtle",
      "class": {
        "root": "bg-(--ui-secondary)/10 text-(--ui-secondary) ring ring-inset ring-(--ui-secondary)/25"
      }
    },
    {
      "color": "success",
      "variant": "subtle",
      "class": {
        "root": "bg-(--ui-success)/10 text-(--ui-success) ring ring-inset ring-(--ui-success)/25"
      }
    },
    {
      "color": "info",
      "variant": "subtle",
      "class": {
        "root": "bg-(--ui-info)/10 text-(--ui-info) ring ring-inset ring-(--ui-info)/25"
      }
    },
    {
      "color": "warning",
      "variant": "subtle",
      "class": {
        "root": "bg-(--ui-warning)/10 text-(--ui-warning) ring ring-inset ring-(--ui-warning)/25"
      }
    },
    {
      "color": "error",
      "variant": "subtle",
      "class": {
        "root": "bg-(--ui-error)/10 text-(--ui-error) ring ring-inset ring-(--ui-error)/25"
      }
    },
    {
      "color": "neutral",
      "variant": "solid",
      "class": {
        "root": "text-(--ui-bg) bg-(--ui-bg-inverted)"
      }
    },
    {
      "color": "neutral",
      "variant": "outline",
      "class": {
        "root": "text-(--ui-text-highlighted) bg-(--ui-bg) ring ring-inset ring-(--ui-border)"
      }
    },
    {
      "color": "neutral",
      "variant": "soft",
      "class": {
        "root": "text-(--ui-text-highlighted) bg-(--ui-bg-elevated)/50"
      }
    },
    {
      "color": "neutral",
      "variant": "subtle",
      "class": {
        "root": "text-(--ui-text-highlighted) bg-(--ui-bg-elevated)/50 ring ring-inset ring-(--ui-border-accented)"
      }
    }
  ],
  "defaultVariants": {
    "color": "primary",
    "variant": "solid"
  }
};
const appConfigAlert = _appConfig;
const alert = tv({ extend: tv(theme), ...((_d = appConfigAlert.ui) == null ? void 0 : _d.alert) || {} });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Alert",
  __ssrInlineRender: true,
  props: {
    as: {},
    title: {},
    description: {},
    icon: {},
    avatar: {},
    color: {},
    variant: {},
    orientation: { default: "vertical" },
    actions: {},
    close: { type: [Boolean, Object] },
    closeIcon: {},
    class: {},
    ui: {}
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const { t } = useLocale();
    const appConfig = useAppConfig();
    const ui = computed(() => alert({
      color: props.color,
      variant: props.variant,
      orientation: props.orientation,
      title: !!props.title || !!slots.title
    }));
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: _ctx.as,
        "data-orientation": _ctx.orientation,
        class: ui.value.root({ class: [props.class, (_a2 = props.ui) == null ? void 0 : _a2.root] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b2, _c2, _d2, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "leading", {}, () => {
              var _a4, _b3, _c3;
              if (_ctx.avatar) {
                _push2(ssrRenderComponent(UAvatar, mergeProps({
                  size: ((_a4 = props.ui) == null ? void 0 : _a4.avatarSize) || ui.value.avatarSize()
                }, _ctx.avatar, {
                  class: ui.value.avatar({ class: (_b3 = props.ui) == null ? void 0 : _b3.avatar })
                }), null, _parent2, _scopeId));
              } else if (_ctx.icon) {
                _push2(ssrRenderComponent(__nuxt_component_1$1, {
                  name: _ctx.icon,
                  class: ui.value.icon({ class: (_c3 = props.ui) == null ? void 0 : _c3.icon })
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            _push2(`<div class="${ssrRenderClass(ui.value.wrapper({ class: (_a3 = props.ui) == null ? void 0 : _a3.wrapper }))}"${_scopeId}>`);
            if (_ctx.title || !!slots.title) {
              _push2(`<div class="${ssrRenderClass(ui.value.title({ class: (_b2 = props.ui) == null ? void 0 : _b2.title }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                _push2(`${ssrInterpolate(_ctx.title)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.description || !!slots.description) {
              _push2(`<div class="${ssrRenderClass(ui.value.description({ class: (_c2 = props.ui) == null ? void 0 : _c2.description }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                _push2(`${ssrInterpolate(_ctx.description)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.orientation === "vertical" && ((_d2 = _ctx.actions) == null ? void 0 : _d2.length)) {
              _push2(`<div class="${ssrRenderClass(ui.value.actions({ class: (_e = props.ui) == null ? void 0 : _e.actions }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "actions", {}, () => {
                _push2(`<!--[-->`);
                ssrRenderList(_ctx.actions, (action, index) => {
                  _push2(ssrRenderComponent(__nuxt_component_2$1, mergeProps({
                    key: index,
                    size: "xs",
                    ref_for: true
                  }, action), null, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (_ctx.orientation === "horizontal" && ((_f = _ctx.actions) == null ? void 0 : _f.length) || _ctx.close) {
              _push2(`<div class="${ssrRenderClass(ui.value.actions({ class: (_g = props.ui) == null ? void 0 : _g.actions, orientation: "horizontal" }))}"${_scopeId}>`);
              if (_ctx.orientation === "horizontal" && ((_h = _ctx.actions) == null ? void 0 : _h.length)) {
                ssrRenderSlot(_ctx.$slots, "actions", {}, () => {
                  _push2(`<!--[-->`);
                  ssrRenderList(_ctx.actions, (action, index) => {
                    _push2(ssrRenderComponent(__nuxt_component_2$1, mergeProps({
                      key: index,
                      size: "xs",
                      ref_for: true
                    }, action), null, _parent2, _scopeId));
                  });
                  _push2(`<!--]-->`);
                }, _push2, _parent2, _scopeId);
              } else {
                _push2(`<!---->`);
              }
              ssrRenderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                var _a4;
                if (_ctx.close) {
                  _push2(ssrRenderComponent(__nuxt_component_2$1, mergeProps({
                    icon: _ctx.closeIcon || unref(appConfig).ui.icons.close,
                    size: "md",
                    color: "neutral",
                    variant: "link",
                    "aria-label": unref(t)("alert.close")
                  }, typeof _ctx.close === "object" ? _ctx.close : {}, {
                    class: ui.value.close({ class: (_a4 = props.ui) == null ? void 0 : _a4.close }),
                    onClick: ($event) => emits("update:open", false)
                  }), null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              renderSlot(_ctx.$slots, "leading", {}, () => {
                var _a4, _b3, _c3;
                return [
                  _ctx.avatar ? (openBlock(), createBlock(UAvatar, mergeProps({
                    key: 0,
                    size: ((_a4 = props.ui) == null ? void 0 : _a4.avatarSize) || ui.value.avatarSize()
                  }, _ctx.avatar, {
                    class: ui.value.avatar({ class: (_b3 = props.ui) == null ? void 0 : _b3.avatar })
                  }), null, 16, ["size", "class"])) : _ctx.icon ? (openBlock(), createBlock(__nuxt_component_1$1, {
                    key: 1,
                    name: _ctx.icon,
                    class: ui.value.icon({ class: (_c3 = props.ui) == null ? void 0 : _c3.icon })
                  }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                ];
              }),
              createVNode("div", {
                class: ui.value.wrapper({ class: (_i = props.ui) == null ? void 0 : _i.wrapper })
              }, [
                _ctx.title || !!slots.title ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: ui.value.title({ class: (_j = props.ui) == null ? void 0 : _j.title })
                }, [
                  renderSlot(_ctx.$slots, "title", {}, () => [
                    createTextVNode(toDisplayString(_ctx.title), 1)
                  ])
                ], 2)) : createCommentVNode("", true),
                _ctx.description || !!slots.description ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: ui.value.description({ class: (_k = props.ui) == null ? void 0 : _k.description })
                }, [
                  renderSlot(_ctx.$slots, "description", {}, () => [
                    createTextVNode(toDisplayString(_ctx.description), 1)
                  ])
                ], 2)) : createCommentVNode("", true),
                _ctx.orientation === "vertical" && ((_l = _ctx.actions) == null ? void 0 : _l.length) ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: ui.value.actions({ class: (_m = props.ui) == null ? void 0 : _m.actions })
                }, [
                  renderSlot(_ctx.$slots, "actions", {}, () => [
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.actions, (action, index) => {
                      return openBlock(), createBlock(__nuxt_component_2$1, mergeProps({
                        key: index,
                        size: "xs",
                        ref_for: true
                      }, action), null, 16);
                    }), 128))
                  ])
                ], 2)) : createCommentVNode("", true)
              ], 2),
              _ctx.orientation === "horizontal" && ((_n = _ctx.actions) == null ? void 0 : _n.length) || _ctx.close ? (openBlock(), createBlock("div", {
                key: 0,
                class: ui.value.actions({ class: (_o = props.ui) == null ? void 0 : _o.actions, orientation: "horizontal" })
              }, [
                _ctx.orientation === "horizontal" && ((_p = _ctx.actions) == null ? void 0 : _p.length) ? renderSlot(_ctx.$slots, "actions", { key: 0 }, () => [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.actions, (action, index) => {
                    return openBlock(), createBlock(__nuxt_component_2$1, mergeProps({
                      key: index,
                      size: "xs",
                      ref_for: true
                    }, action), null, 16);
                  }), 128))
                ]) : createCommentVNode("", true),
                renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                  var _a4;
                  return [
                    _ctx.close ? (openBlock(), createBlock(__nuxt_component_2$1, mergeProps({
                      key: 0,
                      icon: _ctx.closeIcon || unref(appConfig).ui.icons.close,
                      size: "md",
                      color: "neutral",
                      variant: "link",
                      "aria-label": unref(t)("alert.close")
                    }, typeof _ctx.close === "object" ? _ctx.close : {}, {
                      class: ui.value.close({ class: (_a4 = props.ui) == null ? void 0 : _a4.close }),
                      onClick: ($event) => emits("update:open", false)
                    }), null, 16, ["icon", "aria-label", "class", "onClick"])) : createCommentVNode("", true)
                  ];
                })
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@https+++pkg.pr.new_6168458293122d7cd2d67add5b8edd35/node_modules/@nuxt/ui/dist/runtime/components/Alert.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$3, { __name: "UAlert" });
function isWithinDays(date, days) {
  const now = /* @__PURE__ */ new Date();
  const timeAgo = new Date(now.getTime() - days * 24 * 60 * 60 * 1e3);
  return date >= timeAgo;
}
function filterChatsByDateRange(chats, startDays, endDays) {
  return chats.filter((chat) => {
    const date = new Date(chat.updatedAt);
    if (endDays === void 0) {
      return !isWithinDays(date, startDays);
    }
    return !isWithinDays(date, startDays) && isWithinDays(date, endDays);
  }).sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );
}
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AppSidebar",
  __ssrInlineRender: true,
  props: {
    isOpen: { type: Boolean }
  },
  setup(__props) {
    const route = useRoute();
    const { projects, createProject } = useProjects();
    const { chats, chatsInProject, createChatAndNavigate } = useChats();
    function isCurrentProject(projectId) {
      return route.params.projectId === projectId;
    }
    const chatsInCurrentProject = computed(
      () => chatsInProject(route.params.projectId)
    );
    function formatProjectChat(project, chat) {
      return {
        label: chat.title || "Untitled Chat",
        to: `/projects/${project.id}/chats/${chat.id}`,
        active: route.params.id === chat.id
      };
    }
    function formatProjectItem(project) {
      const isCurrent = isCurrentProject(project.id);
      const baseItem = {
        label: project.name,
        to: `/projects/${project.id}`,
        active: isCurrent,
        defaultOpen: isCurrent
      };
      if (isCurrent) {
        return {
          ...baseItem,
          children: chatsInCurrentProject.value.map(
            (chat) => formatProjectChat(project, chat)
          )
        };
      }
      return baseItem;
    }
    const projectItems = computed(
      () => {
        var _a2;
        return ((_a2 = projects.value) == null ? void 0 : _a2.map(formatProjectItem)) || [];
      }
    );
    async function handleCreateProject() {
      const newProject = await createProject();
      await createChatAndNavigate({
        projectId: newProject.id
      });
    }
    const chatsWithoutProject = computed(
      () => chats.value.filter((c) => c.projectId === void 0)
    );
    function filterChats(startDays, endDays) {
      return computed(() => {
        return filterChatsByDateRange(
          chatsWithoutProject.value,
          startDays,
          endDays
        ).map(formatChatItem);
      });
    }
    const todayChats = filterChats(-1, 1);
    const lastWeekChats = filterChats(1, 7);
    const lastMonthChats = filterChats(7, 30);
    const olderChats = filterChats(30);
    function formatChatItem(chat) {
      return {
        label: chat.title || "Untitled Chat",
        to: `/chats/${chat.id}`,
        active: route.params.id === chat.id
      };
    }
    async function handleCreateChat() {
      await createChatAndNavigate();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UNavigationMenu = __nuxt_component_0$1;
      const _component_UButton = __nuxt_component_2$1;
      const _component_UAlert = __nuxt_component_2;
      _push(`<aside${ssrRenderAttrs(mergeProps({
        class: ["fixed top-16 left-0 bottom-0 w-64 transition-transform duration-300 z-40 bg-(--ui-bg-muted) border-r-(--ui-border) border-r", { "-translate-x-full": !_ctx.isOpen }]
      }, _attrs))}>`);
      if (unref(projectItems).length > 0) {
        _push(`<div class="mb-4 overflow-auto p-4 border-b border-(--ui-border)"><div class="flex justify-between items-center mb-2"><h2 class="text-sm font-semibold text-(--ui-text-muted)">Projects</h2></div>`);
        _push(ssrRenderComponent(_component_UNavigationMenu, {
          orientation: "vertical",
          class: "w-full mb-4",
          items: unref(projectItems),
          "default-open": ""
        }, null, _parent));
        _push(ssrRenderComponent(_component_UButton, {
          size: "sm",
          color: "neutral",
          variant: "soft",
          icon: "i-heroicons-plus-small",
          class: "mt-2 w-full",
          onClick: handleCreateProject
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` New Project `);
            } else {
              return [
                createTextVNode(" New Project ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(chatsWithoutProject).length > 0) {
        _push(`<div class="overflow-y-auto p-4">`);
        if (unref(todayChats).length > 0) {
          _push(`<div class="mb-4"><div class="flex justify-between items-center mb-2"><h2 class="text-sm font-semibold text-(--ui-text-muted)">Today</h2></div>`);
          _push(ssrRenderComponent(_component_UNavigationMenu, {
            orientation: "vertical",
            class: "w-full mb-4",
            items: unref(todayChats),
            "default-open": ""
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(lastWeekChats).length > 0) {
          _push(`<div class="mb-4"><div class="flex justify-between items-center mb-2"><h2 class="text-sm font-semibold text-(--ui-text-muted)"> Last 7 Days </h2></div>`);
          _push(ssrRenderComponent(_component_UNavigationMenu, {
            orientation: "vertical",
            class: "w-full mb-4",
            items: unref(lastWeekChats),
            "default-open": ""
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(lastMonthChats).length > 0) {
          _push(`<div class="mb-4"><div class="flex justify-between items-center mb-2"><h2 class="text-sm font-semibold text-(--ui-text-muted)"> Last 30 Days </h2></div>`);
          _push(ssrRenderComponent(_component_UNavigationMenu, {
            orientation: "vertical",
            class: "w-full mb-4",
            items: unref(lastMonthChats),
            "default-open": ""
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(olderChats).length > 0) {
          _push(`<div class="mb-4"><div class="flex justify-between items-center mb-2"><h2 class="text-sm font-semibold text-(--ui-text-muted)">Older</h2></div>`);
          _push(ssrRenderComponent(_component_UNavigationMenu, {
            orientation: "vertical",
            class: "w-full mb-4",
            items: unref(olderChats),
            "default-open": ""
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<div class="overflow-y-auto p-4">`);
        _push(ssrRenderComponent(_component_UAlert, {
          title: "No Chats",
          description: "Create a new chat to get started.",
          color: "neutral",
          variant: "soft",
          class: "mt-2"
        }, null, _parent));
        _push(ssrRenderComponent(_component_UButton, {
          size: "sm",
          color: "neutral",
          variant: "soft",
          icon: "i-heroicons-plus-small",
          class: "mt-2 w-full",
          onClick: handleCreateChat
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` New Chat `);
            } else {
              return [
                createTextVNode(" New Chat ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</aside>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/base/app/components/AppSidebar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$2, { __name: "AppSidebar" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppHeader",
  __ssrInlineRender: true,
  emits: ["toggle-sidebar"],
  setup(__props, { emit: __emit }) {
    const appConfig = useAppConfig();
    const emit = __emit;
    const { createChatAndNavigate } = useChats();
    async function handleCreateChat() {
      await createChatAndNavigate();
    }
    function handleToggleSidebar() {
      emit("toggle-sidebar");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_2$1;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "app-header" }, _attrs))} data-v-f51d00d4><div class="header-left" data-v-f51d00d4>`);
      _push(ssrRenderComponent(_component_UButton, {
        icon: "i-lucide-menu",
        color: "primary",
        variant: "soft",
        onClick: handleToggleSidebar
      }, null, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        icon: "i-lucide-plus",
        onClick: handleCreateChat
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` New Chat `);
          } else {
            return [
              createTextVNode(" New Chat ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="header-title" data-v-f51d00d4>${ssrInterpolate(unref(appConfig).title)}</div><div class="header-right" data-v-f51d00d4></div></header>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/base/app/components/AppHeader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-f51d00d4"]]), { __name: "AppHeader" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const isSidebarOpen = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppSidebar = __nuxt_component_0;
      const _component_AppHeader = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout-container" }, _attrs))} data-v-17e67fde>`);
      _push(ssrRenderComponent(_component_AppSidebar, { "is-open": unref(isSidebarOpen) }, null, _parent));
      _push(ssrRenderComponent(_component_AppHeader, {
        onToggleSidebar: ($event) => isSidebarOpen.value = !unref(isSidebarOpen)
      }, null, _parent));
      _push(`<main class="${ssrRenderClass([{ "ml-64": unref(isSidebarOpen) }, "main-content transition-all duration-300 ease-in-out"])}" data-v-17e67fde>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/base/app/layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-17e67fde"]]);

export { _default as default };
//# sourceMappingURL=default-C4CKmok9.mjs.map
