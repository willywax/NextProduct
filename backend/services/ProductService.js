import database from '../database/models';

class ProductService {
  static async addProduct(newProduct) {
    try {
      return await database.Products.create(newProduct);
    } catch (error) {
      throw error;
    }
  }

  static async countProducts(name) {
    try {
      return await database.Products.count({
        where: [{ name }],
      });
    } catch (error) {
      throw error;
    }
  }
}

export default ProductService;
