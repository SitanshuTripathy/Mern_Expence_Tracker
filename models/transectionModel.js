const mongoose = require("mongoose");

const transectionSchema = new mongoose.Schema(
  {
    userid:{
      type:String,
      required:[true,'The user id is required']
    },
    amount: {
      type: Number,
      required: [true, "Please enter the Amount"],
    },
    type:{
      type: String,
      required:[true,"Type is required"]

    },
    category: {
      type: String,
      required: [true, "Category must be defined"],
    },
    refrence: {
      type: String,
    },
    description: {
      type: String,
      required: [true, "Please provide the description"],
    },
    date: {
      type: Date,
      required: [true, "date is required"],
    },
  },
  { timestamps: true }
);

const transectionModel = mongoose.model("transections", transectionSchema);

module.exports=transectionModel;
