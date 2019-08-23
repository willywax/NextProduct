
module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define('Comments', {
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    comment: DataTypes.STRING,
  }, {});
  Comments.associate = (models) => {
    // associations can be defined here
    Comments.belongsTo(models.Users, {
      foreignKey: 'userId',
    });
    Comments.belongsTo(models.Products, {
      foreignKey: 'productId',
      onDelete: 'CASCADE',
    });
  };
  return Comments;
};
