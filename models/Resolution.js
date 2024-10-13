const mongoose = require('mongoose');

const resolutionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  status: { type: String, enum: ['pending', 'approved', 'denied'], default: 'pending' },
  votes: { type: Number, default: 0 },
  resolutionLink: {type: String},
  submittedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Resolution', resolutionSchema);
