const env = require("./env");
let mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// mongoose.connect(env.linkDB, (err) => {
//     if (err) throw err;
//     else console.log('db connected');
// });
module.exports = mongoose;
