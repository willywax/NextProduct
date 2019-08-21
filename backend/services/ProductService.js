/* eslint-disable no-useless-catch */
import database from '../database/models';

const { Products } = database;
class ProductService {
  static async addProduct(newProduct) {
    try {
      return await Products.create(newProduct);
    } catch (error) {
      throw error;
    }
  }

  static async countProducts(name) {
    try {
      return await Products.count({
        where: [{ name }],
      });
    } catch (error) {
      throw error;
    }
  }

  static async findProduct(id) {
    try {
      return await Products.findOne({
        where: [{ id }],
      });
    } catch (error) {
      throw error;
  }
}

  static async getAllProducts(){
    try{
      return await Products.findAll();
    }catch(error){
      throw error;
    }
  }
}

export default ProductService;
