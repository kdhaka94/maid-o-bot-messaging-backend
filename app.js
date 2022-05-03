/*
 * Starter Project for WhatsApp Echo Bot Tutorial
 *
 * Remix this as the starting point for following the WhatsApp Echo Bot tutorial
 *
 */

"use strict";

// Imports dependencies and set up http server
const request = require("request"),
  express = require("express"),
  body_parser = require("body-parser"),
  app = express().use(body_parser.json()); // creates express http server

// Sets server port and logs message on success
app.listen(process.env.PORT || 1337, () => console.log("webhook is listening"));

// Accepts POST requests at /webhook endpoint
app.post("/webhook", (req, res) => {
  // Parse the request body from the POST
  let body = req.body;

  // Check the Incoming webhook message
  console.log(JSON.stringify(req.body, null, 2));
  
  
  
  
    // access token for your app (copy from DevX getting started page)
  const token = 'EAAAO6uZBxesMBAOZBZBlDNPZA0rPXDdrRumSBHyn95uoJDA1akwDZAKggZAZCgv3PWHLmwMQk21MyeZCgxlSiSvXaeXf8PV9frjmh8dsr85PhSs9faOKZBT78ZARQAAc8jZBbCZAXYZALjj0Pw8NQ516mZAtRH9wFToy1iFWUZB2muw5MX3NgE729j43usIxgzBdl9G70eNdyC5nje188ysqEDycla8xHVwoWlUGVxhLSpGeWZBvRIZAGjkez3pmG0Uns7ehq3ayaLktevi9TQHiPdMBpHFamOO3mEfHqjusZD';
  // phone number id of your phone number you are sending from (copy from DevX getting started page)
  const num_id = '26902205832071';
    
  if (event.body.entry && event.body.entry[0].changes && event.body.entry[0].changes[0] && event.body.entry[0].changes[0].value.messages && event.body.entry[0].changes[0].value.messages[0] ) {
    let from = event.body.entry[0].changes[0].value.messages[0].from; // extract the phone number from the webhook payload
    let msg_body = event.body.entry[0].changes[0].value.messages[0].text.body; // extract the message text from the webhook payload
    $send.http({
      method: 'POST', // Required, HTTP method, a string, e.g. POST, GET
      url: "https://graph.facebook.com/v12.0/"+num_id+"/messages\?access_token=" + token,
      data: { "messaging_product": "whatsapp", "to": from, "text": {"body" : "ack: " + msg_body} },
      headers: { "Content-Type": "application/json" }
    });
  }
  
  
  
  
  
  
  
  
  
  

  // Validate the webhook
  if (req.body.object) {
    res.sendStatus(200);
  } else {
    // Return a '404 Not Found' if event is not from a whatsApp API
    res.sendStatus(404);
  }
});

// Accepts GET requests at the /webhook endpoint. You need this URL to setup webhook initially.
app.get("/webhook", (req, res) => {
  /** UPDATE YOUR VERIFY TOKEN
  This will be the Verify Token value when you set up webhook**/
  const VERIFY_TOKEN = "blue_panda";

  // Parse params from the webhook verification request
  let mode = req.query["hub.mode"];
  let token = req.query["hub.verify_token"];
  let challenge = req.query["hub.challenge"];

  // Check if a token and mode were sent
  if (mode && token) {
    // Check the mode and token sent are correct
    if (mode === "subscribe" && token === VERIFY_TOKEN) {
      // Respond with 200 OK and challenge token from the request
      console.log("WEBHOOK_VERIFIED");
      res.status(200).send(challenge);
    } else {
      // Responds with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);
    }
  }
});
