'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('posts_categories', {
      post_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          // Informa a tabela da referência da associação
          model: 'blog_posts',
          // Informa a coluna da referência que é a chave correspondente
          key: 'id',
      },
    },
      category_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          // Informa a tabela da referência da associação
          model: 'categories',
          // Informa a coluna da referência que é a chave correspondente
          key: 'id',
      },
    },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('posts_categories');
  },
};
