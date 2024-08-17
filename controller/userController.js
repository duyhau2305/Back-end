const authService = require('../services/authService');

exports.register = async (req, res) => {
  try {
    const token = await authService.registerUser(req.body);
    res.json(token);
  } catch (err) {
    console.error(err.message);
    res.status(400).json({ msg: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const token = await authService.loginUser(req.body);
    res.json(token);
  } catch (err) {
    console.error(err.message);
    res.status(400).json({ msg: err.message });
  }
};

exports.getCurrentUser = async (req, res) => {
  try {
    const user = await authService.getCurrentUser(req.user.id);
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: err.message });
  }
};
