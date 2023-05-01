import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "~/utils/api";
import Todos from "~/component/Todos";
import CreateTodo from "~/component/CreateTodo";
import img from "../../public/img/joseph.jpg";
import Projects from "~/component/Projects";

function Home() {
  const { data: sessionData } = useSession();

  return (
    <>
      <Head>
        <title>Joseph</title>
        <meta name="description" content="Joseph Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#0021b5] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          {/* {sessionData && (
            <div className="grid grid-cols-1 gap-4 md:gap-8">
              <div className="flex flex-col gap-4 rounded-xl bg-white/10 p-4 text-white">
                <h3 className="text-xl font-bold">Todos</h3>
                <Todos />
                <CreateTodo />
              </div>
            </div>
          )}
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl text-white">
              {sessionData && (
                <span> Logged in as {sessionData.user?.email} </span>
              )}
            </p>
            <button
              className="bg-blue-700 text-white hover:bg-blue-800 focus:outline focus:ring-4"
              onClick={sessionData ? () => void signOut() : () => void signIn()}
            >
              {sessionData ? "Sign out" : "Sign in"}
            </button>
          </div> */}
          <div className="flex flex-col items-center justify-center">
            <h3 className="animate-typing overflow-hidden whitespace-nowrap font-mono text-xl font-bold text-white">
              Hi, I'm Joseph.
            </h3>
            <img
              className="mt-12 h-48 w-auto rounded-full"
              src={img.src}
              alt="Joseph Image Here"
            />
            <p className="mx-24 mt-12 text-center text-white">
              Enjoy seeing the products of experimentation and iteration come to
              life in the projects that I work on. I also have a strong passion
              for giving back to the community especially sharing on the
              challenges faced during projects.
            </p>
          </div>
          <div className="w-full items-center justify-center text-center lg:flex lg:justify-start lg:text-left">
            <h3 className="font-bold text-white">Projects I've worked on</h3>
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
                  <span className="text-xl text-white">Lorem Ipsum</span>
                  <p className="py-1 text-sm text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce sed est viverra ex tincidunt vehicula. Donec
                    pellentesque diam sit amet mi ullamcorper, ac finibus lorem
                    scelerisque.
                  </p>
                </div>
                <div className="flex w-full flex-row-reverse items-center justify-start p-4">
                  <button
                    type="button"
                    className="rounded-lg bg-gray-800 px-4 py-2 text-white hover:bg-gray-700 active:bg-gray-600"
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
                  <span className="text-xl text-white">Lorem Ipsum</span>
                  <p className="py-1 text-sm text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce sed est viverra ex tincidunt vehicula. Donec
                    pellentesque diam sit amet mi ullamcorper, ac finibus lorem
                    scelerisque.
                  </p>
                </div>
                <div className="flex w-full flex-row-reverse items-center justify-start p-4">
                  <button
                    type="button"
                    className="rounded-lg bg-gray-800 px-4 py-2 text-white hover:bg-gray-700 active:bg-gray-600"
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
