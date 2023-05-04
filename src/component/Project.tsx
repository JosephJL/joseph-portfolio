import Image from "next/image";
// import { api } from "../utils/api";
import type { Project } from "~/types";
import { Button } from "flowbite-react";

type ProjectProp = {
  project: Project;
};

type KeyProp = {
  key: number;
};

export default function Project({ project }: ProjectProp) {
  const { id, title, text, img, github } = project;

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
            <div className="bg-[#0b1a61] hover:bg-transparent">
              <Image
                className="opacity-60 hover:opacity-80"
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
          <div className="w-full p-4 ">
            <span className="text-xl text-white">{title}</span>
            <p className="py-1 text-sm text-white">{text}</p>
            <div className="flex flex-row"></div>
          </div>
        </div>
      </div>
    </>
  );
}
