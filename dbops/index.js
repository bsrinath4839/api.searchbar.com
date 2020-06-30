const { Store } = require('../Models')
const { Model } = require('mongoose')



const terms = [];

const getData = async (findOption, cb) => {   
    await Store.find({ $text: { $search: findOption } })
        .populate(terms)
        .exec({}, cb);
}

module.exports = {
    getData,
}