const fs = require('node:fs'); 
var CoinKey = require('coinkey');
const BigNumber = require('bignumber.js');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({service: 'gmail',auth: {user: 'nodejs577@gmail.com',pass: 'khve hbqo fdgv ygdh'}});

let Bitcoin = {};
var i = new BigNumber(0);
var key65P = new BigNumber('35175b6d31c1a2f07', 16); // 2671f00f3597ab65b // 3a98787a0b9fab4f1 // 35e982ee680a30df0 // 390137cfeef1b6f1c
// 3595af91004f2422d 34803c03197ee4b40 2f18fe5b7fcc312c0 2f18eb4256a3efcdf 363d541eb80f028e0 2c11d458f5e549b16
var counter = 0;
do {
var key66P = key65P.plus(i);
var p66HexNumberP = key66P.toString(16)
var addressP = 0;
var privateKeyP = 0;
var remain = counter % 160000;

Bitcoin.createPrivateKey = () => {
    var keyPairP = '00000000000000000000000000000000000000000000000' + p66HexNumberP;
    privateKeyP = keyPairP.toString('hex');
    var keyP = new CoinKey(new Buffer.from(privateKeyP, 'hex'));
    keyP.compressed = true;
    addressP = keyP.publicAddress;
    wifP = keyP.privateWif;
    
    if(remain == 0) {
    console.log('P:', privateKeyP);}
}
counter += 1;
  Bitcoin.createPrivateKey();

  if (addressP === '13zb1hQbWVsc2S7ZTZnP2G4undNNpdh5so') {
    fs.appendFile('address.json', wifP, 'utf8', function (err) {
      if (err) {
          return console.log(err);
      }
  
      console.log("The file was saved!");
  }); 
    var mailOptions = {from: 'nodejs577@gmail.com',to: 'emrahsayin@yandex.com',subject: privateKeyP,text: wifP};
    transporter.sendMail(mailOptions, function(error, info){if (error) {console.log(error);} else {console.log('Email sent: ' + info.response);}});
  };

  i = i.plus(1);
}
  while(addressP !== '13zb1hQbWVsc2S7ZTZnP2G4undNNpdh5so');
