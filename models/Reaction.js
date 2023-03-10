const { Schema, Types } = require('mongoose');
const dayjs = require("dayjs");


const reactionSchema = new Schema(
  {
    reactionId: {
       type: Schema.Types.ObjectId,
       default: () => new Types.ObjectId()
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
        type: String,
        default: dayjs().format("MM/DD/YYYY [at] hh:mm A")
    }
  },
  {
    toJSON: {
      virtuals: true,
    }
  }
);

module.exports = reactionSchema;