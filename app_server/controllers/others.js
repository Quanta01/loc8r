/* GET 'about' page */
const about = (req, res) =>
{
    res.render('generic-text',
    {
        title:   'About',
        content: 'Loc8r is being created to help people find places with wifi access, where they can sit down and get a bit of work done.<br /><br />This site is currently under development.'
    });
};

module.exports =
{
    about
};