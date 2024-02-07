const cors = require("cors");
const express = require("express");
const fetch = require("node-fetch"); // Make sure to install node-fetch with npm install node-fetch
const app = express();
const port = 3000;

const key = "05635c36859cc1ad617f0c7cbb493a9e";

app.use(
  cors({
    origin: "*", 
    methods: ["GET", "POST"], // allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // allowed headers
  })
);

// Serve static files from the 'public' directory (where your index.html file is)
app.use(express.static("public"));

// Route to get weather data
app.get("/weather/:city", async (req, res) => {
  console.log(req.params);
  const city = req.params.city;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

  try {
    const apiResponse = await fetch(url);
    const data = await apiResponse.json();
    res.json(data); // Send the weather data as a response
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching weather data");
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
