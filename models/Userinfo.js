import { Schema, model, models } from 'mongoose';

const UserinfoSchema = new Schema({
  username: String,
  name: String,
  email: String,
})

const Userinfo = models.Userinfo || model('Userinfo', UserinfoSchema)

export default Userinfo
