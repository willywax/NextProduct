import ProductService from '../services/ProductService';
import uploader from '../utils/cloudinary';

class ProductController {
  static async addProduct(req, res) {
    const newProduct = req.body;
    newProduct.userId = req.user.id;
    const productExists = await ProductService.countProducts(newProduct.name);
    if (productExists) {
      return res.status(409).json({
        status: 409,
        message: 'Product already exists',
      });
    }
    if (req.files) {
      const file = req.files.photo;
      const image = await uploader(file.tempFilePath);
      newProduct.image = image.url;
    }
    try {
      const createdProduct = await ProductService.addProduct(newProduct);
      return res.status(201).json({
        status: 201,
        message: 'Product successfully added!',
        data: createdProduct,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: error,
      });
    }
  }

  static async viewProduct(req, res) {
    const productId = req.params.id;
    const viewProduct = await ProductService.findProduct(productId);
    if (viewProduct) {
      return res.status(200).json({
        status: res.statusCode,
        message: 'Product retrieved successfully',
        data: viewProduct,
      });
    }
    return res.status(404).json({
      status: res.statusCode,
      message: 'Product does not exist',
    });
  }
  static async getAllProducts(req,res){
    try {
      const allProducts = await ProductService.getAllProducts();

      res.status(200).json({
        status: 200,
        message: 'Successfully retrieved all your products',
        data: allProducts,
      });
      
    }catch (error){
      res.status(500).json({
        status: 500,
        message: error,
      });
    }
  }
}

export default ProductController;
