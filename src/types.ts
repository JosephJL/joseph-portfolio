import { z } from "zod";
import type { inferRouterOutputs } from "@trpc/server";
import type { AppRouter } from "./server/api/root";

type RouterOutputs = inferRouterOutputs<AppRouter>;
type allTodosOutput = RouterOutputs["todo"]["all"];
type allProjectsOutput = RouterOutputs["project"]["all"];

export type Todo = allTodosOutput[number];
export type Project = allProjectsOutput[number];

export const todoInput = z
  .string({
    required_error: "Describe your todo",
  })
  .min(1)
  .max(50);
