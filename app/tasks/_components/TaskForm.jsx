import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";

const createTask = async (formData) => {
  "use server";
  const content = formData.get("content");
  await prisma.task.create({
    data: { content },
  });

 revalidatePath("/tasks");
};

const TaskForm = () => {
  return (
    <form action={createTask}>
      <div className="join w-full">
        <input className="input input-bordered join-item w-full" name="content" required placeholder="Type here..." type="text" />
        <button className="btn btn-primary join-item">Add</button>
      </div>
    </form>
  );
};
export default TaskForm;
