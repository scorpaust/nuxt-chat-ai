import { defineComponent, mergeProps, withCtx, createTextVNode, createVNode, unref, createBlock, createCommentVNode, openBlock, Fragment, renderList, toDisplayString, useSlots, toRef, computed, renderSlot, toHandlers, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderSlot, ssrRenderClass } from 'vue/server-renderer';
import { useForwardPropsEmits, DialogRoot, DialogTrigger, DialogPortal, DialogOverlay, DialogContent, VisuallyHidden, DialogTitle, DialogDescription, DialogClose } from 'reka-ui';
import { reactivePick } from '@vueuse/core';
import { j as useProjects, c as __nuxt_component_2$1, d as __nuxt_component_1, n as navigateTo, w as useLocale, a as useAppConfig, t as tv, i as _appConfig } from './server.mjs';
import { u as useChat } from './useChat-CtF4dprj.mjs';
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
import './Container-Eoho1LEH.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'property-information';
import 'unified';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'micromark-util-sanitize-uri';
import 'hast-util-to-string';
import 'github-slugger';

var _a;
const theme = {
  "slots": {
    "overlay": "fixed inset-0 bg-(--ui-bg-elevated)/75",
    "content": "fixed bg-(--ui-bg) divide-y divide-(--ui-border) flex flex-col focus:outline-none",
    "header": "flex items-center gap-1.5 p-4 sm:px-6 min-h-16",
    "wrapper": "",
    "body": "flex-1 overflow-y-auto p-4 sm:p-6",
    "footer": "flex items-center gap-1.5 p-4 sm:px-6",
    "title": "text-(--ui-text-highlighted) font-semibold",
    "description": "mt-1 text-(--ui-text-muted) text-sm",
    "close": "absolute top-4 end-4"
  },
  "variants": {
    "transition": {
      "true": {
        "overlay": "data-[state=open]:animate-[fade-in_200ms_ease-out] data-[state=closed]:animate-[fade-out_200ms_ease-in]",
        "content": "data-[state=open]:animate-[scale-in_200ms_ease-out] data-[state=closed]:animate-[scale-out_200ms_ease-in]"
      }
    },
    "fullscreen": {
      "true": {
        "content": "inset-0"
      },
      "false": {
        "content": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100vw-2rem)] max-w-lg max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-4rem)] rounded-[calc(var(--ui-radius)*2)] shadow-lg ring ring-(--ui-border)"
      }
    }
  }
};
const appConfigModal = _appConfig;
const modal = tv({ extend: tv(theme), ...((_a = appConfigModal.ui) == null ? void 0 : _a.modal) || {} });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Modal",
  __ssrInlineRender: true,
  props: {
    title: {},
    description: {},
    content: {},
    overlay: { type: Boolean, default: true },
    transition: { type: Boolean, default: true },
    fullscreen: { type: Boolean },
    portal: { type: Boolean, default: true },
    close: { type: [Boolean, Object], default: true },
    closeIcon: {},
    dismissible: { type: Boolean, default: true },
    class: {},
    ui: {},
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean, default: true }
  },
  emits: ["after:leave", "update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const { t } = useLocale();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactivePick(props, "open", "defaultOpen", "modal"), emits);
    const contentProps = toRef(() => props.content);
    const contentEvents = computed(() => {
      if (!props.dismissible) {
        return {
          pointerDownOutside: (e) => e.preventDefault(),
          interactOutside: (e) => e.preventDefault(),
          escapeKeyDown: (e) => e.preventDefault(),
          closeAutoFocus: (e) => e.preventDefault()
        };
      }
      return {
        closeAutoFocus: (e) => e.preventDefault()
      };
    });
    const ui = computed(() => modal({
      transition: props.transition,
      fullscreen: props.fullscreen
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DialogRoot), mergeProps(unref(rootProps), _attrs), {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!!slots.default) {
              _push2(ssrRenderComponent(unref(DialogTrigger), {
                "as-child": "",
                class: props.class
              }, {
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
            _push2(ssrRenderComponent(unref(DialogPortal), {
              disabled: !_ctx.portal
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                var _a2, _b, _c, _d;
                if (_push3) {
                  if (_ctx.overlay) {
                    _push3(ssrRenderComponent(unref(DialogOverlay), {
                      class: ui.value.overlay({ class: (_a2 = props.ui) == null ? void 0 : _a2.overlay })
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(unref(DialogContent), mergeProps({
                    class: ui.value.content({ class: [!slots.default && props.class, (_b = props.ui) == null ? void 0 : _b.content] })
                  }, contentProps.value, {
                    onAfterLeave: ($event) => emits("after:leave")
                  }, toHandlers(contentEvents.value)), {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (!!slots.content && (_ctx.title || !!slots.title || (_ctx.description || !!slots.description))) {
                          _push4(ssrRenderComponent(unref(VisuallyHidden), null, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                if (_ctx.title || !!slots.title) {
                                  _push5(ssrRenderComponent(unref(DialogTitle), null, {
                                    default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                                          _push6(`${ssrInterpolate(_ctx.title)}`);
                                        }, _push6, _parent6, _scopeId5);
                                      } else {
                                        return [
                                          renderSlot(_ctx.$slots, "title", {}, () => [
                                            createTextVNode(toDisplayString(_ctx.title), 1)
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                if (_ctx.description || !!slots.description) {
                                  _push5(ssrRenderComponent(unref(DialogDescription), null, {
                                    default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                                          _push6(`${ssrInterpolate(_ctx.description)}`);
                                        }, _push6, _parent6, _scopeId5);
                                      } else {
                                        return [
                                          renderSlot(_ctx.$slots, "description", {}, () => [
                                            createTextVNode(toDisplayString(_ctx.description), 1)
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                              } else {
                                return [
                                  _ctx.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "title", {}, () => [
                                        createTextVNode(toDisplayString(_ctx.title), 1)
                                      ])
                                    ]),
                                    _: 3
                                  })) : createCommentVNode("", true),
                                  _ctx.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "description", {}, () => [
                                        createTextVNode(toDisplayString(_ctx.description), 1)
                                      ])
                                    ]),
                                    _: 3
                                  })) : createCommentVNode("", true)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        ssrRenderSlot(_ctx.$slots, "content", {}, () => {
                          var _a3, _b2, _c2;
                          if (!!slots.header || (_ctx.title || !!slots.title) || (_ctx.description || !!slots.description) || (_ctx.close || !!slots.close)) {
                            _push4(`<div class="${ssrRenderClass(ui.value.header({ class: (_a3 = props.ui) == null ? void 0 : _a3.header }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "header", {}, () => {
                              var _a4, _b3, _c3;
                              _push4(`<div class="${ssrRenderClass(ui.value.wrapper({ class: (_a4 = props.ui) == null ? void 0 : _a4.wrapper }))}"${_scopeId3}>`);
                              if (_ctx.title || !!slots.title) {
                                _push4(ssrRenderComponent(unref(DialogTitle), {
                                  class: ui.value.title({ class: (_b3 = props.ui) == null ? void 0 : _b3.title })
                                }, {
                                  default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      ssrRenderSlot(_ctx.$slots, "title", {}, () => {
                                        _push5(`${ssrInterpolate(_ctx.title)}`);
                                      }, _push5, _parent5, _scopeId4);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, "title", {}, () => [
                                          createTextVNode(toDisplayString(_ctx.title), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                              if (_ctx.description || !!slots.description) {
                                _push4(ssrRenderComponent(unref(DialogDescription), {
                                  class: ui.value.description({ class: (_c3 = props.ui) == null ? void 0 : _c3.description })
                                }, {
                                  default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                                        _push5(`${ssrInterpolate(_ctx.description)}`);
                                      }, _push5, _parent5, _scopeId4);
                                    } else {
                                      return [
                                        renderSlot(_ctx.$slots, "description", {}, () => [
                                          createTextVNode(toDisplayString(_ctx.description), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                              _push4(`</div>`);
                              _push4(ssrRenderComponent(unref(DialogClose), { "as-child": "" }, {
                                default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    ssrRenderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                                      var _a5;
                                      if (_ctx.close) {
                                        _push5(ssrRenderComponent(__nuxt_component_2$1, mergeProps({
                                          icon: _ctx.closeIcon || unref(appConfig).ui.icons.close,
                                          size: "md",
                                          color: "neutral",
                                          variant: "ghost",
                                          "aria-label": unref(t)("modal.close")
                                        }, typeof _ctx.close === "object" ? _ctx.close : {}, {
                                          class: ui.value.close({ class: (_a5 = props.ui) == null ? void 0 : _a5.close })
                                        }), null, _parent5, _scopeId4));
                                      } else {
                                        _push5(`<!---->`);
                                      }
                                    }, _push5, _parent5, _scopeId4);
                                  } else {
                                    return [
                                      renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                                        var _a5;
                                        return [
                                          _ctx.close ? (openBlock(), createBlock(__nuxt_component_2$1, mergeProps({
                                            key: 0,
                                            icon: _ctx.closeIcon || unref(appConfig).ui.icons.close,
                                            size: "md",
                                            color: "neutral",
                                            variant: "ghost",
                                            "aria-label": unref(t)("modal.close")
                                          }, typeof _ctx.close === "object" ? _ctx.close : {}, {
                                            class: ui.value.close({ class: (_a5 = props.ui) == null ? void 0 : _a5.close })
                                          }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)
                                        ];
                                      })
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            }, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          if (!!slots.body) {
                            _push4(`<div class="${ssrRenderClass(ui.value.body({ class: (_b2 = props.ui) == null ? void 0 : _b2.body }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "body", {}, null, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          if (!!slots.footer) {
                            _push4(`<div class="${ssrRenderClass(ui.value.footer({ class: (_c2 = props.ui) == null ? void 0 : _c2.footer }))}"${_scopeId3}>`);
                            ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push4, _parent4, _scopeId3);
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                        }, _push4, _parent4, _scopeId3);
                      } else {
                        return [
                          !!slots.content && (_ctx.title || !!slots.title || (_ctx.description || !!slots.description)) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 0 }, {
                            default: withCtx(() => [
                              _ctx.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "title", {}, () => [
                                    createTextVNode(toDisplayString(_ctx.title), 1)
                                  ])
                                ]),
                                _: 3
                              })) : createCommentVNode("", true),
                              _ctx.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "description", {}, () => [
                                    createTextVNode(toDisplayString(_ctx.description), 1)
                                  ])
                                ]),
                                _: 3
                              })) : createCommentVNode("", true)
                            ]),
                            _: 3
                          })) : createCommentVNode("", true),
                          renderSlot(_ctx.$slots, "content", {}, () => {
                            var _a3, _b2, _c2;
                            return [
                              !!slots.header || (_ctx.title || !!slots.title) || (_ctx.description || !!slots.description) || (_ctx.close || !!slots.close) ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: ui.value.header({ class: (_a3 = props.ui) == null ? void 0 : _a3.header })
                              }, [
                                renderSlot(_ctx.$slots, "header", {}, () => {
                                  var _a4, _b3, _c3;
                                  return [
                                    createVNode("div", {
                                      class: ui.value.wrapper({ class: (_a4 = props.ui) == null ? void 0 : _a4.wrapper })
                                    }, [
                                      _ctx.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), {
                                        key: 0,
                                        class: ui.value.title({ class: (_b3 = props.ui) == null ? void 0 : _b3.title })
                                      }, {
                                        default: withCtx(() => [
                                          renderSlot(_ctx.$slots, "title", {}, () => [
                                            createTextVNode(toDisplayString(_ctx.title), 1)
                                          ])
                                        ]),
                                        _: 3
                                      }, 8, ["class"])) : createCommentVNode("", true),
                                      _ctx.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), {
                                        key: 1,
                                        class: ui.value.description({ class: (_c3 = props.ui) == null ? void 0 : _c3.description })
                                      }, {
                                        default: withCtx(() => [
                                          renderSlot(_ctx.$slots, "description", {}, () => [
                                            createTextVNode(toDisplayString(_ctx.description), 1)
                                          ])
                                        ]),
                                        _: 3
                                      }, 8, ["class"])) : createCommentVNode("", true)
                                    ], 2),
                                    createVNode(unref(DialogClose), { "as-child": "" }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                                          var _a5;
                                          return [
                                            _ctx.close ? (openBlock(), createBlock(__nuxt_component_2$1, mergeProps({
                                              key: 0,
                                              icon: _ctx.closeIcon || unref(appConfig).ui.icons.close,
                                              size: "md",
                                              color: "neutral",
                                              variant: "ghost",
                                              "aria-label": unref(t)("modal.close")
                                            }, typeof _ctx.close === "object" ? _ctx.close : {}, {
                                              class: ui.value.close({ class: (_a5 = props.ui) == null ? void 0 : _a5.close })
                                            }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)
                                          ];
                                        })
                                      ]),
                                      _: 3
                                    })
                                  ];
                                })
                              ], 2)) : createCommentVNode("", true),
                              !!slots.body ? (openBlock(), createBlock("div", {
                                key: 1,
                                class: ui.value.body({ class: (_b2 = props.ui) == null ? void 0 : _b2.body })
                              }, [
                                renderSlot(_ctx.$slots, "body")
                              ], 2)) : createCommentVNode("", true),
                              !!slots.footer ? (openBlock(), createBlock("div", {
                                key: 2,
                                class: ui.value.footer({ class: (_c2 = props.ui) == null ? void 0 : _c2.footer })
                              }, [
                                renderSlot(_ctx.$slots, "footer")
                              ], 2)) : createCommentVNode("", true)
                            ];
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    _ctx.overlay ? (openBlock(), createBlock(unref(DialogOverlay), {
                      key: 0,
                      class: ui.value.overlay({ class: (_c = props.ui) == null ? void 0 : _c.overlay })
                    }, null, 8, ["class"])) : createCommentVNode("", true),
                    createVNode(unref(DialogContent), mergeProps({
                      class: ui.value.content({ class: [!slots.default && props.class, (_d = props.ui) == null ? void 0 : _d.content] })
                    }, contentProps.value, {
                      onAfterLeave: ($event) => emits("after:leave")
                    }, toHandlers(contentEvents.value)), {
                      default: withCtx(() => [
                        !!slots.content && (_ctx.title || !!slots.title || (_ctx.description || !!slots.description)) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 0 }, {
                          default: withCtx(() => [
                            _ctx.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "title", {}, () => [
                                  createTextVNode(toDisplayString(_ctx.title), 1)
                                ])
                              ]),
                              _: 3
                            })) : createCommentVNode("", true),
                            _ctx.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "description", {}, () => [
                                  createTextVNode(toDisplayString(_ctx.description), 1)
                                ])
                              ]),
                              _: 3
                            })) : createCommentVNode("", true)
                          ]),
                          _: 3
                        })) : createCommentVNode("", true),
                        renderSlot(_ctx.$slots, "content", {}, () => {
                          var _a3, _b2, _c2;
                          return [
                            !!slots.header || (_ctx.title || !!slots.title) || (_ctx.description || !!slots.description) || (_ctx.close || !!slots.close) ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: ui.value.header({ class: (_a3 = props.ui) == null ? void 0 : _a3.header })
                            }, [
                              renderSlot(_ctx.$slots, "header", {}, () => {
                                var _a4, _b3, _c3;
                                return [
                                  createVNode("div", {
                                    class: ui.value.wrapper({ class: (_a4 = props.ui) == null ? void 0 : _a4.wrapper })
                                  }, [
                                    _ctx.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), {
                                      key: 0,
                                      class: ui.value.title({ class: (_b3 = props.ui) == null ? void 0 : _b3.title })
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "title", {}, () => [
                                          createTextVNode(toDisplayString(_ctx.title), 1)
                                        ])
                                      ]),
                                      _: 3
                                    }, 8, ["class"])) : createCommentVNode("", true),
                                    _ctx.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), {
                                      key: 1,
                                      class: ui.value.description({ class: (_c3 = props.ui) == null ? void 0 : _c3.description })
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "description", {}, () => [
                                          createTextVNode(toDisplayString(_ctx.description), 1)
                                        ])
                                      ]),
                                      _: 3
                                    }, 8, ["class"])) : createCommentVNode("", true)
                                  ], 2),
                                  createVNode(unref(DialogClose), { "as-child": "" }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                                        var _a5;
                                        return [
                                          _ctx.close ? (openBlock(), createBlock(__nuxt_component_2$1, mergeProps({
                                            key: 0,
                                            icon: _ctx.closeIcon || unref(appConfig).ui.icons.close,
                                            size: "md",
                                            color: "neutral",
                                            variant: "ghost",
                                            "aria-label": unref(t)("modal.close")
                                          }, typeof _ctx.close === "object" ? _ctx.close : {}, {
                                            class: ui.value.close({ class: (_a5 = props.ui) == null ? void 0 : _a5.close })
                                          }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)
                                        ];
                                      })
                                    ]),
                                    _: 3
                                  })
                                ];
                              })
                            ], 2)) : createCommentVNode("", true),
                            !!slots.body ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: ui.value.body({ class: (_b2 = props.ui) == null ? void 0 : _b2.body })
                            }, [
                              renderSlot(_ctx.$slots, "body")
                            ], 2)) : createCommentVNode("", true),
                            !!slots.footer ? (openBlock(), createBlock("div", {
                              key: 2,
                              class: ui.value.footer({ class: (_c2 = props.ui) == null ? void 0 : _c2.footer })
                            }, [
                              renderSlot(_ctx.$slots, "footer")
                            ], 2)) : createCommentVNode("", true)
                          ];
                        })
                      ]),
                      _: 3
                    }, 16, ["class", "onAfterLeave"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              !!slots.default ? (openBlock(), createBlock(unref(DialogTrigger), {
                key: 0,
                "as-child": "",
                class: props.class
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", { open })
                ]),
                _: 2
              }, 1032, ["class"])) : createCommentVNode("", true),
              createVNode(unref(DialogPortal), {
                disabled: !_ctx.portal
              }, {
                default: withCtx(() => {
                  var _a2, _b;
                  return [
                    _ctx.overlay ? (openBlock(), createBlock(unref(DialogOverlay), {
                      key: 0,
                      class: ui.value.overlay({ class: (_a2 = props.ui) == null ? void 0 : _a2.overlay })
                    }, null, 8, ["class"])) : createCommentVNode("", true),
                    createVNode(unref(DialogContent), mergeProps({
                      class: ui.value.content({ class: [!slots.default && props.class, (_b = props.ui) == null ? void 0 : _b.content] })
                    }, contentProps.value, {
                      onAfterLeave: ($event) => emits("after:leave")
                    }, toHandlers(contentEvents.value)), {
                      default: withCtx(() => [
                        !!slots.content && (_ctx.title || !!slots.title || (_ctx.description || !!slots.description)) ? (openBlock(), createBlock(unref(VisuallyHidden), { key: 0 }, {
                          default: withCtx(() => [
                            _ctx.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), { key: 0 }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "title", {}, () => [
                                  createTextVNode(toDisplayString(_ctx.title), 1)
                                ])
                              ]),
                              _: 3
                            })) : createCommentVNode("", true),
                            _ctx.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), { key: 1 }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "description", {}, () => [
                                  createTextVNode(toDisplayString(_ctx.description), 1)
                                ])
                              ]),
                              _: 3
                            })) : createCommentVNode("", true)
                          ]),
                          _: 3
                        })) : createCommentVNode("", true),
                        renderSlot(_ctx.$slots, "content", {}, () => {
                          var _a3, _b2, _c;
                          return [
                            !!slots.header || (_ctx.title || !!slots.title) || (_ctx.description || !!slots.description) || (_ctx.close || !!slots.close) ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: ui.value.header({ class: (_a3 = props.ui) == null ? void 0 : _a3.header })
                            }, [
                              renderSlot(_ctx.$slots, "header", {}, () => {
                                var _a4, _b3, _c2;
                                return [
                                  createVNode("div", {
                                    class: ui.value.wrapper({ class: (_a4 = props.ui) == null ? void 0 : _a4.wrapper })
                                  }, [
                                    _ctx.title || !!slots.title ? (openBlock(), createBlock(unref(DialogTitle), {
                                      key: 0,
                                      class: ui.value.title({ class: (_b3 = props.ui) == null ? void 0 : _b3.title })
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "title", {}, () => [
                                          createTextVNode(toDisplayString(_ctx.title), 1)
                                        ])
                                      ]),
                                      _: 3
                                    }, 8, ["class"])) : createCommentVNode("", true),
                                    _ctx.description || !!slots.description ? (openBlock(), createBlock(unref(DialogDescription), {
                                      key: 1,
                                      class: ui.value.description({ class: (_c2 = props.ui) == null ? void 0 : _c2.description })
                                    }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "description", {}, () => [
                                          createTextVNode(toDisplayString(_ctx.description), 1)
                                        ])
                                      ]),
                                      _: 3
                                    }, 8, ["class"])) : createCommentVNode("", true)
                                  ], 2),
                                  createVNode(unref(DialogClose), { "as-child": "" }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "close", { ui: ui.value }, () => {
                                        var _a5;
                                        return [
                                          _ctx.close ? (openBlock(), createBlock(__nuxt_component_2$1, mergeProps({
                                            key: 0,
                                            icon: _ctx.closeIcon || unref(appConfig).ui.icons.close,
                                            size: "md",
                                            color: "neutral",
                                            variant: "ghost",
                                            "aria-label": unref(t)("modal.close")
                                          }, typeof _ctx.close === "object" ? _ctx.close : {}, {
                                            class: ui.value.close({ class: (_a5 = props.ui) == null ? void 0 : _a5.close })
                                          }), null, 16, ["icon", "aria-label", "class"])) : createCommentVNode("", true)
                                        ];
                                      })
                                    ]),
                                    _: 3
                                  })
                                ];
                              })
                            ], 2)) : createCommentVNode("", true),
                            !!slots.body ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: ui.value.body({ class: (_b2 = props.ui) == null ? void 0 : _b2.body })
                            }, [
                              renderSlot(_ctx.$slots, "body")
                            ], 2)) : createCommentVNode("", true),
                            !!slots.footer ? (openBlock(), createBlock("div", {
                              key: 2,
                              class: ui.value.footer({ class: (_c = props.ui) == null ? void 0 : _c.footer })
                            }, [
                              renderSlot(_ctx.$slots, "footer")
                            ], 2)) : createCommentVNode("", true)
                          ];
                        })
                      ]),
                      _: 3
                    }, 16, ["class", "onAfterLeave"])
                  ];
                }),
                _: 3
              }, 8, ["disabled"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@https+++pkg.pr.new_6168458293122d7cd2d67add5b8edd35/node_modules/@nuxt/ui/dist/runtime/components/Modal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$1, { __name: "UModal" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AssignToProjectModal",
  __ssrInlineRender: true,
  props: {
    chatId: {}
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { projects } = useProjects();
    const { assignToProject } = useChat(props.chatId);
    async function handleAssignToProject(projectId) {
      try {
        await assignToProject(projectId);
        await navigateTo(`/projects/${projectId}/chats/${props.chatId}`);
      } catch (error) {
        console.error("Failed to assign chat to project:", error);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UModal = __nuxt_component_0;
      const _component_UIcon = __nuxt_component_1;
      const _component_UButton = __nuxt_component_2$1;
      _push(ssrRenderComponent(_component_UModal, mergeProps({
        open: "",
        title: "Assign to Project",
        description: "Choose a project to assign this chat to.",
        "onUpdate:open": ($event) => emit("close")
      }, _attrs), {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b;
          if (_push2) {
            _push2(`<div class="space-y-2"${_scopeId}><!--[-->`);
            ssrRenderList(unref(projects), (project) => {
              _push2(`<div class="flex items-center space-x-3 p-3 border border-[var(--ui-border)] rounded-lg hover:bg-[var(--ui-bg-elevated)] cursor-pointer"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "i-heroicons-folder",
                class: "text-[var(--ui-text-dimmed)]"
              }, null, _parent2, _scopeId));
              _push2(`<span class="font-medium text-[var(--ui-text)]"${_scopeId}>${ssrInterpolate(project.name)}</span></div>`);
            });
            _push2(`<!--]-->`);
            if (!((_a2 = unref(projects)) == null ? void 0 : _a2.length)) {
              _push2(`<div class="text-center py-8"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIcon, {
                name: "i-heroicons-folder-plus",
                class: "mx-auto h-12 w-12 text-[var(--ui-text-dimmed)]"
              }, null, _parent2, _scopeId));
              _push2(`<h3 class="mt-2 text-sm font-medium text-[var(--ui-text)]"${_scopeId}> No projects </h3><p class="mt-1 text-sm text-[var(--ui-text-muted)]"${_scopeId}> Create a project first to assign chats to it. </p></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-2" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(projects), (project) => {
                  return openBlock(), createBlock("div", {
                    key: project.id,
                    class: "flex items-center space-x-3 p-3 border border-[var(--ui-border)] rounded-lg hover:bg-[var(--ui-bg-elevated)] cursor-pointer",
                    onClick: ($event) => handleAssignToProject(project.id)
                  }, [
                    createVNode(_component_UIcon, {
                      name: "i-heroicons-folder",
                      class: "text-[var(--ui-text-dimmed)]"
                    }),
                    createVNode("span", { class: "font-medium text-[var(--ui-text)]" }, toDisplayString(project.name), 1)
                  ], 8, ["onClick"]);
                }), 128)),
                !((_b = unref(projects)) == null ? void 0 : _b.length) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "text-center py-8"
                }, [
                  createVNode(_component_UIcon, {
                    name: "i-heroicons-folder-plus",
                    class: "mx-auto h-12 w-12 text-[var(--ui-text-dimmed)]"
                  }),
                  createVNode("h3", { class: "mt-2 text-sm font-medium text-[var(--ui-text)]" }, " No projects "),
                  createVNode("p", { class: "mt-1 text-sm text-[var(--ui-text-muted)]" }, " Create a project first to assign chats to it. ")
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-end"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              color: "neutral",
              variant: "soft",
              onClick: ($event) => emit("close")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Cancel `);
                } else {
                  return [
                    createTextVNode(" Cancel ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-end" }, [
                createVNode(_component_UButton, {
                  color: "neutral",
                  variant: "soft",
                  onClick: ($event) => emit("close")
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Cancel ")
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/chat/app/components/AssignToProjectModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AssignToProjectModal = Object.assign(_sfc_main, { __name: "AssignToProjectModal" });

export { AssignToProjectModal as default };
//# sourceMappingURL=AssignToProjectModal-AYaQC6vU.mjs.map
