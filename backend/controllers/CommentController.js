import CommentService from '../services/CommentService';
import ProductService from '../services/ProductService';

class CommentController {
  static async createComment(req, res) {
    const comment = {
      userId: req.user.id,
      productId: parseInt(req.params.id, 10),
      comment: req.body.comment,
    };
    const product = await ProductService.findProduct(req.params.id);
    if (!product) {
      return res.status(404).send({
        status: res.statusCode,
        message: 'Product does not exist',
      });
    }

    try {
      const createComment = await CommentService.addComment(comment);
      return res.status(201).json({
        status: 201,
        message: 'Comment successfully added!',
        data: createComment,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: error,
      });
    }
  }
}

export default CommentController;
