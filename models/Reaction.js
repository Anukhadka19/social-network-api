const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    Reactionbody: {
      type: String,
      required: true,
      maxlength: 200,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      get: timestamp => {
        const date = new Date();
        return date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear()
      }
    }
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
