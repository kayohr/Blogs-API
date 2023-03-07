const { creatToken } = require('../auth/authoFunctions');
const { loginService } = require('../services/index');

const login = async (req, res) => {
    const { email, password } = req.body;
    const getUser = await loginService.servicesLogion(email, password);
    console.log(getUser);
    if (!getUser) {
        return res.status(400).json({
            message: 'Invalid fields',
          });
    }
    const token = await creatToken(email);
    
   return res.status(200).json({ token });
};
const createUser = async (req, res) => {
    const { email, password, displayName, image } = req.body;
  
    try {
      const user = await loginService.servicesCreateUser(email, password, displayName, image);
      const token = await creatToken(user);
      return res.status(201).json({ token });
    } catch (e) {
      console.log(e.message);
      res.status(409).json({
        message: 'User already registered',
      });
    }
  };

  const getAll = async (_req, res) => {
    try {
      const employees = await loginService.getAll();
      console.log(employees);
      return res.status(200).json(employees);
    } catch (e) {
      console.log(e.message);
      // return res.status(401).json({ message: 'Expired or invalid token' });
    }
  };
        
  module.exports = {
    login,
    createUser,
    getAll,
};