class HouseController {
  async store(req, res) {
    return res.json({
      house: true,
    });
  }
}

export default new HouseController();
