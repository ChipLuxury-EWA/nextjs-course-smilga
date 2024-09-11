import { updateTask } from "@/utils/task.actions";

const EditTask = ({ task }) => {
  const { id, content, completed } = task;
  return (
    <form className="max-w-sm p-12 border border-base-300 rounded-lg shadow-lg" action={updateTask}>
      <input type="hidden" name="id" value={id} />
      <input className="input input-bordered w-full" type="text" name="content" defaultValue={content} required />
      <div className="form-control mt-6">
        <label htmlFor="completed" className="label cursor-pointer">
            <span className="label-text">Completed</span>
            <input className="checkbox checkbox-primary checkbox-sm" type="checkbox" name="completed" id="completed"  defaultChecked={completed}/>
        </label>
      </div>
      <button className="btn btn-primary btn-sm mt-8" type="submit">Update</button>
    </form>
  );
};
export default EditTask;
