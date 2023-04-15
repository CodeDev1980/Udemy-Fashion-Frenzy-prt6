const InfoPost = require('../models/BlogPost');
const UserInfo = require('../models/Users');

module.exports = async (req, res) => {
    const singlePost = await InfoPost.findById(req.params.id).populate('userid');
    const user = await UserInfo.findById(req.params.id);
    res.render('post', {
        title: "Posted Articles for the Fashion Frenzy",
        singlePost, user
    })
}