const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const messageSchema = new Schema({
  origin: { type: Schema.Types.ObjectId, ref: 'User' },
  destination: { type:Schema.Types.ObjectId, ref: 'User' },
  text: String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('Message', userSchema);
