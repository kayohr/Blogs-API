const { User } = require('../models/index');

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

module.exports = {
    servicesLogion,
    servicesCreateUser,
    getAll,
    getById,
};