// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  filePathPattern: "posts/*.mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string",
      required: true
    }
  },
  computedFields: {
    // slug: {
    //   type: "string",
    //   resolve: (post) =>
    //     post._raw.sourceFileName
    //       // hello-world.mdx => hello-world
    //       .replace(/\.mdx$/, ""),
    // },
    slug: {
      type: "string",
      resolve: (doc) => `${doc._raw.sourceFileName}`
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Post]
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-ETKEIBY2.mjs.map
