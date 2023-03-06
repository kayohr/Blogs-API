const { User } = require('../models/index');

const servicesLogion = async (email, password) => {
const getAcess = await User.findOne({ where: { email, password } });
console.log(getAcess);
return getAcess;
};

module.exports = {
    servicesLogion,
};