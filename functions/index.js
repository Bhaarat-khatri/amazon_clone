const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51IpxTgSBtUitorQGlHztzWizFJgQzRSmdERRmMFVu8k730a9wPTL3sZRYd8Z3e5Ubfg7PKMlACi1ZiW43tBP3dgh001WmggO0V"
);

//API

//AppConfig
const app = express();

//MiddleWares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (req, res) => {
  res.status(200).send("Hello Kaustubh Madarchohd");
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("payment Request Received maaa chod di bhaiya g " + total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "INR",
  });
  //for Ok
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// Listen Command
exports.api = functions.https.onRequest(app);
