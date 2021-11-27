const Text = ({ item, answers }) => {
  return (
    <div className="card">
      <div className="card-content has-text-centered">
        <h1 className="title is-size-4 ">{item.config.text}</h1>
        <br />
        <form>
          <textarea
            className="textarea"
            rows={item.config.rows}
            onChange={(e) => answers.setAnswer(item._id, e.target.value)}
          ></textarea>
        </form>
      </div>
    </div>
  )
}

export default Text
