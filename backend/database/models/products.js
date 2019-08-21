const products = (sequelize, DataTypes) => {
  const Products = sequelize.define(
    'Products',
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {},
  );
  Products.associate = (models) => {
    Products.belongsTo(models.Users, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
    Products.hasMany(models.Votes, {
      foreignKey: 'productId',
    });
  };
  return Products;
};
export default products;
