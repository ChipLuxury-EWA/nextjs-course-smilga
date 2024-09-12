"use client";
import { improvedCreateTask } from "@/utils/task.actions";
import { useEffect } from "react";
import { useFormStatus, useFormState } from "react-dom";
import toast from "react-hot-toast";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button className="btn btn-primary join-item" disabled={pending}>
      {pending ? <span className="loading loading-bars loading-md"></span> : "Add"}
    </button>
  );
};

const initialFormState = {
  message: null,
};

const ImprovedTaskForm = () => {
  const [formState, setFormState] = useFormState(improvedCreateTask, initialFormState);

  useEffect(() => {
    if (formState.success && formState.message) {
      toast.success(formState.message);
    } else if (!formState.success && formState.message) {
      toast.error(formState.message);
    }
  }, [formState]);

  return (
    <form action={setFormState}>
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
