import Joi from '@hapi/joi';

class validation {
  static async productValidation(req, res, next) {
    const schema = Joi.object().keys({
      name: Joi.string().max(30).required()
        .error(() => 'You have to enter a valid name. Example: Netflix'),
      description: Joi.string().min(3).max(250).required()
        .error(() => 'You have to enter a valid description'),
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
  };
}

export default validation;
