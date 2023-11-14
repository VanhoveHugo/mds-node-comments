module.exports = (server) => {
    const postController = require("../controllers/postController");
    const commentController = require("../controllers/commentController");
    
    server.route("/posts")
    .get(postController.getAll)
    .post(postController.createOne);


    server.route("/posts/:id/comments")
    .get(commentController.getAllByPostId)
    .post(commentController.postExists, commentController.createOne);    

    server.route("/comments/:id")
    .get(commentController.getOne)
    .put(commentController.updateOne)
    .delete(commentController.deleteOne);
}