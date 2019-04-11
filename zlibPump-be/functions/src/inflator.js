/*Inflates base64 and hex encoded strings*/

const  pako = require('pako');
const functions = require('firebase-functions');

const inflateBinData = (deflatedBinData) => {
  try{
    var binValue = pako.inflate(deflatedBinData);
  }catch(err){ throw new functions.https.HttpsError('invalid-argument', err) }
  return binValue;
}

const inflateToHex = (buffer) => {
  try{
    return new Buffer(inflateBinData(buffer,'binary')).toString('hex')
  }catch(err) { throw err }
}

const inflateToAscii = (buffer) => {
  try{
    return new Buffer(inflateBinData(buffer,'binary')).toString('ascii')
  }catch(err) { throw err }
}

module.exports = {
  toAscii: inflateToAscii,
  toHex: inflateToHex,
}
