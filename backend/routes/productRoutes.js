import { Router } from 'express';
import fileupload from 'express-fileupload';
import ProductController from '../controllers/ProductController';
import Votes from '../controllers/votesController';
import validation from '../middlewares/productValidation';

const router = Router();

router.use(fileupload({
  useTempFiles: true,
}));

router.post('/', validation.productValidation, ProductController.addProduct);
router.get('/', ProductController.getAllProducts);
router.patch('/:id', validation.productUpdateValidation, ProductController.updateProduct);
router.get('/:id', validation.productIdValidate, ProductController.viewProduct);

router.post('/:id/vote', validation.productIdValidate, Votes.voteProduct);

export default router;
