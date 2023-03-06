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

module.exports = {
    login,
};