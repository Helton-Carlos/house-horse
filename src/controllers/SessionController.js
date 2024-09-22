import UserModel from '../model/User.model.js';

class SessionController {
  async store(req, res) {
    const { email } = req.body;

    let user = await UserModel.findOne({ email });

    if (!user) {
      await UserModel.create({ email });
    }

    return res.json(user);
  }
}

export default new SessionController();
