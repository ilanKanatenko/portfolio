import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  googleId: String,
  userName: String,
  email: String,
});

const User = mongoose.model("User", userSchema);
