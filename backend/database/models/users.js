const users = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    'Users',
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {},
  );
  Users.associate = (models) => {
    Users.hasMany(models.Products, {
      foreignKey: 'userId',
    });
    Users.hasMany(models.Votes, {
      foreignKey: 'userId',
    });
  };
  return Users;
};
export default users;
