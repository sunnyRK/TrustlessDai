// This compute witness script is inspired blockchain dev community from previous hackathon

const crypto = require('crypto');
const BN = require("bn.js");


function getSecretParams(concat) {
    return [concat.slice(0, 32), concat.slice(32, 64), concat.slice(64, 96), concat.slice(96)];
}

function getPublicParams(payload) {
    const buffer = Buffer.from(payload, 'hex');
    const digest = crypto.createHash('sha256').update(buffer).digest('hex');
    return [digest.slice(0, 32), digest.slice(32)]
}

function getPayload(owner, owneramount) {
  let address = new BN(owner, 16).toString(16, 64);
  let amount = new BN(owneramount, 16).toString(16, 64);
  return address + amount;
}

function getParams(owner, amount) {
    let payload = getPayload(owner, amount)
    let zkParams = getPublicParams(payload).concat(getSecretParams(payload));
    return zkParams;
} 

function formatWitness(params) {
    let command = "";
    params.forEach(param => {
      command += `${new BN(param, 16).toString(10)} `
    })
    console.log(command);
    return command;
}

export function getWitness(from, fAmount, to, tAmount) {
    console.log(parseInt(fAmount, 16), parseInt(tAmount, 16))
    from = from.slice(2)
    // fAmount = fAmount.slice(2)
    to = to.slice(2)
    // tAmount = tAmount.slice(2)
    console.log(fAmount, tAmount)
    var diff = parseInt(fAmount, 16) - parseInt(tAmount, 16)
    // var diff = parseInt(fAmount.slice(2), 16) - parseInt(tAmount.slice(2), 16)
    const params = getParams(from, fAmount).concat(getParams(to, tAmount));
    let leftOverWitness = getParams(from, diff);
    leftOverWitness.splice(2, 2);
    return formatWitness(params.concat(leftOverWitness));
}


// getWitness(
//     // "0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c",
//     '0x48845392F5a7c6b360A733e0ABE2EdcC74f1F4d6', // sender
//     '11111111111111', // value of the secret note
//     '0xE33f4C2306eFE9BF66a64A3c42408d2Fe1Cb890f', // receiver
//     '1' // value to be sent
//   );

