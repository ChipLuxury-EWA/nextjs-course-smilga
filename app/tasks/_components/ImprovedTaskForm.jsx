"use client";
import { improvedCreateTask } from "@/utils/task.actions";
import { useFormStatus, useFormState } from "react-dom";

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

      {formState.message && (
        <div className="toast">
          <div role="alert" className={`alert alert-${formState.success ? "success" : "error"}`}>
            <span>{formState.message}</span>
          </div>
        </div>
      )}
    </form>
  );
};
export default ImprovedTaskForm;
