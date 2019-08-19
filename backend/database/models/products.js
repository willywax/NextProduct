const products = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    votes: DataTypes.ARRAY,
  }, {});
  Products.associate = (models) => {
    Products.belongsTo(models.Users, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };
  return Products;
};
export default products;
