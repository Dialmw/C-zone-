
const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
app.use(bodyParser.json());

const accountSid = 'ACb3657ee99aaa6995efd37f4279995a0f';  // Replace with your Twilio SID
const authToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTS3h4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4LTE0NTA0NzExNDciLCJpc3MiOiJTS3h4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4Iiwic3ViIjoiQUN4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eCIsIm5iZiI6MTQ1MDQ3MTE0NywiZXhwIjoxNDUwNDc0NzQ3LCJncmFudHMiOnsiaWRlbnRpdHkiOiJ1c2VyQGV4YW1wbGUuY29tIiwiaXBfbWVzc2FnaW5nIjp7InNlcnZpY2Vfc2lkIjoiSVN4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eCIsImVuZHBvaW50X2lkIjoiSGlwRmxvd1NsYWNrRG9ja1JDOnVzZXJAZXhhbXBsZS5jb206c29tZWlvc2RldmljZSJ9fX0.IHx8KeH1acIfwnd8EIin3QBGPbfnF-yVnSFp5NpQJi0';    // Replace with your Twilio Auth Token
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
