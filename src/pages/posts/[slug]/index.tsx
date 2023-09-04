import { type GetStaticProps, type InferGetStaticPropsType } from "next";

import { notFound } from "next/navigation";
import { Article, WithContext } from "schema-dts";

import { allPosts, type Post } from "contentlayer/generated";

import { format, parseISO } from "date-fns";
import { useMDXComponent } from "next-contentlayer/hooks";
import MDXComponents from "../../../components/mdx/mdxcomponents";
import Comment from "./comment";
import Header from "./header";

export const getStaticPaths = () => {
  return {
    paths: allPosts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  post: Post;
}> = ({ params }) => {
  const post = allPosts.find((post) => post.slug === params?.slug);

  if (!post) {
    return { notFound: true };
  }

  return { props: { post } };
};

type post = {
  readingTime: {
    type: "json";
    text: string;
  };
};

type readingTime = {
  text: string;
};

const PostsPage = ({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!post) {
    notFound();
  }

  const postFormatted: post = post;
  const readingTime: readingTime = postFormatted.readingTime;
  const MDXComponent = useMDXComponent(post.body.code);

  const { title, description } = post;
  <div></div>;
  const jsonLd: WithContext<Article> = {
    "@context": "https://schema.org",
    "@type": "Article",

    headline: title,
    description: description,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Main Content */}
      <div className="flex min-h-screen flex-col justify-items-start bg-white px-4 dark:bg-[#001440] md:px-32 lg:px-64 xl:px-[25%] ">
        <Header
          title={post.title}
          readingTime={readingTime.text}
          date={post.publishedAt}
        />
        {/* <Content slug={post.slug} post={post} /> */}
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
        <Comment />
      </div>
    </>
  );
};

export default PostsPage;
