const DesignPost = require('../models/Designs');

module.exports = async (req, res) => {
    const dPost = await DesignPost.find({}).limit(40).sort({_id: -1}).populate('userid');
    res.render('designs', {
        title: "Fashion Frenzy Designs & Inspirations",
        dPost
    })
}