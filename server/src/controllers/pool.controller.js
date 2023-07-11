const { PoolModel } = require("../models");

const createPool = async (req, res) => {
    console.log('====================================');
    console.log(req.body);
    console.log('====================================');
    await PoolModel.create({
        name: "smth",
        userId: 68, 
    });
    res.status(200).send('ok')
}

const getPoolsOfUser = async (req, res) => {
    console.log(req.params.id);
    res.end()
}

const PoolController = {
    createPool,
    getPoolsOfUser
}
module.exports = PoolController;