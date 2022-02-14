const {postsService} = require('../service');

const creatPost = async(req, res)=>{
    const { title } = req.body;
    const post = await postsService.createPost({title});
    res.json(post);
}

const getAllPosts = async(req, res) => {
    const posts = await postsService.getAll();
    res.json(posts);
}

module.exports = {creatPost, getAllPosts}