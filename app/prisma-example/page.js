import prisma from "@/utils/db";

const prismaHandlers = async () => {
  // await prisma.task.create({
  //   data: {
  //     content: "test123",
  //   },
  // });

  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  console.log(allTasks);
  return allTasks;
};

const PrismaExamplePage = async () => {
  const tasks = await prismaHandlers();

  const dynamicTasksList = tasks.map((task) => {
    return (
      <div key={task.id}>
        <h2 className="text-2xl font-bold">👍 - {task.content}</h2>
      </div>
    );
  });

  if (tasks.length === 0) return <h2 className="text-2xl mt-8 font-medium text-lg">No tasks found</h2>;

  return (
    <div>
      <h1 className="text-5xl mb-8 font-bold">All tasks:</h1>
      {dynamicTasksList}
    </div>
  );
};
export default PrismaExamplePage;
