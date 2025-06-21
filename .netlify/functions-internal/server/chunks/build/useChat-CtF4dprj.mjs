import { _ as __nuxt_component_0$3 } from './Container-Eoho1LEH.mjs';
import { b as useChats, o as useFetch, e as useRoute, c as __nuxt_component_2$1, m as useAsyncData } from './server.mjs';
import { computed, defineComponent, watch, ref, mergeProps, withCtx, unref, createTextVNode, createBlock, openBlock, createVNode, Fragment, createCommentVNode, renderList, defineAsyncComponent, useTemplateRef, nextTick, withAsyncContext, h, getCurrentInstance, toRaw, reactive, resolveComponent, Text, Comment, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { I as defu, T as pascalCase, U as kebabCase, q as destr } from '../_/nitro.mjs';
import { find, html as html$1 } from 'property-information';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remark2rehype from 'remark-rehype';
import remarkMDC, { parseFrontMatter } from 'remark-mdc';
import remarkGFM from 'remark-gfm';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSortAttributeValues from 'rehype-sort-attribute-values';
import rehypeSortAttributes from 'rehype-sort-attributes';
import rehypeRaw from 'rehype-raw';
import { detab } from 'detab';
import { normalizeUri } from 'micromark-util-sanitize-uri';
import { toString } from 'hast-util-to-string';
import Slugger from 'github-slugger';

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ChatInput",
  __ssrInlineRender: true,
  props: {
    isStreaming: { type: Boolean, default: false }
  },
  emits: ["send-message"],
  setup(__props, { emit: __emit }) {
    const textareaRef = useTemplateRef("textareaRef");
    const newMessage = ref("");
    watch(
      () => __props.isStreaming,
      async (value) => {
        var _a;
        if (!value) {
          await nextTick();
          (_a = textareaRef.value) == null ? void 0 : _a.focus();
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_2$1;
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "message-form-wrapper" }, _attrs))} data-v-fb02ecd7><textarea class="message-input"${ssrIncludeBooleanAttr(_ctx.isStreaming) ? " disabled" : ""}${ssrRenderAttr("rows", 1)} data-v-fb02ecd7>${ssrInterpolate(unref(newMessage))}</textarea>`);
      _push(ssrRenderComponent(_component_UButton, {
        type: "submit",
        disabled: !unref(newMessage) || _ctx.isStreaming,
        color: "primary",
        variant: "solid",
        icon: "i-heroicons-paper-airplane",
        class: "absolute right-3 bottom-3 rounded-full",
        square: ""
      }, null, _parent));
      _push(`</form>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/chat/app/components/ChatInput.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$5, [["__scopeId", "data-v-fb02ecd7"]]), { __name: "ChatInput" });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "TypewriterText",
  __ssrInlineRender: true,
  props: {
    text: {}
  },
  setup(__props) {
    const props = __props;
    const textEl = ref(null);
    const animate = (el) => {
      var _a;
      const chars = ((_a = el.textContent) == null ? void 0 : _a.length) || 0;
      el.animate(
        [{ clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0 0 0)" }],
        {
          duration: Math.min(chars * 50, 1e3),
          // Cap at 1 second
          easing: "steps(" + chars + ", end)"
        }
      );
    };
    watch(
      () => props.text,
      () => {
        if (textEl.value) {
          animate(textEl.value);
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        ref_key: "textEl",
        ref: textEl,
        class: "typewriter-text"
      }, _attrs))} data-v-bd1e8c74>${ssrInterpolate(_ctx.text)}</span>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/base/app/components/TypewriterText.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$4, [["__scopeId", "data-v-bd1e8c74"]]), { __name: "TypewriterText" });
