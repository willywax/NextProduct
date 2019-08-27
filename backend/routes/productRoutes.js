import { Router } from 'express';
import fileupload from 'express-fileupload';
import ProductController from '../controllers/ProductController';
import Votes from '../controllers/votesController';
import validation from '../middlewares/productValidation';

import commentValidation from '../middlewares/commentValidation';
import commentController from '../controllers/CommentController';

const router = Router();

router.use(fileupload({
  useTempFiles: true,
}));

router.post('/', validation.productValidation, ProductController.addProduct);
router.get('/', ProductController.getAllProducts);
router.patch('/:id', validation.productUpdateValidation, ProductController.updateProduct);
router.get('/myproducts', ProductController.getMyProducts);
router.get('/:id', validation.productIdValidate, ProductController.viewProduct);
router.delete('/:id', validation.productIdValidate, ProductController.deleteProduct);

router.post('/:id/vote', validation.productIdValidate, Votes.voteProduct);

router.post('/:id/comment', validation.productIdValidate, commentValidation.addCommentValidation, commentController.createComment);

export default router;
