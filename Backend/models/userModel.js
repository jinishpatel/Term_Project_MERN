const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");
const JWTToken = require("jsonwebtoken");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name!"],
    maxlength: [40, "A user name must have less or equal then 40 characters"],
    minlength: [4, "A user name must have more or equal then 4 characters"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please provide your email!"],
    validate: [validator.isEmail, "Please provide a valid email!"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password!"],
    minlength: [8, "A password must have more or equal then 8 characters"],
    select: false,
  },
  avatar: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  role: {
    type: String,
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password") || this.isNew) {
    try {
      this.password = await bcrypt.hash(this.password, 10);
      next();
    } catch (err) {
      return next(err);
    }
  } else {
    next();
  }
});

//JWT token
userSchema.methods.getJWTToken = function () {
  return JWTToken.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_TIME,
  });
};

//compare password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

//gerenate password reset token
userSchema.methods.getResetPasswordToken = function () {
  //generate token
  const resetToken = crypto.randomBytes(20).toString("hex");
  //hash and set to resetPasswordToken
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  console.log("resetPasswordToken: " + this.resetPasswordToken);
  //set token expire time
  this.resetPasswordExpire = Date.now() + 30 * 60 * 1000;
  return resetToken;
};

module.exports = mongoose.model("User", userSchema);
