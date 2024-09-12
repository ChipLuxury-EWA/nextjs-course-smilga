"use client";
import { improvedCreateTask } from "@/utils/task.actions";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button className="btn btn-primary join-item" disabled={pending}>
      {pending ? <span className="loading loading-bars loading-md"></span> : "Add"}
    </button>
  );
};

const ImprovedTaskForm = () => {
  return (
    <form action={improvedCreateTask}>
      <div className="join join-horizontal w-full">
        <input
          className="input input-bordered join-item w-full"
          name="content"
          required
          placeholder="Improved task form"
          type="text"
        />
        <SubmitButton />
      </div>
    </form>
  );
};
export default ImprovedTaskForm;
