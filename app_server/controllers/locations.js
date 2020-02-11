/* GET 'home' page */
const homelist = (req, res) =>
{
    res.render('locations-list',
    {
        title: 'Loc8r - find a place to work with wifi',
        pageHeader:
        {
            title: 'Loc8r',
            strapline: 'Find places to work with wifi near you!'
        },
        locations:
        [{
            name:       'Starcups',
            address:    '125 Brighton Road, Reading, RG6 1PS',
            rating:     3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance:   '100m'
        },
        {
            name:       'Cafe Hero',
            address:    '137 Brighton Road, Reading, RG6 1PS',
            rating:     4,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance:   '200m'
        },
        {
            name:       'Burger Queen',
            address:    '143 Brighton Road, Reading, RG6 1PS',
            rating:     2,
            facilities: ['Food', 'Premium wifi'],
            distance:   '250m'
        }],
        sidebar: "Looking for wifi and a seat? Loc8r helps you find a place to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for."
    });
};

/* GET 'Location info' page */
const locationInfo = (req, res) =>
{
    res.render('location-info', { title: 'Location Info' });
};

/* GET 'Add review' page */
const addReview = (req, res) =>
{
    res.render('location-review-form', { title: 'Add Review' });
};

module.exports =
{
    homelist,
    locationInfo,
    addReview
};