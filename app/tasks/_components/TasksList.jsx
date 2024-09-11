import TaskItem from "./TaskItem";
import { getAllTasks } from "@/utils/task.actions";
const TasksList = async () => {
  const allTasks = await getAllTasks();


  const dynamicTasksList = allTasks.map((task) => {
    return <TaskItem key={task.id} task={task} />;
  });
  if (allTasks.length === 0) return <h2 className="text-2xl mt-8 font-medium text-lg">No tasks found</h2>;
  return <ul className="mt-8">{dynamicTasksList}</ul>;
};
export default TasksList;
