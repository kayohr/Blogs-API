module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
      id: { type: DataTypes.INTEGER, primaryKey: true, 
        // autoIncrement: true 
      },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: { type: DataTypes.INTEGER, foreignKey: true, },
      published: DataTypes.DATE,
      updated: DataTypes.DATE,

    },
    {
      timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
      tableName: 'blog_posts',
      underscored: true, // especifica que os nomes das colunas na tabela devem ser em snake_case (exemplo: employee_id) em vez de camelCase (exemplo: employeeId).
    });
  
    BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User, {
          foreignKey: 'userId',
          as: 'user',
        });
      };
    
  
    return BlogPost;
  };