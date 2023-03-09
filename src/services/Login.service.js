// const Sequelize = require('sequelize');
const { User } = require('../models/index');
const { Category } = require('../models/index');
const { BlogPost } = require('../models/index');
// const { PostCategory } = require('../models/index');

const servicesLogion = async (email, password) => {
const getAcess = await User.findOne({ where: { email, password } });
console.log(getAcess);
return getAcess;
};

// const servicesCreateUser = async (email, password, displayName, image) => {
//     const getAcessUser = await User.findAll({ email, password, displayName, image });
//     return getAcessUser;
//     };
const servicesCreateUser = async (email, password, displayName, image) => {
    const users = await User.create({ email, password, displayName, image });
  
    return users;
  };

  const getAll = async () => {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });
  
    return users;
  };

  const getById = async (id) => {
    const users = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });
    // const users = await User.findOne();
  
    return users;
  };

  const getName = async (name) => {
    const users = await Category.create({ name });
    // const users = await User.findOne();
  
    return users;
  };

  const getAllCategory = async () => {
    const getIdName = await Category.findAll();
  
    return getIdName;
  };

  // const creatPost = async (title, content, categoryIds, id) => {
  //   const result = await Sequelize.transaction(async (t) => {
  //   const createPost = await BlogPost.create({ title, content, userId: id },
  //      { transaction: t });
  //      await categoryIds.forEach(async (element) => {
  //      await User.create({
  //       userId: element.id,
  //     }, { transaction: t });
  //   });
  //     return createPost;
  //   });
  //   return result;
  // };

  const getPostAll = async () => {
    const users = await BlogPost.findAll({
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });
  console.log(users);
    return users;
  };

module.exports = {
    servicesLogion,
    servicesCreateUser,
    getAll,
    getById,
    getName,
    getAllCategory,
    // creatPost,
    getPostAll,
};