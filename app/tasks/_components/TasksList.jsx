import prisma from "@/utils/db";
import TaskItem from "./TaskItem";

const TasksList = async () => {
  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const dynamicTasksList = allTasks.map((task) => {
    return <TaskItem key={task.id} task={task} />;
  });
  if (allTasks.length === 0) return <h2 className="text-2xl mt-8 font-medium text-lg">No tasks found</h2>;
  return <ul className="mt-8">{dynamicTasksList}</ul>;
};
export default TasksList;
