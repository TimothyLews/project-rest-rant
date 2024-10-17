const React = require("react");
const Def = require("../default.jsx");

function index (data) {
<<<<<<< HEAD
    let placesFormatted = data.places.map((place) => {
        return (
            <div classname="col-sm-6">
                <h2>
                    <a href={'/places/${place.id}'}>
                    {place.name}
                    </a>
                </h2>
                <p clasName="text-center">
                    {place.cuisines}
                </p>
                <img src={place.pic} alt={place.name}/>
                <p className="text-center">
                    Located in {place.city}, {place.state}
                </p>
            </div>
        )
    })

=======
  let placesFormatted = data.places.map((place) => {
>>>>>>> 0880c77cc9ca98cb87fb54fb34d2bce78b5ae10a
    return (
      <div className="col-sm-6">
        <h2>{place.name}</h2>
        <p className="text-center">
          {place.cuisines}
        </p>
        <img src={place.pic} alt={place.name} />
        <p className="text-center">
          Located in {place.city}, {place.state}
        </p>
      </div>
    )
  })
    return (
    <Def>
        <main>
            <h1>Places to Rant or Rave About</h1>
            <div className="row">
              {placesFormatted}
            </div>
        </main>
    </Def>
  )
}

module.exports = index;
