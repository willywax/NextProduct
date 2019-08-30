import ProductService from '../services/ProductService';
import uploader from '../utils/cloudinary';

const client = new Twitter({
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token_key: process.env.access_token_key,
  access_token_secret: process.env.access_token_secret,
});


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

  static async updateProduct(req, res) {
    const product = req.body;
    const { id } = req.user;
    const productExists = await ProductService.findProduct(req.params.id);
    if (productExists === null) {
      return res.status(404).json({
        status: 404,
        message: 'Product doesn\'t exist',
      });
    }
    const isOwner = await ProductService.checkOwner(req.params.id, id);
    if (!isOwner) {
      return res.status(401).json({
        status: 401,
        message: 'You can not edit this product',
      });
    }
    if (req.files) {
      const file = req.files.photo;
      const image = await uploader(file.tempFilePath);
      product.image = image.url;
    }
    try {
      const [rowsNumber, [{ dataValues }]] = await ProductService.updateProduct(req.params.id, product);
      return res.status(201).json({
        status: 200,
        message: 'Product successfully updated!',
        data: dataValues,
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

  static async getAllProducts(req, res) {
    try {
      const allProducts = await ProductService.getAllProducts();
      for (let i = 0; i < allProducts.length; i++) {
        allProducts[i].dataValues.Votes = allProducts[i].dataValues.Votes.length;
      }
      res.status(200).json({
        status: 200,
        message: 'Successfully retrieved all products',
        data: allProducts,
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: error,
      });
    }
  }

  static async getMyProducts(req, res) {
    try {
      const allProducts = await ProductService.getMyProducts(req.user.id);
      for (let i = 0; i < allProducts.length; i++) {
        allProducts[i].dataValues.Votes = allProducts[i].dataValues.Votes.length;
      }
      res.status(200).json({
        status: 200,
        message: 'Successfully retrieved all your products',
        data: allProducts,
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: error,
      });
    }
  }

  static async deleteProduct(req, res) {
    const productId = req.params.id;
    const { id } = req.user;
    const productExists = await ProductService.findProduct(productId);
    if (productExists === null) {
      return res.status(404).json({
        status: 404,
        message: 'Product doesn\'t exist',
      });
    }
    const isOwner = await ProductService.checkOwner(req.params.id, id);
    if (!isOwner) {
      return res.status(401).json({
        status: 401,
        message: 'You can not delete this product',
      });
    }
    const deleteStatus = await ProductService.deleteProduct(productId);
    if (deleteStatus) {
      return res.status(200).json({
        status: res.statusCode,
        message: 'Product deleted successfully',
      });
    }
    return res.status(404).json({
      status: res.statusCode,
      message: 'Product does not exist',
    });
  }
}

export default ProductController;
