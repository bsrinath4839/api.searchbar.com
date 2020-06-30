// import { getData } from '../dbops'
const DBOps  = require ('../dbops');

const Data = async (req, res) => {
   // console.log("body", req.body.text);
    
    await DBOps.getData(req.body.keyword, (err, results) => {
        //console.log(err, results);
        
        if (err) {
            res.status(400).send({ "err": err });
        } else if (results) {
            res.status(200).send({ "results": results })
        }
    })
}

module.exports = {
    Data,
}
