import { getSingleTask } from "@/utils/task.actions";
import EditTask from "../_components/EditTask";
import Link from "next/link";

const EditTaskPage = async ({ params }) => {
  const id = params.id;
  const task = await getSingleTask(id)

  return (
    <div>
      <h1 className="text-5xl mb-8 font-bold">Edit task</h1>
      <EditTask task={task} />
      <Link className="btn btn-primary mt-8 mb-12" href="/tasks">Back</Link>
    </div>
  );
};
export default EditTaskPage;
