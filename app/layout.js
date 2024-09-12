import { Toaster } from "react-hot-toast";
import NavBar from "./_components/NavBar";
import "./globals.css";

export const metadata = {
  title: "next js course by Jhon Smilga",
  description:
    "Learn how to build a full stack application with Next.js and Prisma. This tutorial covers everything from setting up a new Next.js project to deploying it to Vercel.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="p-8 max-w-8xl mx-auto">{children}</main>
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
