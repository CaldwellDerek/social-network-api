const { Schema, model } = require('mongoose');
const reactionSchema = require("./Reaction");
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
    },
    username: {
        type: String,
        required: true
    },
    reactions: [
        reactionSchema
    ]
  },
  {
    toJSON: {
      virtuals: true,
    }
  }
);

thoughtSchema.virtual('friendCount').get( ()=> {
    return this.reactions.length;
});

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
