import Head from "next/head"
import Link from "next/dist/client/link"
import { connectToDatabase } from "../lib/mongodb"

export default function Home(props) {
  return (
    <>
      <Head>
        <title>FormZila | Tests</title>
      </Head>

      <div>
        <h1 className="title is-size-1 has-text-centered">Tests</h1>
        <ul>
          {props.tests &&
            props.tests.map((test) => (
              <li key={test._id} className="mb-2">
                <div className="card">
                  <div className="card-content is-flex is-justify-content-space-between">
                    <span className="title mb-0">{test.name}</span>
                    <Link href={`/test/${test._id}`}>
                      <a className="button">Start Test</a>
                    </Link>
                  </div>
                  <div className="card-footer p-2 is-justify-content-center">
                    Test ID:
                    <span className="has-text-danger ml-2">{test._id}</span>
                  </div>
                </div>
              </li>
            ))}
          <li></li>
        </ul>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase()

  let tests = await db.collection("tests").find({}).toArray()

  return {
    props: JSON.parse(
      JSON.stringify({
        tests: tests,
      })
    ),
  }
}
