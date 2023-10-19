const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    mail: {
      type: String,
      unique: true,
    },
    password: String,
  },
  { timestamps: true }
);

export const UserModel = mongoose.model("User", UserSchema);
