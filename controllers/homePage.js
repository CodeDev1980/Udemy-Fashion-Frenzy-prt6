const BlogPost = require("../models/BlogPost");

module.exports = async (req, res) => {
    const blogs = await BlogPost.find({}).limit(3).sort({_id: -1}).populate('userid');
    res.render("index", {
        title: "Introduction page for this website and content",
        blogs
    })
}