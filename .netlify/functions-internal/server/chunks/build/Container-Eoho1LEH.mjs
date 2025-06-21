import { defineComponent, unref, mergeProps, withCtx, renderSlot, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { Primitive } from 'reka-ui';
import { t as tv, i as _appConfig } from './server.mjs';

var _a;
const theme = {
  "base": "max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8"
};
const appConfigContainer = _appConfig;
const container = tv({ extend: tv(theme), ...((_a = appConfigContainer.ui) == null ? void 0 : _a.container) || {} });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Container",
  __ssrInlineRender: true,
  props: {
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: _ctx.as,
        class: unref(container)({ class: props.class })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxt+ui@https+++pkg.pr.new_6168458293122d7cd2d67add5b8edd35/node_modules/@nuxt/ui/dist/runtime/components/Container.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main, { __name: "UContainer" });

export { __nuxt_component_0 as _ };
//# sourceMappingURL=Container-Eoho1LEH.mjs.map
