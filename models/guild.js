const mongoose = require('mongoose');

const guildSchema = mongoose.Schema({
    id: String,
    prefix: { 'type': String, 'default': '!' },
    logChannel: { 'type': String, 'default': '960248104471392337' }
});

module.exports = mongoose.model('Guild', guildSchema);