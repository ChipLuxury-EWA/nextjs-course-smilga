import { createTask } from "@/utils/task.actions";

const TaskForm = () => {
  return (
    <form action={createTask}>
      <div className="join join-horizontal w-full">
        <input className="input input-bordered join-item w-full" name="content" required placeholder="Type here..." type="text" />
        <button className="btn btn-primary join-item">Add</button>
      </div>
    </form>
  );
};
export default TaskForm;
