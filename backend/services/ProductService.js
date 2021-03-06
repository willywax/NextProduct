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

  static async updateProduct(id, product) {
    try {
      return await Products.update(product, {
        returning: true,
        where: [{ id }],
      });
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

  static async checkOwner(id, userId) {
    try {
      return await Products.count({
        where: [{ id, userId }],
      });
    } catch (error) {
      throw error;
    }
  }

  static async findProduct(id) {
    try {
      return await Products.findOne({
        where: [{ id }],
        include: [
          {
            model: database.Votes,
            as: 'Votes',
          },
          {
            model: database.Comments,
            as: 'Comments',
          },
        ],
      });
    } catch (error) {
      throw error;
    }
  }

  static async getAllProducts() {
    try {
      return await Products.findAll({
        include: [
          {
            model: database.Votes,
            as: 'Votes',
          },
        ],
      });
    } catch (error) {
      throw error;
    }
  }

  static async getMyProducts(userId) {
    try {
      return await Products.findAll({
        where: {
          userId,
        },
        include: [
          {
            model: database.Votes,
            as: 'Votes',
          },
        ],
      });
    } catch (error) {
      throw error;
    }
  }

  static async deleteProduct(id) {
    try {
      return await Products.destroy({
        where: [{ id }],
      });
    } catch (error) {
      throw error;
    }
  }
}

export default ProductService;
