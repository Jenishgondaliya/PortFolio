import mongoose from "mongoose";

export default async function connectToDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://user:JenisH220503@cluster0.usrfu.mongodb.net/PortFolio?retryWrites=true&w=majority"
    );
    console.log("Database connected successfully");
  } catch (e) {
    console.log(e);
  }
}
