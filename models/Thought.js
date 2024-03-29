const { model, Schema } = require('mongoose')

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
        },
        username: {
            type: String,
            required: true,
        },
        reactions: {
            type: Schema.Types.ObjectId,
            ref: 'reaction'
        }
    },
    {
        toJSON: {
            virtuals: true,
          },
          id: false,
    }
)

thoughtSchema
    .virtual('reactionCount')
    .get(function() {
        return this.reactions.length
    })

const Thought = model('thought', thoughtSchema)

module.exports = { Thought }