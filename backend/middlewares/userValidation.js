import Joi from '@hapi/joi';

class validation {
  static async validateUser(req, res, next) {
    const schema = Joi.object().keys({
      email: Joi.string().email(),
      firstName: Joi.string().alphanum().min(3).max(30)
        .required()
        .error(() => 'Enter a valid first name'),
      lastName: Joi.string().alphanum().min(3).max(30)
        .required()
        .error(() => 'Enter a valid last name'),
      password: Joi.string().regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/).error(() => 'Enter a valid password'),
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


export default validation;
