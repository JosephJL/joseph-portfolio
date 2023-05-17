import { allPosts, type Post } from "contentlayer/generated";
import Link from "next/link";
import img from "../../../public/img/joseph.jpg";

function ArticleCard(post: Post) {
  const { slug, title, tags, description } = post;
  return (
    <div key={slug}>
      <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <a href={`posts/${slug}`}>{title}</a>
        </h2>
        <p className="m-1 text-sm text-gray-900 dark:text-white">
          {tags
            ? tags.map((tag, index) => {
                return (
                  <span
                    className="mr-2 rounded border border-blue-500 bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-400 dark:text-white"
                    key={index}
                  >
                    {tag}{" "}
                  </span>
                );
              })
            : ""}
        </p>
        <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              className="h-7 w-7 rounded-full"
              src={img.src}
              alt="Jese Leos avatar"
            />
            <span className="font-medium dark:text-white">Joseph</span>
          </div>
          <Link
            href={`posts/${slug}`}
            className="text-primary-600 dark:text-primary-500 inline-flex items-center font-medium hover:underline"
          >
            Read more
            <svg
              className="ml-2 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </article>
    </div>
  );
}

export default function PostListPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-[#001440]">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-4 lg:px-64 lg:py-8">
        <div className="mx-auto max-w-screen-xl py-2 lg:px-6">
          <div className="mx-auto mb-8 max-w-screen-sm text-center lg:mb-16">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white lg:text-4xl">
              Posts
            </h2>
            <p className="font-light text-gray-500 dark:text-gray-400 sm:text-xl">
              Documenting bits and bobs of my experience
            </p>
            <p className="font-light text-gray-500 dark:text-gray-400 sm:text-sm">
              I&apos;ve included tags for each of my bobs to help you navigate
              the pieces
            </p>
            <div className="mt-4 grid justify-items-start rounded-lg border border-gray-200 bg-white p-2 shadow-md dark:border-gray-700 dark:bg-gray-800 ">
              <p>
                {" "}
                <span className="mr-2 rounded border border-blue-500 bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-400 dark:text-white">
                  Resource
                </span>{" "}
                Aggregated pool of links, articles that helped me jumpstart my
                projects .
              </p>
              <p>
                {" "}
                <span className="mr-2 rounded border border-blue-500 bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-400 dark:text-white">
                  Personal
                </span>{" "}
                Bits of my life for you to get to know me better .
              </p>
            </div>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {allPosts.map((post, i) => (
              <ArticleCard key={i} {...post}></ArticleCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
