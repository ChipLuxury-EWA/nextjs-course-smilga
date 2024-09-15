import { deleteTask } from "@/utils/task.actions";

const DeleteTask = ({ id }) => {
  return (
    <form className="flex gap-2" action={deleteTask}>
      <input type="hidden" name="id" value={id} />
      <button className="btn btn-error btn-xs" type="submit">
        Delete
      </button>
    </form>
  );
};
export default DeleteTask;
