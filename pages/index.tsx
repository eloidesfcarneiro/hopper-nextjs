import Link from "next/link"
import Layout from "./components/Layout"

export default function EventsPage() {
  return (
    <Layout>
        <h1>
            My Events
            <Link href='/about'>About</Link>
        </h1>
    </Layout>
  )
}
