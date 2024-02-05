const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_DB, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
}, { collection: 'users' });

const User = mongoose.model('User', UserSchema);

module.exports = User;