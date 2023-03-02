const { Schema, model } = require('mongoose');
const dayjs = require("dayjs");

const thoughtSchema = new Schema(
  {
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        default: dayjs().format("YYYY/MM/DD - hh-mm-ss")
        //TODO
        // * Use a getter method to format the timestamp on query
    },
    username: {
        type: String,
        required: true
    },
    reactions: {
        //TODO
        // * Array of nested documents created with the `reactionSchema`
    }
  },
  {
    toJSON: {
      virtuals: true,
    },
    // id: false,
    //TODO
    //Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.
  }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
