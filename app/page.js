import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-5xl mb-8 font-bold">Next JS tutorial</h1>
      <Link className="btn btn-accent" href="/client">Get started</Link>
    </div>
  );
}
