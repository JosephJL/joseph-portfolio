import Image from "next/image";
// import { api } from "../utils/api";
import type { Project } from "~/types";
import { Button } from "flowbite-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

type ProjectProp = {
  project: Project;
};

type KeyProp = {
  key: number;
};

export default function Project({ project }: ProjectProp) {
  const { id, title, text, img, github, date } = project;

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
            <div className="bg-[#0b1a61] p-4 hover:bg-transparent">
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
                      <Button key={index} className="m-4" href={link}>
                        Github {index > 0 ? "Backend" : "Frontend"}
                      </Button>
                    );
                  })
                : "Repo Coming soon"}
            </div>
          </div>
          <div className="w-full p-4">
            <div className="p-2 hover:bg-black">
              <span className="text-xl font-bold text-white">{title}</span>
              <p className="py-1 text-sm text-white">{text}</p>
            </div>
            <div className="p-2 hover:bg-black">
              <p className="text-lg	font-semibold text-white">
                Duration &nbsp;
                <FontAwesomeIcon className="text-white" icon={faClock} />
              </p>
              <p className="py-1 text-sm text-white">
                {date.split(",")[0]}{" "}
                <FontAwesomeIcon
                  className="text-white"
                  icon={faArrowRightLong}
                />{" "}
                {date.split(",")[1]}
              </p>
            </div>
            <div className="p-2 hover:bg-black">
              <p className="text-lg font-semibold text-white">Tech Stack</p>
              <p className="py-1 text-sm text-white">
                Javascript &#9475; Vue &#9475; Firebase
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
