// import { type NextPage } from "next";
import Head from "next/head";
// import Link from "next/link";
import { useSession } from "next-auth/react";
// import { signIn, signOut, useSession } from "next-auth/react";

// import { api } from "~/utils/api";
// import Todos from "~/component/Todos";
// import CreateTodo from "~/component/CreateTodo";
import img from "../../public/img/joseph.jpg";
import Projects from "~/components/Projects";
import ContactForm from "~/components/ContactForm";

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
      <main className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-[#001440]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-4 lg:px-64 lg:py-16">
          <div className="flex flex-col items-center">
            <h3 className="animate-typing overflow-hidden whitespace-nowrap font-mono text-xl font-bold text-gray-900 dark:text-white">
              Hi, I&apos;m Joseph.
            </h3>
            <img
              className="mt-12 h-48 w-auto rounded-full"
              src={img.src}
              alt="Joseph Image Here"
            />
            <p className="m-4 w-full text-center text-gray-900 dark:text-white sm:mx-24 sm:mt-12 ">
              I enjoy seeing the products of{" "}
              <span
                className="duration-400
               transition-all hover:text-xl hover:font-semibold hover:text-orange-400 dark:hover:text-yellow-200"
              >
                experimentation
              </span>{" "}
              and{" "}
              <span className="duration-400 transition-all hover:text-xl hover:font-semibold  hover:text-orange-400 dark:hover:text-yellow-200">
                iteration
              </span>{" "}
              come to life in the projects that I work on. Curious and
              interested in the wide variety of applications technology can have
              on business processes today. Strong passion for giving back to the
              community.
            </p>
          </div>
          <div className="flex w-full items-center justify-start justify-center text-left text-center">
            <hr className="my-8 h-1 w-full rounded border-0 bg-gray-900 dark:bg-gray-200"></hr>
            <div className="absolute left-1/2 -translate-x-1/2 bg-white px-4 dark:bg-[#001440]">
              <p className="text-xl font-bold text-gray-900 dark:text-white">
                Projects I&apos;ve worked on
              </p>
            </div>
          </div>
          <Projects />
          <ContactForm />
        </div>
      </main>
    </>
  );
}

export default Home;
