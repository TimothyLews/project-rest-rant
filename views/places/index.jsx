const React = require('react')
const Def = require('../default')

function index (data) {
    let placesFormatted = data.places.map((place) => {
        return (
            <div classname="col-sm-6">
                <h2>
                    <a href={'/places/${index}'}>
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

    return (
        <Def>
            <main>
            <h1>PLACES INDEX PAGE</h1>
                <div className="row">
                {placesFormatted}  
                </div>
            </main>
        </Def>
    )
}

module.exports = index