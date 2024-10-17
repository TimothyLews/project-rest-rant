const React = require("react");
const Def = require("../default");

<<<<<<< HEAD
function edit_form (data) {
=======
function edit_form({place, index}) {
>>>>>>> 0880c77cc9ca98cb87fb54fb34d2bce78b5ae10a
    return (
        <Def>
            <main>
                <h1>Edit Place</h1>
                <form method="POST" action={`/places/${index}?_method=PUT`}>
                    <div className="row">
                        <div className="form-group col-sm-6"></div>
                        <label htmlFor="name">Place Name</label>
                        <input
                            className="form-control"
                            id="name"
                            name="name"
                            value={place.name}
                            required/>
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="pic">Place Picture</label>
                        <input
                            className="form-control"
                            id="pic"
                            name="pic"
                            value={place.pic} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input
                            className="form-control"
                            id="city"
                            name="city"
                            value={place.city} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input
                            className="form-control"
                            id="state"
                            name="state"
                            value={place.state} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input
                            className="form-control"
                            id="cuisines"
                            name="cuisines"
                            value={place.cuisines} 
                            required
                        />
                    </div>
                    <input
                        className="btn btn-primary"
                        type="submit"
                        value="Update Place"
                    />
                </form>
            </main>
        </Def>
    );
}

module.exports = edit_form;