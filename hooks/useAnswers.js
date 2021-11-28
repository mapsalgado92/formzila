import { useState } from "react"
import { useRouter } from "next/router"

const useAnswers = () => {
  const [answers, setAnswers] = useState({})
  const router = useRouter()

  const getAnswers = () => {
    return answers
  }

  const generateAnswers = (test, items) => {
    let newAnswers = { test: test._id, timestamp: new Date().toISOString() }

    items
      .filter((item) => item.answer)
      .forEach((item) => {
        switch (item.type) {
          case "text":
            newAnswers[item._id] = item.config.required ? null : ""
            break
          case "slider":
            newAnswers[item._id] = item.config.default
            break
          default:
            newAnswers[item._id] = null
        }
      })

    setAnswers(newAnswers)
  }

  const setAnswer = (id, value) => {
    setAnswers({ ...answers, [id]: value })
  }

  const submitAnswers = async () => {
    let valid = true

    Object.keys(answers).forEach((key) => {
      if (answers[key] === null || answers[key] === undefined) {
        valid = false
      } else {
        console.log("KEY", answers[key])
      }
    })

    if (valid) {
      let res = await fetch("/api/answers", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          item: answers,
        }),
      })
      console.log(res)
      router.push("/")
    } else {
      alert("Responda a todas as perguntas antes de submeter")
    }
  }

  return {
    getAnswers,
    generateAnswers,
    setAnswer,
    submitAnswers,
  }
}

export default useAnswers
