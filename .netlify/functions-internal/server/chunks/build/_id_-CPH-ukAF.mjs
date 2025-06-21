import { u as useChat, _ as __nuxt_component_0 } from './useChat-CtF4dprj.mjs';
import { defineComponent, withAsyncContext, computed, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { e as useRoute, n as navigateTo, a as useAppConfig, u as useHead } from './server.mjs';
import './Container-Eoho1LEH.mjs';
import 'reka-ui';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const {
      chat: chatFromChats,
      messages,
      sendMessage
    } = useChat(route.params.id);
    if (!chatFromChats.value) {
      [__temp, __restore] = withAsyncContext(() => navigateTo(`/projects/${route.params.projectId}`, {
        replace: true
      })), await __temp, __restore();
    }
    const chat = computed(() => chatFromChats.value);
    const typing = ref(false);
    const handleSendMessage = async (message) => {
      typing.value = true;
      await sendMessage(message);
      typing.value = false;
    };
    const appConfig = useAppConfig();
    const title = computed(
      () => {
        var _a;
        return ((_a = chat.value) == null ? void 0 : _a.title) ? `${chat.value.title} - ${appConfig.title}` : appConfig.title;
      }
    );
    useHead({
      title
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ChatWindow = __nuxt_component_0;
      _push(ssrRenderComponent(_component_ChatWindow, mergeProps({
        typing: unref(typing),
        chat: unref(chat),
        messages: unref(messages),
        onSendMessage: handleSendMessage
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/chat/app/pages/projects/[projectId]/chats/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-CPH-ukAF.mjs.map
