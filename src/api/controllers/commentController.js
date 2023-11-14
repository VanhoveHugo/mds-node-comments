const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

exports.postExists = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post) {
            next();
        } else {
            res.status(404);
            res.json({ message: "Post non trouvé." });
        }
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({ message: "Erreur serveur." })
    }
}

exports.getAll = async(req, res) => {
    try {
        const result = await Comment.find({ post_id: req.params.id });
        res.status(200);
        res.json(result);

    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({ message: "Erreur serveur." })
    }
}

exports.getOne = async(req, res) => {
    try {
        const result = await Comment.findById(req.params.id);
        res.status(200);
        res.json(result);
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({ message: "Erreur serveur." })
    }
}

exports.updateOne = async(req, res) => {
    try {
        let comment = await Comment.findById(req.params.id);
        comment.message = req.body.message;
        comment = await comment.save();
        res.status(200);
        res.json(comment);
    }
    catch (error) {
        res.status(500);
        console.log(error);
        res.json({ message: "Erreur serveur." })
    }
}

exports.deleteOne = async(req, res) => {
    try {
        const result = await Comment.findByIdAndDelete(req.params.id);
        res.status(200);
        res.json(result);
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({ message: "Erreur serveur." })
    }
}

exports.getAllByPostId = async(req, res) => {
    try {
        const result = await Comment.find({ post_id: req.params.id });
        res.status(200);
        res.json(result);
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({ message: "Erreur serveur." })
    }
}

exports.createOne = async (req, res) => {
    const newPost = new Comment(req.body);
    newPost.post_id = req.params.id;
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
