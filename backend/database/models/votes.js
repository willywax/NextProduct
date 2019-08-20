const votes = (sequelize, DataTypes) => {
  const Votes = sequelize.define('Votes', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  }, {});
  Votes.associate = (models) => {
    Votes.belongsTo(models.Users, {
      foreignKey: 'userId',
    });
    Votes.belongsTo(models.Products, {
      foreignKey: 'productId',
      onDelete: 'CASCADE',
    });
  };
  return Votes;
};
export default votes;
