require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const db = require("./routes.js");
const cors = require('cors')

const app = express();
app.use(cors({
  origin: "*",
}))

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


app.post('/api/subscribe-mail', db.submitMail)

app.listen(PORT, () => {
  console.log(`Listening on the port ${PORT}`);
})
