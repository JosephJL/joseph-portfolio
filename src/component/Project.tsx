import Image from "next/image";
// import { api } from "../utils/api";
import type { Project } from "~/types";
import { Button } from "flowbite-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faArrowRightLong,
  faMicrochip,
} from "@fortawesome/free-solid-svg-icons";

type ProjectProp = {
  project: Project;
};

type KeyProp = {
  key: number;
};

export default function Project({ project }: ProjectProp) {
  const { id, title, text, img, github, date, techs } = project;

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
            <div className="bg-white p-4 hover:bg-transparent dark:bg-[#0b1a61]">
              <Image
                className="p-2 opacity-60 hover:opacity-80"
                alt="Project Image Here"
                src={img}
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="flex flex-row">
              {github.length
                ? github.map((link, index) => {
                    return (
                      <Button
                        key={index}
                        className="m-4 bg-black text-white dark:bg-white dark:text-gray-900"
                        href={link}
                      >
                        Github {index > 0 ? "Backend" : "Frontend"}
                      </Button>
                    );
                  })
                : "Repo Coming soon"}
            </div>
          </div>
          <div className="w-full p-4">
            <div className="p-2 dark:hover:bg-black">
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                {title}
              </span>
              <p className="py-1 text-sm text-gray-900 dark:text-white">
                {text}
              </p>
            </div>
            <div className="p-2 dark:hover:bg-black">
              <p className="text-lg	font-semibold text-gray-900 dark:text-white">
                Duration &nbsp;
                <FontAwesomeIcon
                  className="text-gray-900 dark:text-white"
                  icon={faClock}
                />
              </p>
              <p className="py-1 text-sm text-gray-900 dark:text-white">
                {date.split(",")[0]}{" "}
                <FontAwesomeIcon
                  className="text-gray-900 dark:text-white"
                  icon={faArrowRightLong}
                />{" "}
                {date.split(",")[1]}
              </p>
            </div>
            <div className="p-2 dark:hover:bg-black">
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                Tech Stack &nbsp;{" "}
                <FontAwesomeIcon
                  className="text-gray-900 dark:text-white"
                  icon={faMicrochip}
                />
              </p>

              <p className="py-1 text-sm text-gray-900 dark:text-white">
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
                  : "Projects coming soon!"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
