import db from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const tasks = await db.task.findMany();
  return NextResponse.json({ data: tasks, status: 200 });
};

export const POST = async (request) => {
  const { content } = await request.json();
  const task = await db.task.create({ data: { content } });
  return NextResponse.json({ data: task });
};
