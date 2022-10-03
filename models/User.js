import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  username: String,
  name: String,
  email: String,
})

const User = models.User || model('User', UserSchema)

export default User
