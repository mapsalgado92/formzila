const values = [-2, -1, 0, 1, 2]

const Jar = ({ item, answers }) => {
  return (
    <div className="card">
      <div className="card-content has-text-centered">
        <h1 className="title is-size-4 ">{item.config.text}</h1>
        <br />
        <form>
          <div className="columns is-mobile control required">
            {values.map((value) => (
              <div
                key={value + item._id}
                className="column is-flex is-flex-direction-column is-align-items-center is-justify-content-space-between"
              >
                <div>
                  {value === -2 ? (
                    <span className="has-text-danger has-text-weight-bold">
                      {item.config["text-under"]}
                    </span>
                  ) : value === 2 ? (
                    <span className="has-text-danger has-text-weight-bold">
                      {item.config["text-over"]}
                    </span>
                  ) : value === 0 ? (
                    <span className="has-text-success has-text-weight-bold">
                      {item.config["text-perfect"]}
                    </span>
                  ) : (
                    "-"
                  )}
                </div>
                <br />
                {
                  <input
                    type="radio"
                    name="input"
                    onClick={() => answers.setAnswer(item._id, value)}
                  />
                }
              </div>
            ))}
          </div>
        </form>
      </div>
    </div>
  )
}

export default Jar
