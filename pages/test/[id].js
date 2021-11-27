import { ObjectId } from "bson"
import Head from "next/head"
import Instructions from "../../components/items/instructions"
import Rate from "../../components/items/rate"
import Jar from "../../components/items/jar"
import useAnswers from "../../hooks/useAnswers"
import { connectToDatabase } from "../../lib/mongodb"
import Selection from "../../components/items/selection"
import { useEffect } from "react"
import Text from "../../components/items/text"
import Slider from "../../components/items/slider"

const Test = (props) => {
  const answers = useAnswers()

  useEffect(() => {
    answers.generateAnswers(props.test, props.items)
  }, [])

  return (
    <>
      <Head>
        <title>FormZila | {props.test && props.test.name}</title>
      </Head>

      <div>
        <h1 className="title has-text-centered">{props.test.name}</h1>

        <br />

        <ul>
          {props.items &&
            props.items.map((item) => {
              switch (item.type) {
                case "instructions":
                  return (
                    <li key={item._id} className="mb-3">
                      <Instructions item={item} />
                    </li>
                  )
                case "rate":
                  return (
                    <li key={item._id} className="mb-3">
                      <Rate item={item} answers={answers} />
                    </li>
                  )
                case "jar":
                  return (
                    <li key={item._id} className="mb-3">
                      <Jar key={item._id} item={item} answers={answers} />
                    </li>
                  )
                case "selection":
                  return (
                    <li key={item._id} className="mb-3">
                      <Selection key={item._id} item={item} answers={answers} />
                    </li>
                  )
                case "text":
                  return (
                    <li key={item._id} className="mb-3">
                      <Text key={item._id} item={item} answers={answers} />
                    </li>
                  )
                case "slider":
                  return (
                    <li key={item._id} className="mb-3">
                      <Slider key={item._id} item={item} answers={answers} />
                    </li>
                  )
                default:
                  return (
                    <li key={item._id} className="mb-3">
                      {JSON.stringify(item)}
                    </li>
                  )
              }
            })}
        </ul>

        <br />

        <div className="field is-grouped is-justify-content-center">
          <p className="control">
            <button
              type="button"
              className="button is-outlined is-dark is-rounded is-large"
              onClick={(e) => {
                e.preventDefault()
                answers.submitAnswers()
              }}
            >
              Submit
            </button>
          </p>
        </div>
      </div>
    </>
  )
}

export default Test

export async function getServerSideProps({ params }) {
  const { db } = await connectToDatabase()

  let test = await db.collection("tests").findOne({ _id: ObjectId(params.id) })

  console.log(test)

  let items = await db
    .collection("items")
    .find({ test: ObjectId(params.id) })
    .sort({ page: 1, order: 1 })
    .toArray()

  return {
    props: JSON.parse(
      JSON.stringify({
        test: test,
        items: items,
      })
    ),
  }
}
