const Slider = ({ item, answers }) => {
  return (
    <div className="card">
      <div className="card-content has-text-centered">
        <h1 className="title is-size-4 ">{item.config.text}</h1>
        <br />
        <form>
          <input
            style={{ width: "100%" }}
            type="range"
            min={item.config.min}
            max={item.config.max}
            step={0.1}
            value={
              answers.getAnswers()[item._id]
                ? answers.getAnswers()[item._id]
                : item.config.max - item.config.min / 2 + item.config.min
            }
            onChange={(e) => answers.setAnswer(item._id, e.target.value)}
            id="myRange"
          />
        </form>
        <div className="tag is-size-5">{answers.getAnswers()[item._id]}</div>
      </div>
    </div>
  )
}

export default Slider
