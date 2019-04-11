/*Deflates ASCII and hex encoded strings to Base64 and Hex encoded strings*/
pako = require('pako');
const functions = require('firebase-functions');

const deflateBinData = (inflatedBinData) => {
  try{
    var binValue = pako.deflate(inflatedBinData);
  }catch(err){ throw functions.https.HttpsError('invalid-argument', err) }
  return binValue;
}

const deflateToHex = (buffer) => {
    try {
      return new Buffer(deflateBinData(buffer,'binary')).toString('hex')
    }catch(err) { throw err }
}

const deflateToBase64 = (buffer) => {
    try {
      return new Buffer(deflateBinData(buffer,'binary')).toString('base64')
    }catch(err) { throw err }
}

module.exports = {
  toBase64: deflateToBase64,
  toHex: deflateToHex,
}
