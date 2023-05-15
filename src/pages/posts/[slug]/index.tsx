import { type GetStaticProps, type InferGetStaticPropsType } from "next";

import { notFound } from "next/navigation";
import { Article, WithContext } from "schema-dts";

import { allPosts, type Post } from "contentlayer/generated";

import Header from "./header";
import Content from "./content";
import Comment from "./comment";

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
      <div className="flex min-h-screen flex-col justify-items-start bg-white px-4 dark:bg-[#0b1a61] md:px-16 lg:px-64 ">
        <Header
          title={post.title}
          readingTime={readingTime.text}
          date={post.publishedAt}
        />
        <Content slug={post.slug} post={post} />
        <Comment />
      </div>
    </>
  );
};

export default PostsPage;
