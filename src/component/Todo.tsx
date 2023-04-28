import { api } from "~/utils/api";
import type { Todo } from "~/types";

type TodoProps = {
  todo: Todo;
};

export default function Todo({ todo }: TodoProps) {
  const { id, text, done } = todo;

  return (
    <>
      <div className="justify between flex items-center gap-2">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="done"
            id="done"
            className="border-gray-30 h-4 w-4 cursor-pointer rounded border bg-gray-50"
            checked={done}
          />
          <label htmlFor="done" className={`cursor-pointer`}>
            {text}
          </label>
        </div>
        <button className="bg-blue-700 text-white hover:bg-blue-800 focus:ring-4">
          Delete
        </button>
      </div>
    </>
  );
}
