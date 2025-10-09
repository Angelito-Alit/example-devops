const crypto = require('crypto');

function hash(mensaje) {
  const hashObj = crypto.createHash('sha256');
  hashObj.update(mensaje);
  return hashObj.digest('hex');
}

module.exports = hash;