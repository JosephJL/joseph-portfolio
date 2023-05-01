import Image from "next/image";
import { api } from "../utils/api";
import type { Project } from "~/types";
import { Accordion, Button } from "flowbite-react";

type ProjectProp = {
  project: Project;
};

export default function Project({ project }: ProjectProp) {
  const { id, title, text, img, github, date } = project;

  return (
    <>
      <div className="grid grid-cols-2">
        <div className="flex min-h-full w-full items-center justify-center p-4">
          <div className="flex h-auto w-full flex-col items-start justify-start overflow-hidden rounded-lg border shadow-lg dark:border-gray-800">
            <div className="relative flex w-full items-center justify-center border-b dark:border-gray-800">
              <Image
                alt="Project Image Here"
                src={img}
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  fill: "true",
                }}
                className={`h-auto w-full transition-opacity duration-200 ${
                  img == null ? "opacity-0" : "opacity-100"
                }`}
              />
            </div>
            <div className="w-full border-b p-4 dark:border-gray-800">
              <span className="text-xl text-white">{title}</span>
              <p className="py-1 text-sm text-white">{text}</p>
            </div>
            <div className="flex w-full flex-row-reverse items-center justify-start p-4">
              {github.length
                ? github.map((link, index) => {
                    return (
                      <Button className="mr-4" href={link}>
                        Github {index > 0 ? "Backend" : "Frontend"}
                      </Button>
                    );
                  })
                : "Repo Coming soon"}
              {/* <div className="w-full border-b px-4 py-2 dark:border-gray-800">
                <label
                  htmlFor="feedback"
                  className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400"
                >
                  Leave a comment!
                </label>
                <textarea
                  id="feedback"
                  className="mt-2 w-full rounded p-2 outline-none ring-2 ring-gray-300 focus-visible:ring-gray-500 "
                />
              </div> */}
            </div>
          </div>
        </div>
        {/* <div>
          <Accordion
            collapseAll={true}
            className="w-full border-b px-4 py-2 dark:border-gray-800"
          >
            <Accordion.Panel>
              <Accordion.Title>Leave a comment!</Accordion.Title>
              <Accordion.Content>
                <div>
                  <textarea
                    id="feedback"
                    className="mt-2 w-full rounded p-2 outline-none ring-2 ring-gray-300 focus-visible:ring-gray-500 "
                  />
                </div>
                <div className="flex w-full justify-end">
                  <div className="m-2">
                    <Button
                      type="button"
                      className="rounded-lg bg-gray-800 px-4 py-2 text-white hover:bg-gray-700 active:bg-gray-600"
                    >
                      Send
                    </Button>
                  </div>
                </div>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div> */}
      </div>
    </>
  );
}
