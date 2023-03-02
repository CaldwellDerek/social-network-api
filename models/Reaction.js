const { Schema, model } = require('mongoose');
const dayjs = require("dayjs");

// Schema to create a course model
const reactionSchema = new Schema(
  {
    reactionId: {
        /*TODO
              * Use Mongoose's ObjectId data type
                * Default value is set to a new ObjectId
        */
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280 
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: dayjs().format("YYYY/MM/DD - hh-mm-ss")
        // * Use a getter method to format the timestamp on query
    }
  },
  {
    toJSON: {
      virtuals: true,
    },
    // id: false,
  }
);

const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;
