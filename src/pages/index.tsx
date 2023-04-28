import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "~/utils/api";
import Todos from "~/component/Todos";
import CreateTodo from "~/component/CreateTodo";

function Home() {
  const { data: sessionData } = useSession();

  return (
    <>
      <Head>
        <title>TRPC Todo App</title>
        <meta name="description" content="TRPC Todo App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          {sessionData && (
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
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
