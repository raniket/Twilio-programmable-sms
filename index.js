// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = `${process.env.ACCOUNT_SID}`;
const authToken = `${process.env.AUTH_TOKEN}`;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
    from: `${process.env.FROM_PHONE_NUMBER}`,
    to: `${process.env.TO_PHONE_NUMBER}`
  })
  .then(message => console.log(message.sid))
  .done();
