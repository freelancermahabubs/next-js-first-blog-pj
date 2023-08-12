import mongoose from "mongoose";
const dbConnect = async () => {
  if (mongoose.connections.readyState >= 1) {
    return;
  }
  mongoose.connect(process.env.DB_URI);
};
export default dbConnect;
