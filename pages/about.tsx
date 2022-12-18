import Layout from "./components/Layout"
import Link from "next/link"

export default function AboutPage() {
  return (
    <Layout title="About Projects">
        <h1>About</h1>
        <p>This is an app to find projects</p>
        <p>Version: 1.0.0</p>
        <Link href="/">Home</Link>
    </Layout>
  )
}
