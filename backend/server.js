const express = require('express')
const Stripe = require('stripe');
const app = express()
const dotenv = require('dotenv')
dotenv.config()

const stripe = new Stripe('YOUR_SECRET_KEY');   
app.use(cors());
app.use(express.json());


app.listen(process.env.BACKEND_PORT, () => {
  console.log(`Server is running on port ${process.env.BACKEND_PORT}...`)
})