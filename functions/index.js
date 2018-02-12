'use strict';

const express     = require('express');
const bodyParser  = require('body-parser');
const functions   = require('firebase-functions');

const MessageGeneratorService = require('./services/MessageGeneratorService');
const EmailSenderService      = require('./services/EmailSenderService');

const app = express();

app.use(bodyParser.json());


// POST /email
app.get('/email', (req, res) => {
  const { email, message, company, first, last } = req.query;

  const text = MessageGeneratorService.generateMessageText(
    { message, first, last, company, email }
  );

  if(!email) {
    res.status(400).json({error: "Email Required"});
  }

  return EmailSenderService.sendMail(text)
    .then(() => res.status(200).json({}))
    .catch((error) => {
      console.log(error);
      res.status(500).json(error)
    });
});

exports.api = functions.https.onRequest(app);
