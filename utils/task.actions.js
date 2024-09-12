"use server";
import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createTask = async (formData) => {
  const content = formData.get("content");
  await prisma.task.create({ data: { content } });
  revalidatePath("/tasks");
};

export const improvedCreateTask = async (prevState, formData) => {
  await new Promise((r) => setTimeout(r, 2000)); // simulate slow network to portray loading state
  const content = formData.get("content");
  try {
    await prisma.task.create({ data: { content } });
    revalidatePath("/tasks");
    return {message: "Great success", success: true}
  } catch (error) {
    return {message: "Error adding new task", success: false}
  }
};

export const updateTask = async (formData) => {
  const id = formData.get("id");
  const content = formData.get("content");
  const completed = formData.get("completed") === "on";
  await prisma.task.update({ where: { id }, data: { content, completed } });
  redirect("/tasks");
}

export const deleteTask = async (formData) => {
  const id = formData.get("id");
  await prisma.task.delete({ where: { id } });
  revalidatePath("/tasks");
};


export const getSingleTask = async (id) => {
  return await prisma.task.findUnique({ where: { id } });
};

export const getAllTasks = async () => {
  return await prisma.task.findMany({ orderBy: { createdAt: "desc" } });
};
