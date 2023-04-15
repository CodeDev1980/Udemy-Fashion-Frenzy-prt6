const Design = require('../models/Designs');
const UserInfo = require('../models/Users');

module.exports = async (req, res) => {
    const singleDesign = await Design.findById(req.params.id).populate('userid');
    const user = await UserInfo.findById(req.params.id);
    res.render('designDB', {
        title: "Posted Articles for the Fashion Frenzy",
        singleDesign, user
    })
}