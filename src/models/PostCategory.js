 module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
      postId: { type: DataTypes.INTEGER, foreignKey: true, 
        // autoIncrement: true 
      },
      categoryId: DataTypes.STRING,
      foreignKey: true,

    },
    {
      timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
      tableName: 'posts_categories',
      underscored: true, // especifica que os nomes das colunas na tabela devem ser em snake_case (exemplo: employee_id) em vez de camelCase (exemplo: employeeId).
    });
  
    PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    })
   
      models.Category.belongsToMany(models.BlogPost, {
        as: 'blogposts',
        through: PostCategory,
        foreignKey: 'categoryId',
        otherKey: 'postId',
    })
    }
  
  
    return PostCategory;
  };