import React from "react"

const Instructions = ({ item }) => {
  return (
    <div className="card p-5 has-background-black">
      <div className="card-content has-text-centered">
        <h1 className="title is-size-4 has-text-white">{item.config.text}</h1>
        <p className="has-text-white">{item.config.paragraph}</p>
      </div>
    </div>
  )
}

export default Instructions
