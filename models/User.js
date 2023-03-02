const { Schema, model } = require('mongoose');

// Schema to create a course model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    },
    thoughts: {
        //TODO Array of `_id` values referencing the `Thought` model
    },
    friends: {
        //TODO Array of `_id` values referencing the `User` model (self-reference)
    }
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
    //TODO Create a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.
  }
);

const User = model('user', userSchema);

module.exports = User;
