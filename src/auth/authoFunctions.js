const jwt = require('jsonwebtoken');
// const { loginService } = require('../services');
// require('dotenv/config');
const portToken = process.env.JWT_SECRET || 'secret';

const creatToken = (payload) => 
jwt.sign({ payload }, portToken, {
    algorithm: 'HS256',
    expiresIn: '1h',
});

const verifyToken = (token) => jwt.verify(token, portToken);

module.exports = {
    creatToken,
    verifyToken,
};

// const isLoginValid = (email, password) => email && password;

// module.exports = async (req, res) => {
//     try {
//         const {email, password} = req.body;
//         if(!isLoginValid(email, password)){
//             return res.status(401)
//             .json({message: ''});
//         }
//         const login = await loginService.getLogin(email);

//         if (!login || login.password !== password ) {
//             return res.status(401)
//             .json({ message: ''});
//         }
//         const { password: _, ...userWithoutPassord } = login.dataValues;
//         const token = jwt.sign({ payload: userWithoutPassord }, 'secret' , {
//             algorithm: 'HS256',
//             expiresIn: '1h',
//         });

//         res.status(200).json({ login: login.email, token })
//     } catch (err) {
// return res
// .status(500)

//     }

// }