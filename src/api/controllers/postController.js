const Post = require("../models/postModel");

exports.getAll = async(req, res) => {
    try {
        const data = await Post.find({});
        res.status(200);
        res.json(data);

    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({ message: "Erreur serveur." })
    }
}

exports.createOne = async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const post = await newPost.save();
        res.status(201);
        res.json(post);
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({ message: "Erreur serveur." })
    }
}