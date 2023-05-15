import { Post } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { parseISO, format } from "date-fns";

import MDXComponents from "../../../components/mdx/mdxcomponents";

type ContentProps = {
  slug: string;
  post: Post;
};

const Content = (props: ContentProps) => {
  const { post, slug } = props;

  const MDXComponent = useMDXComponent(post.body.code);

  return (
    <>
      <article className="leadsing-8 prose w-full max-w-none text-left text-base tracking-tight dark:prose-invert">
        <div className="flex w-52 items-center gap-1 rounded-md py-2 text-sm">
          Updated {format(parseISO(post.lastUpdatedAt), "MMM dd, yyyy")}
        </div>

        <MDXComponent
          components={{
            ...MDXComponents,
          }}
        />
      </article>
    </>
  );
};

export default Content;
