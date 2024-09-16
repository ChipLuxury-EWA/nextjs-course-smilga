"use client";
import { deleteTask } from "@/utils/task.actions";
import { useEffect } from "react";
import { useFormStatus, useFormState } from "react-dom";
import toast from "react-hot-toast";
import { initialFormState } from "./ImprovedTaskForm";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button className="btn btn-error btn-xs join-item" disabled={pending} type="submit">
      {pending ? <span className="loading loading-bars loading-md mx-1.5"></span> : "Delete"}
    </button>
  );
};

const DeleteTaskForm = ({ id }) => {
  const [formState, setFormState] = useFormState(deleteTask, initialFormState);
  
  useEffect(() => {
    // if successful, the comp is unmounted and toast.success will never called so we just error handling
    if (!formState.success && formState.message) {
      toast.error(formState.message);
    }
  }, [formState]);

  return (
    <form className="flex gap-2" action={setFormState}>
      <input type="hidden" name="id" value={id} />
      <SubmitButton />
    </form>
  );
};
export default DeleteTaskForm;
