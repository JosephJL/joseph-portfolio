import Image from "next/image";
// import { api } from "../utils/api";
import type { Project } from "~/types";
import { Button } from "flowbite-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faArrowRightLong,
  faMicrochip,
  faBullseye,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import FlippableImage from "./FlippableImage";

type ProjectProp = {
  project: Project;
};

export default function Project({ project }: ProjectProp) {
  const { id, title, text, backtext, img, github, date, techs, website, demo } =
    project;

  return (
    <>
      <div className="flex min-h-full w-full flex-wrap items-center justify-center p-4">
        <div
          className={`flex h-auto w-full justify-start overflow-hidden ${
            parseInt(id) % 2 != 0
              ? "flex-col sm:flex-row-reverse	"
              : "flex-col sm:flex-row"
          }`}
        >
          <div className="relative flex w-full flex-col items-center justify-center">
            <div className="rounded bg-white p-2 hover:bg-transparent dark:bg-[#001440]">
              <FlippableImage
                title={title}
                className="duration-400 rounded-md opacity-60 transition-all hover:opacity-80"
                alt="Project Image Here"
                src={img}
                width={0}
                height={0}
                sizes="100vh"
                backtext={backtext}
              />
            </div>
            <div className="flex flex-row">
              {github.length
                ? github.map((link, index) => {
                    return (
                      <Button
                        key={index}
                        className="mx-2 mt-2 text-white active:bg-blue-800 dark:bg-gray-700 dark:bg-white dark:text-gray-900"
                        href={link}
                      >
                        {index > 0 && github.length > 1
                          ? "Backend"
                          : github.length > 1
                          ? "Frontend"
                          : ""}
                        <FontAwesomeIcon
                          className="mx-1"
                          icon={faGithub}
                          size="xl"
                        />
                      </Button>
                    );
                  })
                : "Repo Coming soon"}
              {website.length ? (
                <Button
                  className="mx-2 mt-2 text-white active:bg-blue-800 dark:bg-gray-700 dark:bg-white dark:text-gray-900"
                  href={website}
                >
                  Website
                </Button>
              ) : (
                ""
              )}
              {demo.length ? (
                <Button
                  className="mx-2 mt-2 text-white active:bg-blue-800 dark:bg-gray-700 dark:bg-white dark:text-gray-900"
                  href={demo}
                >
                  Demo
                </Button>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="w-full p-4">
            <div className="px-2 py-1 dark:hover:bg-black">
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                {title}
              </span>
              {/* <p className="text-sm text-gray-900 dark:text-white">{text}</p> */}
              {/* <p className="m-1 text-sm text-gray-900 dark:text-white">
                {tags.length
                  ? tags.map((tag, index) => {
                      return (
                        <span
                          className="mr-2 rounded border border-gray-500 bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-400"
                          key={index}
                        >
                          {tag}{" "}
                        </span>
                      );
                    })
                  : ""}
              </p> */}
            </div>
            <div className="px-2 py-1 dark:hover:bg-black">
              <p className="text-lg	font-semibold text-gray-900 dark:text-white">
                Purpose &nbsp;
                <FontAwesomeIcon
                  className="p-none text-gray-900 dark:text-white"
                  icon={faBullseye}
                />
              </p>
              <p className="text-sm text-gray-900 dark:text-white">{text}</p>
            </div>
            <div className="hidden px-2 py-1 dark:hover:bg-black md:block">
              <p className="text-lg	font-semibold text-gray-900 dark:text-white">
                Duration &nbsp;
                <FontAwesomeIcon
                  className="text-gray-900 dark:text-white"
                  icon={faClock}
                />
              </p>
              <p className="text-sm text-gray-900 dark:text-white">
                {date.split(",")[0]}{" "}
                <FontAwesomeIcon
                  className="text-gray-900 dark:text-white"
                  icon={faArrowRightLong}
                />{" "}
                {date.split(",")[1]}
              </p>
            </div>
            <div className="px-2 py-1 dark:hover:bg-black">
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                Tech Stack &nbsp;{" "}
                <FontAwesomeIcon
                  className="text-gray-900 dark:text-white"
                  icon={faMicrochip}
                />
              </p>

              <p className="text-sm text-gray-900 dark:text-white">
                {techs.length
                  ? techs.map((tech, index) => {
                      return (
                        <span key={index}>
                          {tech}{" "}
                          {index != techs.length - 1 ? (
                            <span>&#9475;</span>
                          ) : (
                            <span></span>
                          )}{" "}
                        </span>
                      );
                    })
                  : ""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
