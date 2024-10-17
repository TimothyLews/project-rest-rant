const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
<<<<<<< HEAD
    name: { type: String, required: true },
    pic: { type: String, default: 'http://placekitten.com/350/350'},
    cuisines: { type: String, required: true },
    city: { type: String, default: 'Anytown' },
    state: { type: String, default: 'USA' },
    founded: {
      type: Number,
      min: [1673, 'Surely not that old?!'],
      max: [new Date().getFullYear(), 'This is the future!']
    },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
  })
  
  

placeSchema.methods.showEstablished = function() {}

module.exports = mongoose.model('Place', placeSchema)
=======
  name: { type: String, required: true },
  pic: {type: String, defualt: 'http://placekitten.com/400/400'},
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded:{ 
  type: Number,
  min: [1673, 'Surely not that old?!'],
  max: [new Date().getFullYear(), 'The future is now!'] 
  },
  comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
})

placeSchema.methods.showEstablished = function() {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}
module.exports = mongoose.model('Place', placeSchema)
>>>>>>> 0880c77cc9ca98cb87fb54fb34d2bce78b5ae10a
