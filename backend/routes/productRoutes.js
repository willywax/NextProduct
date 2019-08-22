import { Router } from 'express';
import fileupload from 'express-fileupload';
import ProductController from '../controllers/ProductController';
import validation from '../middlewares/productValidation';

const router = Router();

router.use(fileupload({
  useTempFiles: true,
}));

router.post('/', validation.productValidation, ProductController.addProduct);
router.get('/',ProductController.getAllProducts);


router.get('/:id', validation.productIdValidate, ProductController.viewProduct);

export default router;
