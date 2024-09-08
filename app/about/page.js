import Link from "next/link"


const AboutPage = () => {
  return (
    <div>
        <h1 className="text-7xl font-bold underline">About Page</h1>
        <Link className="text-blue-500" href="/">Home</Link>
    </div>
  )
}

export default AboutPage