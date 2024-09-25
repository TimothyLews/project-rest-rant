const React = require('react')
const Def = require('../default')

function new_form (data) {
    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>
                <form method="POST" action={'/places/${data.place.id}?_method=PUT'}>
                <div className="form-group col-sm-6">
                    <label htmlFor="name">Place Name</label>
                    <input 
                    className="form-control" 
                    id="name" 
                    name="name"
                    value={Data.place.name} 
                    required />
                </div>
                <div className="form-group col-sm-6">
                    <label htmlFor="pic">Place Picture</label>
                    <input className="form-control" type="url" id="pic" name="pic" />
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input className="form-control" id="city" name="city" />
                </div>
                <div className="form-group">
                    <label htmlFor="state">State</label>
                    <input className="form-control" id="state" name="state" />
                </div>
                <div className="form-group">
                    <label htmlFor="cuisines">Cuisines</label>
                    <input className="form-control" id="cuisines" name="cuisines" required />
                </div>
                <input className="btn btn-primary" type="submit" value="Add Place" />
                <div className="form-group">
                 <label for="founded">Founded Year</label>
                <input 
                type="number"
                className="form-control" 
                id="founded" 
                name="founded"
                 value={new Date().getFullYear()}/>
                </div>
                </form>
            </main>
        </Def>
    )
}

let sumRatings = data.place.comments.reduce((tot, c) => {
  return tot + c.stars
}, 0)
let averageRating = sumRatings / data.place.comments.length
rating = (
  <h3>
  {Math.round(averageRating)} stars
  </h3>
)

module.exports = new_form
