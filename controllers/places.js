const router = require("express").Router();
const db = require("../models/");

//INDEX (view all places)

router.get("/", (req, res) => {
  db.Place.find()
    .then((places) => {
      res.render("places/index", { places });
    })
    .catch((err) => {
      console.log(err);
      res.render("error404");
    });
});


//CREATE (post new place to db)

//NEW
router.post("/", (req, res) => {
  if (req.body.pic === "") {
    req.body.pic = undefined;
  }
  if (req.body.city === "") {
    req.body.city = undefined;
  }
  if (req.body.state === "") {
    req.body.state = undefined;
  }
  db.Place.create(req.body)
    .then(() => {
      res.redirect("/places");
    })
    .catch((err) => {
      if (err && err.name == "ValidationError") {
        let message = "Validation Error: ";
        for (var field in err.errors) {
          message += `${field} was ${err.errors[field].value}. ${err.errors[field].message}\n`;
        }
        res.render("places/new", { message });
      } else {
        res.render("error404");
      }
    });
}); 



//NEW (view form to create new place)

router.get("/new", (req, res) => {
  res.render("places/new");
});



//SHOW (view one place)

router.get("/:id", (req, res) => {
  db.Place.findById(req.params.id)
    .populate("comments")
    .then((place) => {
      console.log(place.comments);
      res.render("places/show", { place });
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});



//UPDATE (update place in db)

router.put("/:id", (req, res) => {
  console.log(req.params.id);
  db.Place.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(() => {
      res.redirect(`/places/${req.params.id}`);
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});



//EDIT (view form to edit place)

router.get("/:id/edit", (req, res) => {
  db.Place.findById(req.params.id)
    .then((place) => {
      res.render("places/edit", { place });
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

router.post('/:id/comment', (req, res) => {
    console.log(req.body)
    db.Place.findById(req.params.id)
    .then(place => {
        db.Comment.create(req.body)
        .then(comment => {
            place.comments.push(comment.id)
            place.save()
            .then(() => {
                res.redirect(`/places/${req.params.id}`)
            })
        })
    })
    .catch(err => {
        res.render('error404')
    })  
    req.body.rant = req.body.rant ? true : false
    res.send('GET /places/:id/comment stub')
})



//DELETE (delete place from db)
router.delete("/:id", (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/places");
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});


module.exports = router;