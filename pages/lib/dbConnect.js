import mongoose from 'mongoose';

const dbConnect = async () => mongoose.connect(process.env.MONGODB_URI);

export default dbConnect