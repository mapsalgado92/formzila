const rates = ["min", 1, 2, 3, 4, 5, 6, 7, 8, 9, "max"]

const Rate = ({ item, answers }) => {
  return (
    <div className="card">
      <div className="card-content has-text-centered">
        <h1 className="title is-size-4 ">{item.config.text}</h1>
        <br />
        <form>
          <div className="columns is-mobile control required">
            {rates.map((rate) => (
              <div
                key={rate + item._id}
                className="column is-flex is-flex-direction-column is-align-items-center is-justify-content-space-between"
              >
                <div>
                  {rate === "min" ? (
                    <span className="has-text-danger has-text-weight-bold">
                      {item.config["text-low"]}
                    </span>
                  ) : rate === "max" ? (
                    <span className="has-text-success has-text-weight-bold">
                      {item.config["text-high"]}
                    </span>
                  ) : (
                    rate
                  )}
                </div>
                <br />
                {rate !== "min" && rate !== "max" && (
                  <input
                    type="radio"
                    name="input"
                    onClick={() => answers.setAnswer(item._id, rate)}
                  />
                )}
              </div>
            ))}
          </div>
        </form>
      </div>
    </div>
  )
}

export default Rate
