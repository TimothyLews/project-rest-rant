const React = require("react");
const Def = require("../default");

function show(data) {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  let rating = (
    <h3 className="inactive">
      Not yet rated
    </h3>
  )
if (data.place.comments.length) {
  let sumRatings = data.place.comments.reduce((total, c) => {
    return total + c.stars
  }, 0)
  let averageRating = sumRatings / data.place.comments.length
  rating = (
    <h3>
      {averageRating} stars
    </h3>
  )}
  return (
    <Def>
      <main>
        <br/><br/>
        <div className="row">
          <div className="col-sm-6">
            <img id="show-image" src={props.place.pic} alt={props.place.name} />
          </div>
          <div className="col-sm-6">
            <h1>{props.place.name}</h1>
            <h2>Rated</h2>
            {rating}
            <p>Not Rated</p>
            <h2>Description</h2>
            <h2>
              {props.place.showEstablished()}
            </h2>

            <h3>
              Serving {props.place.cuisines}
            </h3>

          </div>
        </div>
        <br/><br/><br/>
        <div className="row">
          <h2>Comments</h2>
          <p>no comments yet!</p>
        </div>
        <br/><br/>
        <div className="row">
          <a className="col-sm-1 edit-button"
            href={`/places/${props.place.id}/edit`}
          >
            Edit
          </a>
          <form
            method="POST"
            action={`/places/${props.place.id}?_method=DELETE`}
            className="col-sm-1 delete-form"
          >
            <button type="submit" className="btn btn-danger delete-button">
              Delete
            </button>
          </form>
        </div>
        <br/>
      </main>
    </Def>
  );
}

module.exports = show;
