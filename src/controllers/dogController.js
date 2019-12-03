const dogServices = require('../services/dogServices');

const getDogList = async (req, res) => {
    const response = await dogServices.getDogList();
    res.setHeader('Content-Type', 'application/json');
    res.send(response || []);
};

const deleteDogList = async (req, res) => {
    const response = await dogServices.deleteDogList();
    res.setHeader('Content-Type', 'application/json');
    res.send(response);
};

const dogController = {
    getDogList,
    deleteDogList
};

module.exports = dogController;