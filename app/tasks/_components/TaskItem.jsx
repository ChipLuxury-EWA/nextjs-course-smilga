import Link from "next/link";
import DeleteTask from "./DeleteTask";

const TaskItem = ({ task }) => {
  return (
    <li className="flex justify-between items-center px-6 py-4 mb-4 border border-base-300 rounded-lg shadow-lg" key={task.id}>
      <h2 className={`text-lg capitalize ${task.completed ? "line-through" : null}`}>{task.content}</h2>
      <div className="flex gap-6 items-center">
        <Link className="btn btn-accent btn-xs" href={`/tasks/${task.id}`}>
          Edit
        </Link>
        <DeleteTask id={task.id} />
      </div>
    </li>
  );
};
export default TaskItem;
