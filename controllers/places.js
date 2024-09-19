const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [
        {
            name: 'H-Thai-ML',
            city: 'Seattle',
            state: 'WA',
            cuisines: 'Thai, Pan-Asian',
            pic: 'https://unsplash.com/photos/brown-tabby-kitten-sitting-on-floor-nKC772R_qog'
        },
        {
            name: 'Coding Cat Cafe',
            city: 'Phoenix',
            state: 'AZ',
            cuisines: 'Coffee, Bakery',
            pic: 'https://unsplash.com/photos/brown-tabby-kitten-sitting-on-floor-nKC772R_qog'
        }
    ];
    res.render('places/index', { places })
});

// Route to render the new place form
router.get('/new', (req, res) => {
  res.render('places/new'); 
});
router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})

module.exports = router
