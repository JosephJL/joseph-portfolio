// import { type NextPage } from "next";
import Head from "next/head";
// import Link from "next/link";
import { useSession } from "next-auth/react";
// import { signIn, signOut, useSession } from "next-auth/react";

// import { api } from "~/utils/api";
// import Todos from "~/component/Todos";
// import CreateTodo from "~/component/CreateTodo";
import { Button } from "flowbite-react";
import ContactForm from "~/components/ContactForm";
import Projects from "~/components/Projects";
import img from "../../public/img/joseph.jpg";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Tooltip } from "flowbite-react";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();
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
              community. To find my most recent experiences and views click{" "}
              <span
                onClick={() => router.push("/posts")}
                style={{ cursor: "pointer" }}
                className="duration-400
               transition-all hover:text-xl hover:font-semibold hover:text-blue-400 dark:hover:text-yellow-200"
              >
                here.
              </span>
            </p>
            <div className="flex">
              <Tooltip content="Resume" trigger="hover">
                <Button
                  className="mx-2 mt-2 text-white active:bg-blue-800 dark:bg-gray-700 dark:bg-white dark:text-gray-900"
                  href="/Joseph_Hee_Resume.pdf"
                >
                  <FontAwesomeIcon className="mx-1" icon={faFile} size="2xl" />
                </Button>
              </Tooltip>
              <Tooltip content="LinkedIn" trigger="hover">
                <Button
                  className="mx-2 mt-2 text-white active:bg-blue-800 dark:bg-gray-700 dark:bg-white dark:text-gray-900"
                  href="https://www.linkedin.com/in/josephheejl"
                >
                  <FontAwesomeIcon
                    className="mx-1"
                    icon={faLinkedin}
                    size="2xl"
                  />
                </Button>
              </Tooltip>
              {/* <p>Hello there,this is the path {router.pathname}</p> */}
            </div>
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
          <div className="flex w-full items-center justify-start justify-center text-left text-center">
            <hr className="my-8 h-1 w-full rounded border-0 bg-gray-900 dark:bg-gray-200"></hr>
            <div className="absolute left-1/2 -translate-x-1/2 bg-white px-4 dark:bg-[#001440]">
              <p className="text-xl font-bold text-gray-900 dark:text-white">
                Where I&apos;m Running
              </p>
            </div>
          </div>
          <div className="flex w-full items-center justify-start justify-center text-left text-center">
            <div className="flex min-h-full w-full flex-wrap items-center justify-center p-4">
              <div className="px-2 py-1">
                <iframe
                  height="454"
                  width="300"
                  src="https://www.strava.com/athletes/50923860/latest-rides/db1d389c53920b9e2ac9c4954d8a14b05aa15e56"
                ></iframe>
              </div>
              <div className="px-6 py-3">
                <p className="text-lg	font-semibold text-gray-900 dark:text-white">
                  Why is there a running log here?
                </p>
                <p className="text-left">I like running.</p>
                <p className="text-left">Running clears the head.</p>
                <p className="text-left">
                  Escaping sedentary lifestyle is good.
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full items-center justify-start justify-center text-left text-center">
            <hr className="my-8 h-1 w-full rounded border-0 bg-gray-900 dark:bg-gray-200"></hr>
            <div className="absolute left-1/2 -translate-x-1/2 bg-white px-4 dark:bg-[#001440]">
              <p className="text-xl font-bold text-gray-900 dark:text-white">
                Contact Me
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </main>
    </>
  );
}

export default Home;
