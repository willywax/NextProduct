import Joi from '@hapi/joi';

class CommentValidation {
  static async addCommentValidation(req, res, next) {
    const schema = Joi.object().keys({
      comment: Joi.string().trim().min(3).max(30)
        .required()
        .error(() => 'Comment should be string and  have characters between 3 and 30'),
    });
    await schema.validate(req.body, (err) => {
      if (err) {
        res.status(400).json({
          status: 400,
          message: err.details[0].message,
        });
      } else {
        next();
      }
    });
  }
}

export default CommentValidation;
