import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Formzila</title>
      </Head>

      <div className="is-align-self-center mt-auto mb-auto">
        <h1 className="title is-size-1 ">
          Welcome to <span className="has-text-danger">FormZila</span>
        </h1>
      </div>
    </>
  )
}
