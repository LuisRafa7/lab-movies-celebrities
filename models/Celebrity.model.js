//  Add your code here
const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const celebSchema = new Schema(
  {
    name: {
      type: String,
    },
    occupation: {
      type: String,
    },
    catchPhrase: {
      type: String,
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Celeb = model("Celeb", celebSchema);

module.exports = Celeb;
