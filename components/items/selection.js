const Selection = ({ item, answers }) => {
  return (
    <div className="card">
      <div className="card-content has-text-centered">
        <h1 className="title is-size-4 ">{item.config.text}</h1>
        <br />
        <form>
          <div className="select">
            <select
              onChange={(e) => answers.setAnswer(item._id, e.target.value)}
            >
              {item.config.selection &&
                item.config.selection.split(",").map((option, index) => (
                  <option key={item._id + "-option-" + index} value={option}>
                    {option}
                  </option>
                ))}
            </select>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Selection
