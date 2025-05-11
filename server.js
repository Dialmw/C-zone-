
const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
app.use(bodyParser.json());

const accountSid = 'YOUR_TWILIO_ACCOUNT_SID';  // Replace with your Twilio SID
const authToken = 'YOUR_TWILIO_AUTH_TOKEN';    // Replace with your Twilio Auth Token
const client = new twilio(accountSid, authToken);

const adminPhone = 'whatsapp:+254783169602';

app.post('/notify', async (req, res) => {
  const { type, user, amount } = req.body;

  const message = `C-ZONE Notification:\nType: ${type}\nUser: ${user}\nAmount: ${amount} KES`;
  try {
    await client.messages.create({
      from: 'whatsapp:+14155238886', // Twilio sandbox number
      to: adminPhone,
      body: message,
    });
    res.send({ success: true });
  } catch (e) {
    res.status(500).send({ success: false, error: e.message });
  }
});

app.listen(3001, () => console.log('Notifier running on port 3001'));
