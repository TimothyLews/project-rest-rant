const React = require('react')
const Def = require('../default')

function index (data) {
    let placesFormatted = data.places.map((place) => {
        return (
            <div key={place.name}>
                <h2>{place.name}</h2>
                <p>{place.city}, {place.state} - {place.cuisines}</p>
                <img src={place.pic} alt={place.name} />
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>Places to Rant or Rave About</h1>
                {placesFormatted}
            </main>
        </Def>
    )
}

module.exports = index
