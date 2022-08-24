const otpGenerator = require('otp-generator');


const generateOTP = () => {

  // generate the otp
  var otp = Math.random();
  otp = otp * 1000000;
  otp = parseInt(otp);
  console.log(otp);

  return otp;
};

module.exports = {generateOTP}