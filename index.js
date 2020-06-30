const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

const GetData = require('./Routes')

const { dburl, port } = require("./config");

mongoose.connect(dburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex : true,
});
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);

app.set('port', (port));
app.listen(app.get('port'), function () {
    console.log('Server started on port ' + app.get('port'))//, dburl);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post("/", async (req, res) => {
    await GetData.Data(req, res);
})
