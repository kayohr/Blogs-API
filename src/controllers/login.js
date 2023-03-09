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
    const token = creatToken({ email, id: getUser.dataValues.id });
    
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

  const getById = async (req, res) => {
    try {
    const { id } = req.params;

    const byId = await loginService.getById(id);
    if (!byId) {
 return res.status(404).json({
      message: 'User does not exist',
    }); 
}
    return res.status(200).json(byId);
  } catch (e) {
    console.log(e.message);
    // res.status(500).json({ message: error500Message });
    }
  };

  const newCategory = async (req, res) => {
    const { name } = req.body;
    try {
      const validName = await loginService.getName(name);
      
      return res.status(201).json(validName);
    } catch (e) {
      console.log(e.message);
      return res.status(404).json(); 
      }
  };

  const getCategory = async (req, res) => {
    try {
      const getCategories = await loginService.getAllCategory();
      console.log('aaaaaaaa', getCategories);
      return res.status(200).json(getCategories);
    } catch (error) {
      console.log(error);
      return res.status(401).json({ error }); 
    }
  };
        
  // const newPost = async (req, res) => {
  //   try {
  //     const { title, content, categoryIds } = req.body;
  //     const { payload: { id } } = req.User;
  //     const newPosts = await loginService.creatPost(title, content, categoryIds, id);
  //         if (!newPosts) {
  //           return res.status(400).json({
  //             message: 'Some required fields are missing',
  //           }); 
  //       }
  //           return res.status(201).json(newPosts);
  //         } catch (error) {
  //           console.log(error.message);
  //           }
  // };
  const getPost = async (_req, res) => {
    // const post = await loginService.getPostAll();
    // console.log(post);
    // return res.status(200).json(post);
    try {
    const post = await loginService.getPostAll();
      return res.status(200).json(post);
  } catch (e) {
      console.log(e.message);
    }
  };

  module.exports = {
    login,
    createUser,
    getAll,
    getById,
    newCategory,
    getCategory,
    // newPost,
    getPost,
};