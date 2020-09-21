const { Store } = require('../Models')

const terms = [];

const getData = async (findOption, cb) => {   
    await Store.find({ $text: { "$regex": findOption, "$options" : "i" } })
        .populate(terms)
        .exec({}, cb);
}

module.exports = {
    getData,
}