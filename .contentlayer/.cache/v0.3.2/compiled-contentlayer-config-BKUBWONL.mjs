// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
}));
var contentlayer_config_default = makeSource({
  documentTypes: [Post],
  filePathPattern: "posts/*.mdx",
  fields: {},
});
export { Post, contentlayer_config_default as default };
//# sourceMappingURL=compiled-contentlayer-config-BKUBWONL.mjs.map
