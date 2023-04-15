const DeletePost = require('../models/Designs');

module.exports = async (req, res) => {
    await DeletePost.findByIdAndDelete(req.params.id)
    res.redirect('/designs')
}