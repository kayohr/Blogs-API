const validLogin = (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            message: 'Some required fields are missing',
          });
    }

    next();
};

const validDisplayName = (req, res, next) => {
    const { displayName } = req.body;
    if (displayName.length < 8) {
        return res.status(400).json({
            message: '"displayName" length must be at least 8 characters long',
          });
    }

    next();
};

const validEmail = (req, res, next) => {
    const { email } = req.body;
    const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            message: '"email" must be a valid email',
          });
    }

    next();
};

const validPassword = (req, res, next) => {
    const { password } = req.body;
    if (password.length < 6) {
        return res.status(400).json({
            message: '"password" length must be at least 6 characters long',
          });
    }

    next();
};

module.exports = {
    validLogin,
    validDisplayName,
    validEmail,
    validPassword,
};