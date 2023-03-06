module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id: { type: DataTypes.INTEGER, primaryKey: true, 
        // autoIncrement: true 
      },
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
      tableName: 'users',
      underscored: true, // especifica que os nomes das colunas na tabela devem ser em snake_case (exemplo: employee_id) em vez de camelCase (exemplo: employeeId).
    });
  
    User.associate = (models) => {
        User.hasMany(models.blog_post,                           //associação de "User" para "blog_post", usando o método "hasMany". Isso significa que um usuário pode ter vários posts de blog
        { foreignKey: 'user_Id', as: 'blogposts' });             //especifica que a chave estrangeira será usada para vincular os dois modelos e a opção "as" define o nome que será usado para a associação.
    };
  
    return User;
  };