const htmlTags = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "math",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rb",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "slot",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "svg",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
];
const TEXT_TAGS = ["p", "h1", "h2", "h3", "h4", "h5", "h6", "li"];
function isTag(vnode, tag) {
  if (vnode.type === tag) {
    return true;
  }
  if (typeof vnode.type === "object" && vnode.type.tag === tag) {
    return true;
  }
  if (vnode.tag === tag) {
    return true;
  }
  return false;
}
function isText(vnode) {
  return isTag(vnode, "text") || isTag(vnode, Symbol.for("v-txt"));
}
function nodeChildren(node) {
  var _a;
  if (Array.isArray(node.children) || typeof node.children === "string") {
    return node.children;
  }
  if (typeof ((_a = node.children) == null ? void 0 : _a.default) === "function") {
    return node.children.default();
  }
  return [];
}
function nodeTextContent(node) {
  if (!node) {
    return "";
  }
  if (Array.isArray(node)) {
    return node.map(nodeTextContent).join("");
  }
  if (isText(node)) {
    return node.value || node.children || "";
  }
  const children = nodeChildren(node);
  if (Array.isArray(children)) {
    return children.map(nodeTextContent).filter(Boolean).join("");
  }
  return "";
}
function unwrap(vnode, tags = []) {
  if (Array.isArray(vnode)) {
    return vnode.flatMap((node) => unwrap(node, tags));
  }
  let result = vnode;
  if (tags.some((tag) => tag === "*" || isTag(vnode, tag))) {
    result = nodeChildren(vnode) || vnode;
    if (!Array.isArray(result) && TEXT_TAGS.some((tag) => isTag(vnode, tag))) {
      result = [result];
    }
  }
  return result;
}
function _flatUnwrap(vnodes, tags = []) {
  vnodes = Array.isArray(vnodes) ? vnodes : [vnodes];
  if (!tags.length) {
    return vnodes;
  }
  return vnodes.flatMap((vnode) => _flatUnwrap(unwrap(vnode, [tags[0]]), tags.slice(1))).filter((vnode) => !(isText(vnode) && nodeTextContent(vnode).trim() === ""));
}
function flatUnwrap(vnodes, tags = []) {
  if (typeof tags === "string") {
    tags = tags.split(/[,\s]/).map((tag) => tag.trim()).filter(Boolean);
  }
  if (!tags.length) {
    return vnodes;
  }
  return _flatUnwrap(vnodes, tags).reduce((acc, item) => {
    if (isText(item)) {
      if (typeof acc[acc.length - 1] === "string") {
        acc[acc.length - 1] += item.children;
      } else {
        acc.push(item.children);
      }
    } else {
      acc.push(item);
    }
    return acc;
  }, []);
}
function pick(obj, keys) {
  return keys.reduce((acc, key) => {
    const value = get(obj, key);
    if (value !== void 0) {
      acc[key] = value;
    }
    return acc;
  }, {});
}
function get(obj, key) {
  return key.split(".").reduce((acc, k) => acc && acc[k], obj);
}
const DEFAULT_SLOT = "default";
const rxOn = /^@|^v-on:/;
const rxBind = /^:|^v-bind:/;
const rxModel = /^v-model/;
const nativeInputs = ["select", "textarea", "input"];
const specialParentTags = ["math", "svg"];
const proseComponentMap = Object.fromEntries(["p", "a", "blockquote", "code", "pre", "code", "em", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "img", "ul", "ol", "li", "strong", "table", "thead", "tbody", "td", "th", "tr", "script"].map((t) => [t, `prose-${t}`]));
const _sfc_main$3 = defineComponent({
  name: "MDCRenderer",
  props: {
    /**
     * Content to render
     */
    body: {
      type: Object,
      required: true
    },
    /**
     * Document meta data
     */
    data: {
      type: Object,
      default: () => ({})
    },
    /**
     * Class(es) to bind to the component
     */
    class: {
      type: [String, Object],
      default: void 0
    },
    /**
     * Root tag to use for rendering
     */
    tag: {
      type: [String, Boolean],
      default: void 0
    },
    /**
     * Whether or not to render Prose components instead of HTML tags
     */
    prose: {
      type: Boolean,
      default: void 0
    },
    /**
     * The map of custom components to use for rendering.
     */
    components: {
      type: Object,
      default: () => ({})
    },
    /**
     * Tags to unwrap separated by spaces
     * Example: 'ul li'
     */
    unwrap: {
      type: [Boolean, String],
      default: false
    }
  },
  async setup(props) {
    var _a, _b, _c, _d, _e, _f, _g;
    const app = (_b = (_a = getCurrentInstance()) == null ? void 0 : _a.appContext) == null ? void 0 : _b.app;
    const $nuxt = app == null ? void 0 : app.$nuxt;
    const route = ($nuxt == null ? void 0 : $nuxt.$route) || ($nuxt == null ? void 0 : $nuxt._route);
    const { mdc } = ((_c = $nuxt == null ? void 0 : $nuxt.$config) == null ? void 0 : _c.public) || {};
    const tags = {
      ...((_d = mdc == null ? void 0 : mdc.components) == null ? void 0 : _d.prose) && props.prose !== false ? proseComponentMap : {},
      ...((_e = mdc == null ? void 0 : mdc.components) == null ? void 0 : _e.map) || {},
      ...toRaw(((_g = (_f = props.data) == null ? void 0 : _f.mdc) == null ? void 0 : _g.components) || {}),
      ...props.components
    };
    const contentKey = computed(() => {
      var _a2;
      const components = (((_a2 = props.body) == null ? void 0 : _a2.children) || []).map((n) => n.tag || n.type).filter((t) => !htmlTags.includes(t));
      return Array.from(new Set(components)).sort().join(".");
    });
    const runtimeData = reactive({
      ...props.data
    });
    watch(() => props.data, (newData) => {
      Object.assign(runtimeData, newData);
    });
    await resolveContentComponents(props.body, { tags });
    function updateRuntimeData(code2, value) {
      const lastIndex = code2.split(".").length - 1;
      return code2.split(".").reduce((o, k, i) => {
        if (i == lastIndex && o) {
          o[k] = value;
          return o[k];
        }
        return typeof o === "object" ? o[k] : void 0;
      }, runtimeData);
    }
    return { tags, contentKey, route, runtimeData, updateRuntimeData };
  },
  render(ctx) {
    var _a, _b;
    const { tags, tag, body, data, contentKey, route, unwrap: unwrap2, runtimeData, updateRuntimeData } = ctx;
    if (!body) {
      return null;
    }
    const meta = { ...data, tags, $route: route, runtimeData, updateRuntimeData };
    const component = tag !== false ? resolveComponentInstance(tag || ((_a = meta.component) == null ? void 0 : _a.name) || meta.component || "div") : void 0;
    return component ? h(component, { ...(_b = meta.component) == null ? void 0 : _b.props, class: ctx.class, ...this.$attrs, key: contentKey }, { default: defaultSlotRenderer }) : defaultSlotRenderer == null ? void 0 : defaultSlotRenderer();
    function defaultSlotRenderer() {
      const defaultSlot = _renderSlots(body, h, { documentMeta: meta, parentScope: meta, resolveComponent: resolveComponentInstance });
      if (!(defaultSlot == null ? void 0 : defaultSlot.default)) {
        return null;
      }
      if (unwrap2) {
        return flatUnwrap(
          defaultSlot.default(),
          typeof unwrap2 === "string" ? unwrap2.split(" ") : ["*"]
        );
      }
      return defaultSlot.default();
    }
  }
});
function _renderNode(node, h2, options) {
  const { documentMeta, parentScope, resolveComponent: resolveComponent2 } = options;
  if (node.type === "text") {
    return h2(Text, node.value);
  }
  if (node.type === "comment") {
    return h2(Comment, null, node.value);
  }
  const originalTag = node.tag;
  const renderTag = findMappedTag(node, documentMeta.tags);
  if (node.tag === "binding") {
    return renderBinding(node, h2, documentMeta, parentScope);
  }
  const _resolveComponent = isUnresolvableTag(renderTag) ? (component2) => component2 : resolveComponent2;
  if (renderTag === "script") {
    return h2(
      "pre",
      { class: "script-to-pre" },
      "<script>\n" + nodeTextContent(node) + "\n<\/script>"
    );
  }
  const component = _resolveComponent(renderTag);
  if (typeof component === "object") {
    component.tag = originalTag;
  }
  const props = propsToData(node, documentMeta);
  return h2(
    component,
    props,
    _renderSlots(
      node,
      h2,
      {
        documentMeta,
        parentScope: { ...parentScope, ...props },
        resolveComponent: _resolveComponent
      }
    )
  );
}
function _renderSlots(node, h2, options) {
  const { documentMeta, parentScope, resolveComponent: resolveComponent2 } = options;
  const children = node.children || [];
  const slotNodes = children.reduce((data, node2) => {
    if (!isTemplate(node2)) {
      data[DEFAULT_SLOT].children.push(node2);
      return data;
    }
    const slotName = getSlotName(node2);
    data[slotName] = data[slotName] || { props: {}, children: [] };
    if (node2.type === "element") {
      data[slotName].props = node2.props;
      data[slotName].children.push(...node2.children || []);
    }
    return data;
  }, {
    [DEFAULT_SLOT]: { props: {}, children: [] }
  });
  const slots = Object.entries(slotNodes).reduce((slots2, [name, { props, children: children2 }]) => {
    if (!children2.length) {
      return slots2;
    }
    slots2[name] = (data = {}) => {
      const scopedProps = pick(data, Object.keys(props || {}));
      let vNodes = children2.map((child) => _renderNode(
        child,
        h2,
        {
          documentMeta,
          parentScope: { ...parentScope, ...scopedProps },
          resolveComponent: resolveComponent2
        }
      ));
      if (props == null ? void 0 : props.unwrap) {
        vNodes = flatUnwrap(vNodes, props.unwrap);
      }
      return mergeTextNodes(vNodes);
    };
    return slots2;
  }, {});
  return slots;
}
function renderBinding(node, h2, documentMeta, parentScope = {}) {
  var _a, _b;
  const data = {
    ...documentMeta.runtimeData,
    ...parentScope,
    $document: documentMeta,
    $doc: documentMeta
  };
  const splitter = /\.|\[(\d+)\]/;
  const keys = (_a = node.props) == null ? void 0 : _a.value.trim().split(splitter).filter(Boolean);
  const value = keys.reduce((data2, key) => {
    if (data2 && key in data2) {
      if (typeof data2[key] === "function") {
        return data2[key]();
      } else {
        return data2[key];
      }
    }
    return void 0;
  }, data);
  const defaultValue = (_b = node.props) == null ? void 0 : _b.defaultValue;
  return h2(Text, value ?? defaultValue ?? "");
}
function propsToData(node, documentMeta) {
  const { tag = "", props = {} } = node;
  return Object.keys(props).reduce(function(data, key) {
    if (key === "__ignoreMap") {
      return data;
    }
    const value = props[key];
    if (rxModel.test(key)) {
      return propsToDataRxModel(key, value, data, documentMeta, { native: nativeInputs.includes(tag) });
    }
    if (key === "v-bind") {
      return propsToDataVBind(key, value, data, documentMeta);
    }
    if (rxOn.test(key)) {
      return propsToDataRxOn(key, value, data, documentMeta);
    }
    if (rxBind.test(key)) {
      return propsToDataRxBind(key, value, data, documentMeta);
    }
    const { attribute } = find(html$1, key);
    if (Array.isArray(value) && value.every((v) => typeof v === "string")) {
      data[attribute] = value.join(" ");
      return data;
    }
    data[attribute] = value;
    return data;
  }, {});
}
function propsToDataRxModel(key, value, data, documentMeta, { native }) {
  var _a;
  const propName = ((_a = key.match(/^v-model:([^=]+)/)) == null ? void 0 : _a[1]) || "modelValue";
  const field = native ? "value" : propName;
  const event = native ? "onInput" : `onUpdate:${propName}`;
  data[field] = evalInContext(value, documentMeta.runtimeData);
  data[event] = (e) => {
    var _a2;
    documentMeta.updateRuntimeData(value, native ? (_a2 = e.target) == null ? void 0 : _a2.value : e);
  };
  return data;
}
function propsToDataVBind(_key, value, data, documentMeta) {
  const val = evalInContext(value, documentMeta);
  data = Object.assign(data, val);
  return data;
}
function propsToDataRxOn(key, value, data, documentMeta) {
  key = key.replace(rxOn, "");
  data.on = data.on || {};
  data.on[key] = () => evalInContext(value, documentMeta);
  return data;
}
function propsToDataRxBind(key, value, data, documentMeta) {
  key = key.replace(rxBind, "");
  data[key] = evalInContext(value, documentMeta);
  return data;
}
const resolveComponentInstance = (component) => {
  if (typeof component === "string") {
    if (htmlTags.includes(component)) {
      return component;
    }
    const _component = resolveComponent(pascalCase(component), false);
    if (!component || (_component == null ? void 0 : _component.name) === "AsyncComponentWrapper") {
      return _component;
    }
    if (typeof _component === "string") {
      return _component;
    }
    if ("setup" in _component) {
      return defineAsyncComponent(() => new Promise((resolve) => resolve(_component)));
    }
    return _component;
  }
  return component;
};
function evalInContext(code2, context) {
  const result = code2.split(".").reduce((o, k) => typeof o === "object" ? o[k] : void 0, context);
  return typeof result === "undefined" ? destr(code2) : result;
}
function getSlotName(node) {
  let name = "";
  for (const propName of Object.keys(node.props || {})) {
    if (!propName.startsWith("#") && !propName.startsWith("v-slot:")) {
      continue;
    }
    name = propName.split(/[:#]/, 2)[1];
    break;
  }
  return name || DEFAULT_SLOT;
}
function isTemplate(node) {
  return node.tag === "template";
}
function isUnresolvableTag(tag) {
  return specialParentTags.includes(tag);
}
function mergeTextNodes(nodes) {
  const mergedNodes = [];
  for (const node of nodes) {
    const previousNode = mergedNodes[mergedNodes.length - 1];
    if (node.type === Text && (previousNode == null ? void 0 : previousNode.type) === Text) {
      previousNode.children = previousNode.children + node.children;
    } else {
      mergedNodes.push(node);
    }
  }
  return mergedNodes;
}
async function resolveContentComponents(body, meta) {
  if (!body) {
    return;
  }
  const components = Array.from(new Set(loadComponents(body, meta)));
  await Promise.all(components.map(async (c) => {
    if ((c == null ? void 0 : c.render) || (c == null ? void 0 : c.ssrRender) || (c == null ? void 0 : c.__ssrInlineRender)) {
      return;
    }
    const resolvedComponent = resolveComponentInstance(c);
    if ((resolvedComponent == null ? void 0 : resolvedComponent.__asyncLoader) && !resolvedComponent.__asyncResolved) {
      await resolvedComponent.__asyncLoader();
    }
  }));
  function loadComponents(node, documentMeta) {
    const tag = node.tag;
    if (node.type === "text" || tag === "binding" || node.type === "comment") {
      return [];
    }
    const renderTag = findMappedTag(node, documentMeta.tags);
    if (isUnresolvableTag(renderTag)) {
      return [];
    }
    const components2 = [];
    if (node.type !== "root" && !htmlTags.includes(renderTag)) {
      components2.push(renderTag);
    }
    for (const child of node.children || []) {
      components2.push(...loadComponents(child, documentMeta));
    }
    return components2;
  }
}
function findMappedTag(node, tags) {
  var _a;
  const tag = node.tag;
  if (!tag || typeof ((_a = node.props) == null ? void 0 : _a.__ignoreMap) !== "undefined") {
    return tag;
  }
  return tags[tag] || tags[pascalCase(tag)] || tags[kebabCase(node.tag)] || tag;
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxtjs+mdc@0.16.1_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$2 = Object.assign(_sfc_main$3, { __name: "MDCRenderer" });
const useProcessorPlugins = async (processor, plugins = {}) => {
  const toUse = Object.entries(plugins).filter((p) => p[1] !== false);
  for (const plugin of toUse) {
    const instance = plugin[1].instance || await import(
      /* @vite-ignore */
      plugin[0]
    ).then((m) => m.default || m);
    processor.use(instance, plugin[1].options);
  }
};
function emphasis(state, node) {
  const result = {
    type: "element",
    tagName: "em",
    properties: node.attributes || {},
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}
function parseThematicBlock(lang) {
  if (!(lang == null ? void 0 : lang.trim())) {
    return {
      language: void 0,
      highlights: void 0,
      filename: void 0,
      meta: void 0
    };
  }
  const languageMatches = lang.replace(/[{|[](.+)/, "").match(/^[^ \t]+(?=[ \t]|$)/);
  const highlightTokensMatches = lang.match(/\{([^}]*)\}/);
  const filenameMatches = lang.match(/\[((\\\]|[^\]])*)\]/);
  const meta = lang.replace((languageMatches == null ? void 0 : languageMatches[0]) ?? "", "").replace((highlightTokensMatches == null ? void 0 : highlightTokensMatches[0]) ?? "", "").replace((filenameMatches == null ? void 0 : filenameMatches[0]) ?? "", "").trim();
  return {
    language: (languageMatches == null ? void 0 : languageMatches[0]) || void 0,
    highlights: parseHighlightedLines((highlightTokensMatches == null ? void 0 : highlightTokensMatches[1]) || void 0),
    // https://github.com/nuxt/content/pull/2169
    filename: (filenameMatches == null ? void 0 : filenameMatches[1].replace(/\\\]/g, "]")) || void 0,
    meta
  };
}
function parseHighlightedLines(lines) {
  const lineArray = String(lines || "").split(",").filter(Boolean).flatMap((line) => {
    const [start, end] = line.trim().split("-").map((a) => Number(a.trim()));
    return Array.from({ length: (end || start) - start + 1 }).map((_, i) => start + i);
  });
  return lineArray.length ? lineArray : void 0;
}
const TAG_NAME_REGEXP = /^<\/?([\w-]+)(\s[^>]*?)?\/?>/;
function getTagName(value) {
  const result = String(value).match(TAG_NAME_REGEXP);
  return result && result[1];
}
const code = (state, node) => {
  const lang = (node.lang || "") + " " + (node.meta || "");
  const { language = "text", highlights, filename, meta } = parseThematicBlock(lang);
  const value = node.value ? detab(node.value + "\n") : "";
  let result = {
    type: "element",
    tagName: "code",
    properties: { __ignoreMap: "" },
    children: [{ type: "text", value }]
  };
  if (meta) {
    result.data = {
      meta
    };
  }
  state.patch(node, result);
  result = state.applyData(node, result);
  const properties = {
    language: language || "text",
    filename,
    highlights,
    meta,
    code: value
  };
  if (language) {
    properties.className = ["language-" + language];
  }
  result = { type: "element", tagName: "pre", properties, children: [result] };
  state.patch(node, result);
  return result;
};
function html(state, node) {
  var _a;
  const tagName = getTagName(node.value);
  if (tagName && /[A-Z]/.test(tagName)) {
    node.value = node.value.replace(tagName, kebabCase(tagName));
  }
  if (state.dangerous || ((_a = state.options) == null ? void 0 : _a.allowDangerousHtml)) {
    const result = { type: "raw", value: node.value };
    state.patch(node, result);
    return state.applyData(node, result);
  }
  return void 0;
}
function link(state, node) {
  const properties = {
    ...node.attributes || {},
    href: normalizeUri(node.url)
  };
  if (node.title !== null && node.title !== void 0) {
    properties.title = node.title;
  }
  const result = {
    type: "element",
    tagName: "a",
    properties,
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}
function list(state, node) {
  const properties = {};
  const results = state.all(node);
  let index = -1;
  if (typeof node.start === "number" && node.start !== 1) {
    properties.start = node.start;
  }
  while (++index < results.length) {
    const child = results[index];
    if (child.type === "element" && child.tagName === "li" && child.properties && Array.isArray(child.properties.className) && child.properties.className.includes("task-list-item")) {
      properties.className = ["contains-task-list"];
      break;
    }
  }
  if ((node.children || []).some((child) => typeof child.checked === "boolean")) {
    properties.className = ["contains-task-list"];
  }
  const result = {
    type: "element",
    tagName: node.ordered ? "ol" : "ul",
    properties,
    children: state.wrap(results, true)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}
function paragraph(state, node) {
  if (node.children && node.children[0] && node.children[0].type === "html") {
    const tagName = kebabCase(getTagName(node.children[0].value) || "div");
    if (!htmlTags.includes(tagName)) {
      return state.all(node);
    }
  }
  const result = {
    type: "element",
    tagName: "p",
    properties: {},
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}
function image(state, node) {
  const properties = { ...node.attributes, src: normalizeUri(node.url) };
  if (node.alt !== null && node.alt !== void 0) {
    properties.alt = node.alt;
  }
  if (node.title !== null && node.title !== void 0) {
    properties.title = node.title;
  }
  const result = { type: "element", tagName: "img", properties, children: [] };
  state.patch(node, result);
  return state.applyData(node, result);
}
function strong(state, node) {
  const result = {
    type: "element",
    tagName: "strong",
    properties: node.attributes || {},
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}
function inlineCode(state, node) {
  var _a, _b;
  const language = ((_a = node.attributes) == null ? void 0 : _a.language) || ((_b = node.attributes) == null ? void 0 : _b.lang);
  const text = { type: "text", value: node.value.replace(/\r?\n|\r/g, " ") };
  state.patch(node, text);
  const result = {
    type: "element",
    tagName: "code",
    properties: node.attributes || {},
    children: [text]
  };
  const classes = (result.properties.class || "").split(" ");
  delete result.properties.class;
  if (language) {
    result.properties.language = language;
    delete result.properties.lang;
    classes.push("language-" + language);
  }
  result.properties.className = classes.join(" ");
  state.patch(node, result);
  return state.applyData(node, result);
}
function containerComponent(state, node) {
  var _a;
  const result = {
    type: "element",
    tagName: node.name,
    properties: {
      ...node.attributes,
      ...(_a = node.data) == null ? void 0 : _a.hProperties
    },
    children: state.all(node)
  };
  state.patch(node, result);
  result.attributes = node.attributes;
  result.fmAttributes = node.fmAttributes;
  return result;
}
const handlers = {
  emphasis,
  code,
  link,
  paragraph,
  html,
  list,
  image,
  strong,
  inlineCode,
  containerComponent
};
const defaults = {
  remark: {
    plugins: {
      "remark-mdc": {
        instance: remarkMDC
      },
      "remark-gfm": {
        instance: remarkGFM
      }
    }
  },
  rehype: {
    options: {
      handlers,
      allowDangerousHtml: true
    },
    plugins: {
      "rehype-external-links": {
        instance: rehypeExternalLinks
      },
      "rehype-sort-attribute-values": {
        instance: rehypeSortAttributeValues
      },
      "rehype-sort-attributes": {
        instance: rehypeSortAttributes
      },
      "rehype-raw": {
        instance: rehypeRaw,
        options: {
          passThrough: ["element"]
        }
      }
    }
  },
  highlight: false,
  toc: {
    searchDepth: 2,
    depth: 2
  }
};
function flattenNodeText(node) {
  if (node.type === "comment") {
    return "";
  }
  if (node.type === "text") {
    return node.value || "";
  } else {
    return (node.children || []).reduce((text, child) => {
      return text.concat(flattenNodeText(child));
    }, "");
  }
}
function flattenNode(node, maxDepth = 2, _depth = 0) {
  if (!Array.isArray(node.children) || _depth === maxDepth) {
    return [node];
  }
  return [
    node,
    ...node.children.reduce((acc, child) => acc.concat(flattenNode(child, maxDepth, _depth + 1)), [])
  ];
}
const TOC_TAGS = ["h2", "h3", "h4", "h5", "h6"];
const TOC_TAGS_DEPTH = TOC_TAGS.reduce((tags, tag) => {
  tags[tag] = Number(tag.charAt(tag.length - 1));
  return tags;
}, {});
const getHeaderDepth = (node) => TOC_TAGS_DEPTH[node.tag];
const getTocTags = (depth) => {
  if (depth < 1 || depth > 5) {
    console.log(`\`toc.depth\` is set to ${depth}. It should be a number between 1 and 5. `);
    depth = 1;
  }
  return TOC_TAGS.slice(0, depth);
};
function nestHeaders(headers) {
  if (headers.length <= 1) {
    return headers;
  }
  const toc = [];
  let parent;
  headers.forEach((header) => {
    if (!parent || header.depth <= parent.depth) {
      header.children = [];
      parent = header;
      toc.push(header);
    } else {
      parent.children.push(header);
    }
  });
  toc.forEach((header) => {
    var _a;
    if ((_a = header.children) == null ? void 0 : _a.length) {
      header.children = nestHeaders(header.children);
    } else {
      delete header.children;
    }
  });
  return toc;
}
function generateFlatToc(body, options) {
  const { searchDepth, depth, title = "" } = options;
  const tags = getTocTags(depth);
  const headers = flattenNode(body, searchDepth).filter((node) => tags.includes(node.tag || ""));
  const links = headers.map((node) => {
    var _a;
    return {
      id: (_a = node.props) == null ? void 0 : _a.id,
      depth: getHeaderDepth(node),
      text: flattenNodeText(node)
    };
  });
  return {
    title,
    searchDepth,
    depth,
    links
  };
}
function generateToc(body, options) {
  const toc = generateFlatToc(body, options);
  toc.links = nestHeaders(toc.links);
  return toc;
}
const unsafeLinkPrefix = [
  "javascript:",
  "data:text/html",
  "vbscript:",
  "data:text/javascript",
  "data:text/vbscript",
  "data:text/css",
  "data:text/plain",
  "data:text/xml"
];
function isAnchorLinkAllowed(value) {
  const decodedUrl = decodeURIComponent(value);
  const urlSanitized = decodedUrl.replace(/&#x([0-9a-f]+);?/gi, "").replace(/&#(\d+);?/g, "").replace(/&[a-z]+;?/gi, "");
  try {
    const url = new URL(urlSanitized, "http://example.com");
    if (url.origin === "http://example.com") {
      return true;
    }
    if (unsafeLinkPrefix.some((prefix) => url.protocol.toLowerCase().startsWith(prefix))) {
      return false;
    }
  } catch {
    return false;
  }
  return true;
}
const validateProp = (attribute, value) => {
  if (attribute.startsWith("on")) {
    return false;
  }
  if (attribute === "href" || attribute === "src") {
    return isAnchorLinkAllowed(value);
  }
  return true;
};
const validateProps = (type, props) => {
  if (!props) {
    return {};
  }
  props = Object.fromEntries(
    Object.entries(props).filter(([name, value]) => {
      const isValid = validateProp(name, value);
      if (!isValid) {
        console.warn(`[@nuxtjs/mdc] removing unsafe attribute: ${name}="${value}"`);
      }
      return isValid;
    })
  );
  if (type === "pre") {
    if (typeof props.highlights === "string") {
      props.highlights = props.highlights.split(" ").map((i) => Number.parseInt(i));
    }
  }
  return props;
};
function compileHast(options = {}) {
  const slugs = new Slugger();
  function compileToJSON(node, parent) {
    var _a, _b, _c, _d, _e;
    if (node.type === "root") {
      return {
        type: "root",
        children: node.children.map((child) => compileToJSON(child, node)).filter(Boolean)
      };
    }
    if (node.type === "element") {
      if (node.tagName === "p" && node.children.every((child) => child.type === "text" && /^\s*$/.test(child.value))) {
        return null;
      }
      if (node.tagName === "li") {
        let hasPreviousParagraph = false;
        node.children = (_a = node.children) == null ? void 0 : _a.flatMap((child) => {
          if (child.type === "element" && child.tagName === "p") {
            if (hasPreviousParagraph) {
              child.children.unshift({
                type: "element",
                tagName: "br",
                properties: {},
                children: []
              });
            }
            hasPreviousParagraph = true;
            return child.children;
          }
          return child;
        });
      }
      if ((_b = node.tagName) == null ? void 0 : _b.match(/^h\d$/)) {
        node.properties = node.properties || {};
        node.properties.id = String(((_c = node.properties) == null ? void 0 : _c.id) || slugs.slug(toString(node))).replace(/-+/g, "-").replace(/^-|-$/g, "").replace(/^(\d)/, "_$1");
      }
      if (node.tagName === "component-slot") {
        node.tagName = "template";
      }
      const children = (node.tagName === "template" && ((_d = node.content) == null ? void 0 : _d.children.length) ? node.content.children : node.children).map((child) => compileToJSON(child, node)).filter(Boolean);
      return {
        type: "element",
        tag: node.tagName,
        props: validateProps(node.tagName, node.properties),
        children
      };
    }
    if (node.type === "text") {
      if (!/^\n+$/.test(node.value || "") || ((_e = parent == null ? void 0 : parent.properties) == null ? void 0 : _e.emptyLinePlaceholder)) {
        return {
          type: "text",
          value: node.value
        };
      }
    }
    if (options.keepComments && node.type === "comment") {
      return {
        type: "comment",
        value: node.value
      };
    }
    return null;
  }
  this.Compiler = (tree) => {
    const body = compileToJSON(tree);
    let excerpt = void 0;
    const excerptIndex = tree.children.findIndex((node) => {
      var _a;
      return node.type === "comment" && ((_a = node.value) == null ? void 0 : _a.trim()) === "more";
    });
    if (excerptIndex !== -1) {
      excerpt = compileToJSON({
        type: "root",
        children: tree.children.slice(0, excerptIndex)
      });
      if (excerpt.children.find((node) => node.type === "element" && node.tag === "pre")) {
        const lastChild = body.children[body.children.length - 1];
        if (lastChild.type === "element" && lastChild.tag === "style") {
          excerpt.children.push(lastChild);
        }
      }
    }
    body.children = (body.children || []).filter((child) => child.type !== "text");
    return {
      body,
      excerpt
    };
  };
}
let moduleOptions;
let generatedMdcConfigs;
const createParseProcessor = async (inlineOptions = {}) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
  if (!moduleOptions) {
    moduleOptions = await import(
      './virtual_nuxt_C__dev_nuxt-chat_node_modules_.cache_nuxt_.nuxt_mdc-imports-DoHmqGlY.mjs'
      /* @vite-ignore */
    ).catch(() => ({}));
  }
  if (!generatedMdcConfigs) {
    generatedMdcConfigs = await import(
      './virtual_nuxt_C__dev_nuxt-chat_node_modules_.cache_nuxt_.nuxt_mdc-configs-D-mPnyQ5.mjs'
      /* @vite-ignore */
    ).then((r) => r.getMdcConfigs()).catch(() => []);
  }
  const mdcConfigs = [
    ...generatedMdcConfigs || [],
    ...inlineOptions.configs || []
  ];
  if (inlineOptions.highlight != null && inlineOptions.highlight != false && inlineOptions.highlight.highlighter !== void 0 && typeof inlineOptions.highlight.highlighter !== "function") {
    inlineOptions = {
      ...inlineOptions,
      highlight: {
        ...inlineOptions.highlight
      }
    };
    delete inlineOptions.highlight.highlighter;
  }
  const options = defu(inlineOptions, {
    remark: { plugins: moduleOptions == null ? void 0 : moduleOptions.remarkPlugins },
    rehype: { plugins: moduleOptions == null ? void 0 : moduleOptions.rehypePlugins },
    highlight: moduleOptions == null ? void 0 : moduleOptions.highlight
  }, defaults);
  if ((_b = (_a = options.rehype) == null ? void 0 : _a.plugins) == null ? void 0 : _b.highlight) {
    options.rehype.plugins.highlight.options = {
      ...options.rehype.plugins.highlight.options || {},
      ...options.highlight || {}
    };
  }
  let processor = unified();
  for (const config of mdcConfigs) {
    processor = await ((_d = (_c = config.unified) == null ? void 0 : _c.pre) == null ? void 0 : _d.call(_c, processor)) || processor;
  }
  processor.use(remarkParse);
  for (const config of mdcConfigs) {
    processor = await ((_f = (_e = config.unified) == null ? void 0 : _e.remark) == null ? void 0 : _f.call(_e, processor)) || processor;
  }
  await useProcessorPlugins(processor, (_g = options.remark) == null ? void 0 : _g.plugins);
  processor.use(remark2rehype, (_h = options.rehype) == null ? void 0 : _h.options);
  for (const config of mdcConfigs) {
    processor = await ((_j = (_i = config.unified) == null ? void 0 : _i.rehype) == null ? void 0 : _j.call(_i, processor)) || processor;
  }
  await useProcessorPlugins(processor, (_k = options.rehype) == null ? void 0 : _k.plugins);
  processor.use(compileHast, options);
  for (const config of mdcConfigs) {
    processor = await ((_m = (_l = config.unified) == null ? void 0 : _l.post) == null ? void 0 : _m.call(_l, processor)) || processor;
  }
  return processor;
};
const createMarkdownParser = async (inlineOptions = {}) => {
  const processor = await createParseProcessor(inlineOptions);
  return async function parse(md, { fileOptions } = {}) {
    const { content, data: frontmatter } = await parseFrontMatter(md);
    const cwd = typeof process !== "undefined" && typeof process.cwd === "function" ? process.cwd() : "/tmp";
    const processedFile = await new Promise((resolve, reject) => {
      processor.process({ cwd, ...fileOptions, value: content, data: frontmatter }, (err, file) => {
        if (err) {
          reject(err);
        } else {
          resolve(file);
        }
      });
    });
    const parsedContent = processedFile == null ? void 0 : processedFile.result;
    const data = Object.assign(
      inlineOptions.contentHeading !== false ? contentHeading(parsedContent.body) : {},
      frontmatter,
      (processedFile == null ? void 0 : processedFile.data) || {}
    );
    const parsedResult = { data, body: parsedContent.body };
    const userTocOption = data.toc ?? inlineOptions.toc;
    if (userTocOption !== false) {
      const tocOption = defu({}, userTocOption, defaults.toc);
      parsedResult.toc = generateToc(parsedContent.body, tocOption);
    }
    if (parsedContent.excerpt) {
      parsedResult.excerpt = parsedContent.excerpt;
    }
    return parsedResult;
  };
};
const parseMarkdown = async (md, markdownParserOptions = {}, parseOptions = {}) => {
  const parser = await createMarkdownParser(markdownParserOptions);
  return parser(md, parseOptions);
};
function contentHeading(body) {
  let title = "";
  let description = "";
  const children = body.children.filter((node) => node.type === "element" && node.tag !== "hr");
  if (children.length && children[0].tag === "h1") {
    const node = children.shift();
    title = nodeTextContent(node);
  }
  if (children.length && children[0].tag === "p") {
    const node = children.shift();
    description = nodeTextContent(node);
  }
  return {
    title,
    description
  };
}
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "MDC",
  __ssrInlineRender: true,
  props: {
    tag: {
      type: [String, Boolean],
      default: "div"
    },
    /**
     * Raw markdown string or parsed markdown object from `parseMarkdown`
     */
    value: {
      type: [String, Object],
      required: true
    },
    /**
     * Render only the excerpt
     */
    excerpt: {
      type: Boolean,
      default: false
    },
    /**
     * Options for `parseMarkdown`
     */
    parserOptions: {
      type: Object,
      default: () => ({})
    },
    /**
     * Class to be applied to the root element
     */
    class: {
      type: [String, Array, Object],
      default: ""
    },
    /**
     * Tags to unwrap separated by spaces
     * Example: 'ul li'
     */
    unwrap: {
      type: [Boolean, String],
      default: false
    },
    /**
     * Async Data Unique Key
     * @default `hash(props.value)`
     */
    cacheKey: {
      type: String,
      default: void 0
    },
    /**
     * Partial parsing (if partial is `true`, title and toc generation will not be generated)
     */
    partial: {
      type: Boolean,
      default: true
    }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const key = computed(() => props.cacheKey ?? hashString(props.value));
    const { data, refresh, error } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(key.value, async () => {
      var _a, _b;
      if (typeof props.value !== "string") {
        return props.value;
      }
      return await parseMarkdown(props.value, {
        ...props.parserOptions,
        toc: props.partial ? false : (_a = props.parserOptions) == null ? void 0 : _a.toc,
        contentHeading: props.partial ? false : (_b = props.parserOptions) == null ? void 0 : _b.contentHeading
      });
    }, "$q8U3_b3TsN")), __temp = await __temp, __restore(), __temp);
    const body = computed(() => {
      var _a, _b;
      return props.excerpt ? (_a = data.value) == null ? void 0 : _a.excerpt : (_b = data.value) == null ? void 0 : _b.body;
    });
    watch(() => props.value, () => {
      refresh();
    });
    function hashString(str) {
      if (typeof str !== "string") {
        str = JSON.stringify(str || "");
      }
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 6) - hash + char;
        hash = hash & hash;
      }
      return `mdc-${hash === 0 ? "0000" : hash.toString(36)}-key`;
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_MDCRenderer = __nuxt_component_0$2;
      ssrRenderSlot(_ctx.$slots, "default", {
        data: (_a = unref(data)) == null ? void 0 : _a.data,
        body: (_b = unref(data)) == null ? void 0 : _b.body,
        toc: (_c = unref(data)) == null ? void 0 : _c.toc,
        excerpt: (_d = unref(data)) == null ? void 0 : _d.excerpt,
        error: unref(error)
      }, () => {
        var _a2;
        if (body.value) {
          _push(ssrRenderComponent(_component_MDCRenderer, {
            tag: props.tag,
            class: props.class,
            body: body.value,
            data: (_a2 = unref(data)) == null ? void 0 : _a2.data,
            unwrap: props.unwrap
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/@nuxtjs+mdc@0.16.1_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/components/MDC.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0$1 = Object.assign(_sfc_main$2, { __name: "MDC" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "MarkdownRenderer",
  __ssrInlineRender: true,
  props: {
    content: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MDC = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_MDC, mergeProps({
        value: _ctx.content,
        class: "markdown-content"
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/base/app/components/MarkdownRenderer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main$1, { __name: "MarkdownRenderer" });
function useChatScroll() {
  const scrollContainer = useTemplateRef("scrollContainer");
  const textareaRef = useTemplateRef("textareaRef");
  const isAtBottom = ref(true);
  const showScrollButton = ref(false);
  const scrollToBottom = (immediate = false) => {
    if (!scrollContainer.value) return;
    const targetScrollTop = scrollContainer.value.scrollHeight - scrollContainer.value.clientHeight;
    if (immediate) {
      scrollContainer.value.scrollTop = targetScrollTop;
      return;
    }
    const startScrollTop = scrollContainer.value.scrollTop;
    const distance = targetScrollTop - startScrollTop;
    const duration = 300;
    const startTime = performance.now();
    function step(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeInOutCubic = progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      if (scrollContainer.value) {
        scrollContainer.value.scrollTop = startScrollTop + distance * easeInOutCubic;
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      }
    }
    requestAnimationFrame(step);
  };
  async function pinToBottom() {
    if (isAtBottom.value) {
      if (scrollContainer.value) {
        await new Promise((resolve) => setTimeout(resolve, 100));
        scrollContainer.value.scrollTop = scrollContainer.value.scrollHeight;
      }
    }
  }
  return {
    isAtBottom,
    showScrollButton,
    scrollToBottom,
    textareaRef,
    pinToBottom
  };
}
const __nuxt_component_5_lazy = defineAsyncComponent(() => import('./AssignToProjectModal-AYaQC6vU.mjs').then((c) => c.default || c));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ChatWindow",
  __ssrInlineRender: true,
  props: {
    messages: {},
    chat: {},
    typing: { type: Boolean }
  },
  emits: ["send-message"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { showScrollButton, scrollToBottom, pinToBottom } = useChatScroll();
    function handleSendMessage(message) {
      emit("send-message", message);
    }
    watch(() => props.messages, pinToBottom, { deep: true });
    const route = useRoute();
    const isOnProjectPage = computed(() => !!route.params.projectId);
    const isAssignModalOpen = ref(false);
    function openAssignModal() {
      isAssignModalOpen.value = true;
    }
    function closeAssignModal() {
      isAssignModalOpen.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UContainer = __nuxt_component_0$3;
      const _component_ChatInput = __nuxt_component_1;
      const _component_TypewriterText = __nuxt_component_2;
      const _component_UButton = __nuxt_component_2$1;
      const _component_MarkdownRenderer = __nuxt_component_4;
      const _component_LazyAssignToProjectModal = __nuxt_component_5_lazy;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref: "scrollContainer",
        class: "scroll-container"
      }, _attrs))} data-v-030c9785>`);
      _push(ssrRenderComponent(_component_UContainer, { class: "chat-container" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            if (!((_a = _ctx.messages) == null ? void 0 : _a.length)) {
              _push2(`<div class="empty-state" data-v-030c9785${_scopeId}><div class="empty-state-card" data-v-030c9785${_scopeId}><h2 class="empty-state-title" data-v-030c9785${_scopeId}>Start your chat</h2>`);
              _push2(ssrRenderComponent(_component_ChatInput, { onSendMessage: handleSendMessage }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<!--[--><div class="chat-header" data-v-030c9785${_scopeId}><h1 class="title" data-v-030c9785${_scopeId}>`);
              _push2(ssrRenderComponent(_component_TypewriterText, {
                text: _ctx.chat.title || "Untitled Chat"
              }, null, _parent2, _scopeId));
              _push2(`</h1>`);
              if (!unref(isOnProjectPage)) {
                _push2(ssrRenderComponent(_component_UButton, {
                  color: "neutral",
                  variant: "soft",
                  icon: "i-heroicons-folder-plus",
                  size: "sm",
                  onClick: openAssignModal
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` Assign to Project `);
                    } else {
                      return [
                        createTextVNode(" Assign to Project ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="messages-container" data-v-030c9785${_scopeId}><!--[-->`);
              ssrRenderList(_ctx.messages, (message) => {
                _push2(`<div class="${ssrRenderClass([{
                  "message-user": message.role === "user",
                  "message-ai": message.role === "assistant"
                }, "message"])}" data-v-030c9785${_scopeId}><div class="message-content" data-v-030c9785${_scopeId}>`);
                _push2(ssrRenderComponent(_component_MarkdownRenderer, {
                  content: message.content
                }, null, _parent2, _scopeId));
                _push2(`</div></div>`);
              });
              _push2(`<!--]-->`);
              if (_ctx.typing) {
                _push2(`<span class="typing-indicator" data-v-030c9785${_scopeId}> ▋ </span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="message-form-container" data-v-030c9785${_scopeId}><div class="scroll-to-bottom-button-container" data-v-030c9785${_scopeId}>`);
              if (unref(showScrollButton)) {
                _push2(ssrRenderComponent(_component_UButton, {
                  color: "neutral",
                  variant: "outline",
                  icon: "i-heroicons-arrow-down",
                  class: "rounded-full shadow-sm",
                  onClick: () => unref(scrollToBottom)()
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_ChatInput, { onSendMessage: handleSendMessage }, null, _parent2, _scopeId));
              _push2(`</div><!--]-->`);
            }
          } else {
            return [
              !((_b = _ctx.messages) == null ? void 0 : _b.length) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "empty-state"
              }, [
                createVNode("div", { class: "empty-state-card" }, [
                  createVNode("h2", { class: "empty-state-title" }, "Start your chat"),
                  createVNode(_component_ChatInput, { onSendMessage: handleSendMessage })
                ])
              ])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                createVNode("div", { class: "chat-header" }, [
                  createVNode("h1", { class: "title" }, [
                    createVNode(_component_TypewriterText, {
                      text: _ctx.chat.title || "Untitled Chat"
                    }, null, 8, ["text"])
                  ]),
                  !unref(isOnProjectPage) ? (openBlock(), createBlock(_component_UButton, {
                    key: 0,
                    color: "neutral",
                    variant: "soft",
                    icon: "i-heroicons-folder-plus",
                    size: "sm",
                    onClick: openAssignModal
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Assign to Project ")
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                createVNode("div", { class: "messages-container" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.messages, (message) => {
                    return openBlock(), createBlock("div", {
                      key: message.id,
                      class: ["message", {
                        "message-user": message.role === "user",
                        "message-ai": message.role === "assistant"
                      }]
                    }, [
                      createVNode("div", { class: "message-content" }, [
                        createVNode(_component_MarkdownRenderer, {
                          content: message.content
                        }, null, 8, ["content"])
                      ])
                    ], 2);
                  }), 128)),
                  _ctx.typing ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "typing-indicator"
                  }, " ▋ ")) : createCommentVNode("", true)
                ]),
                createVNode("div", { class: "message-form-container" }, [
                  createVNode("div", { class: "scroll-to-bottom-button-container" }, [
                    unref(showScrollButton) ? (openBlock(), createBlock(_component_UButton, {
                      key: 0,
                      color: "neutral",
                      variant: "outline",
                      icon: "i-heroicons-arrow-down",
                      class: "rounded-full shadow-sm",
                      onClick: () => unref(scrollToBottom)()
                    }, null, 8, ["onClick"])) : createCommentVNode("", true)
                  ]),
                  createVNode(_component_ChatInput, { onSendMessage: handleSendMessage })
                ])
              ], 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(isAssignModalOpen)) {
        _push(ssrRenderComponent(_component_LazyAssignToProjectModal, {
          "chat-id": _ctx.chat.id,
          onClose: closeAssignModal
        }, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/chat/app/components/ChatWindow.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-030c9785"]]), { __name: "ChatWindow" });
function useChat(chatId) {
  const { chats } = useChats();
  const chat = computed(() => chats.value.find((c) => c.id === chatId));
  const messages = computed(() => {
    var _a;
    return ((_a = chat.value) == null ? void 0 : _a.messages) || [];
  });
  const { data, execute, status } = useFetch(
    `/api/chats/${chatId}/messages`,
    {
      default: () => [],
      immediate: false
    },
    "$ykNQ4OKLjo"
  );
  async function fetchMessages({
    refresh = false
  } = {}) {
    const hasExistingMessages = messages.value.length > 1;
    const isRequestInProgress = status.value !== "idle";
    const shouldSkipDueToExistingState = !refresh && (hasExistingMessages || isRequestInProgress);
    if (shouldSkipDueToExistingState || !chat.value) {
      return;
    }
    await execute();
    chat.value.messages = data.value;
  }
  async function generateChatTitle(message) {
    if (!chat.value) return;
    const updatedChat = await $fetch(`/api/chats/${chatId}/title`, {
      method: "POST",
      body: {
        message
      }
    });
    chat.value.title = updatedChat.title;
  }
  async function sendMessage(message) {
    if (!chat.value) return;
    if (messages.value.length === 0) {
      generateChatTitle(message);
    }
    const optimisticUserMessage = {
      id: `optimistic-user-message-${Date.now()}`,
      role: "user",
      content: message,
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date()
    };
    messages.value.push(optimisticUserMessage);
    const userMessageIndex = messages.value.length - 1;
    try {
      const newMessage = await $fetch(
        `/api/chats/${chatId}/messages`,
        {
          method: "POST",
          body: {
            content: message,
            role: "user"
          }
        }
      );
      messages.value[userMessageIndex] = newMessage;
    } catch (error) {
      console.error("Error sending user message", error);
      messages.value.splice(userMessageIndex, 1);
      return;
    }
    messages.value.push({
      id: `streaming-message-${Date.now()}`,
      role: "assistant",
      content: "",
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date()
    });
    const lastMessage = messages.value[messages.value.length - 1];
    try {
      const response = await $fetch(
        `/api/chats/${chatId}/messages/stream`,
        {
          method: "POST",
          responseType: "stream",
          body: {
            messages: messages.value
          }
        }
      );
      const decodedStream = response.pipeThrough(new TextDecoderStream());
      const reader = decodedStream.getReader();
      await reader.read().then(function processText({ done, value }) {
        if (done) {
          return;
        }
        lastMessage.content += value;
        return reader.read().then(processText);
      });
    } catch (error) {
      console.error("Error streaming message:", error);
    } finally {
      await fetchMessages({ refresh: true });
    }
    chat.value.updatedAt = /* @__PURE__ */ new Date();
  }
  async function assignToProject(projectId) {
    if (!chat.value) return;
    const originalProjectId = chat.value.projectId;
    chat.value.projectId = projectId || void 0;
    try {
      const updatedChat = await $fetch(`/api/chats/${chatId}`, {
        method: "PUT",
        body: {
          projectId
        }
      });
      const chatIndex = chats.value.findIndex((c) => c.id === chatId);
      if (chatIndex !== -1 && chats.value[chatIndex]) {
        chats.value[chatIndex].projectId = updatedChat.projectId;
        chats.value[chatIndex].updatedAt = updatedChat.updatedAt;
      }
    } catch (error) {
      console.error("Error assigning chat to project", error);
      chat.value.projectId = originalProjectId;
      throw error;
    }
  }
  return {
    chat,
    messages,
    sendMessage,
    fetchMessages,
    assignToProject
  };
}

export { __nuxt_component_0 as _, useChat as u };
//# sourceMappingURL=useChat-CtF4dprj.mjs.map
