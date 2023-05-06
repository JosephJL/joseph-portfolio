// import { type NextPage } from "next";
import Head from "next/head";
// import Link from "next/link";
import { useSession } from "next-auth/react";
// import { signIn, signOut, useSession } from "next-auth/react";

// import { api } from "~/utils/api";
// import Todos from "~/component/Todos";
// import CreateTodo from "~/component/CreateTodo";
import img from "../../public/img/joseph.jpg";
import Projects from "~/component/Projects";
import Navbar from "~/component/Navbar";

function Home() {
  const { data: sessionData } = useSession();
  console.log(sessionData);
  return (
    <>
      <Head>
        <title>Joseph</title>
        <meta name="description" content="Joseph Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#0021b5] to-[#15162c]"> */}
      <main className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-[#0b1a61]">
        <Navbar />
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-4 lg:px-64 lg:py-16">
          {/* {sessionData && (
            <div className="grid grid-cols-1 gap-4 md:gap-8">
              <div className="flex flex-col gap-4 rounded-xl bg-white/10 p-4 dark:text-white text-gray-900">
                <h3 className="text-xl font-bold">Todos</h3>
                <Todos />
                <CreateTodo />
              </div>
            </div>
          )}
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl dark:text-white text-gray-900">
              {sessionData && (
                <span> Logged in as {sessionData.user?.email} </span>
              )}
            </p>
            <button
              className="bg-blue-700 dark:text-white text-gray-900 hover:bg-blue-800 focus:outline focus:ring-4"
              onClick={sessionData ? () => void signOut() : () => void signIn()}
            >
              {sessionData ? "Sign out" : "Sign in"}
            </button>
          </div> */}

          <div className="flex flex-col items-center justify-center">
            <h3 className="animate-typing overflow-hidden whitespace-nowrap font-mono text-xl font-bold text-gray-900 dark:text-white">
              Hi, I&apos;m Joseph.
            </h3>
            <img
              className="mt-12 h-48 w-auto rounded-full"
              src={img.src}
              alt="Joseph Image Here"
            />
            <p className="m-4 w-full text-center text-gray-900 dark:text-white sm:mx-24 sm:mt-12">
              I enjoy seeing the products of{" "}
              <span className="hover:text-xl">experimentation</span> and{" "}
              <span className="hover:text-xl">iteration</span> come to life in
              the projects that I work on. I also have a strong passion for
              giving back to the community especially sharing on the challenges
              faced during projects.
            </p>
          </div>
          <div className="flex w-full items-center justify-start justify-center text-left text-center">
            <hr className="my-8 h-1 w-full rounded border-0 bg-gray-900 dark:bg-gray-200"></hr>
            <div className="absolute left-1/2 -translate-x-1/2 bg-white px-4 dark:bg-[#0b1a61]">
              <p className="text-xl font-bold text-gray-900 dark:text-white">
                Projects I&apos;ve worked on
              </p>
            </div>
          </div>
          <Projects />
          {/* <div className="lg:grid-cols grid md:grid-cols-2">
            <div className="flex min-h-full w-full items-center justify-center p-8">
              <div className="flex h-auto w-full flex-col items-start justify-start overflow-hidden rounded-lg border shadow-lg dark:border-gray-800">
                <div className="relative flex w-full items-center justify-center border-b dark:border-gray-800">
                  <img
                    alt="Forest"
                    src="https://source.unsplash.com/1200x630/?forest"
                    width="1200"
                    height="630"
                    className={`h-auto w-full transition-opacity duration-200 ${
                      loading ? "opacity-0" : "opacity-100"
                    }`}
                    onLoad={() => {
                      setLoading(false);
                    }}
                  />
                  {loading && (
                    <div className="absolute left-0 top-0 h-full w-full animate-pulse bg-gray-100 dark:bg-gray-900" />
                  )}
                </div>
                <div className="w-full border-b p-4 dark:border-gray-800">
                  <span className="text-xl dark:text-white text-gray-900">Lorem Ipsum</span>
                  <p className="py-1 text-sm dark:text-white text-gray-900">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce sed est viverra ex tincidunt vehicula. Donec
                    pellentesque diam sit amet mi ullamcorper, ac finibus lorem
                    scelerisque.
                  </p>
                </div>
                <div className="flex w-full flex-row-reverse items-center justify-start p-4">
                  <button
                    type="button"
                    className="rounded-lg bg-gray-800 px-4 py-2 dark:text-white text-gray-900 hover:bg-gray-700 active:bg-gray-600"
                  >
                    Action
                  </button>
                </div>
              </div>
            </div>
            <div className="flex min-h-full w-full items-center justify-center p-8">
              <div className="flex h-auto w-full flex-col items-start justify-start overflow-hidden rounded-lg border shadow-lg dark:border-gray-800">
                <div className="relative flex w-full items-center justify-center border-b dark:border-gray-800">
                  <img
                    alt="Forest"
                    src="https://source.unsplash.com/1200x630/?forest"
                    width="1200"
                    height="630"
                    className={`h-auto w-full transition-opacity duration-200 ${
                      loading ? "opacity-0" : "opacity-100"
                    }`}
                    onLoad={() => {
                      setLoading(false);
                    }}
                  />
                  {loading && (
                    <div className="absolute left-0 top-0 h-full w-full animate-pulse bg-gray-100 dark:bg-gray-900" />
                  )}
                </div>
                <div className="w-full border-b p-4 dark:border-gray-800">
                  <span className="text-xl dark:text-white text-gray-900">Lorem Ipsum</span>
                  <p className="py-1 text-sm dark:text-white text-gray-900">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce sed est viverra ex tincidunt vehicula. Donec
                    pellentesque diam sit amet mi ullamcorper, ac finibus lorem
                    scelerisque.
                  </p>
                </div>
                <div className="flex w-full flex-row-reverse items-center justify-start p-4">
                  <button
                    type="button"
                    className="rounded-lg bg-gray-800 px-4 py-2 dark:text-white text-gray-900 hover:bg-gray-700 active:bg-gray-600"
                  >
                    Action
                  </button>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </main>
    </>
  );
}

export default Home;
