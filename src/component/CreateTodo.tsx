import { useState } from "react";
import { api } from "~/utils/api";
import { todoInput } from "~/types";
import toast from "react-hot-toast";

export default function CreateTodo() {
  const [newTodo, setNewTodo] = useState("");

  const trpc = api.useContext();
  const { mutate } = api.todo.create.useMutation({
    onSettled: async () => {
      await trpc.todo.all.invalidate();
    },
  });

  return (
    <>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            const result = todoInput.safeParse(newTodo);

            if (!result.success) {
              console.log("not valid");
              toast.error(result.error.format()._errors.join("\n"));
              return;
            }

            // Create todo mutation
            mutate(newTodo);
          }}
          className="flex gap-2"
        >
          <input
            type="text"
            className="rounded-lg border-gray-300 bg-gray-50 text-sm text-gray-900"
            placeholder="New Todo ..."
            id="new-todo"
            value={newTodo}
            onChange={(e) => {
              setNewTodo(e.target.value);
            }}
          />
          <button className="bg-blue-700 text-white hover:bg-blue-800 focus:ring-4">
            Create
          </button>
        </form>
      </div>
    </>
  );
}
