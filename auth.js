const axios = require("axios");
require("dotenv").config();
const fs = require("fs");

const getToken = async () => {
  const res = await axios.post("http://20.244.56.144/evaluation-service/auth", {
    email: process.env.EMAIL,
    name: process.env.NAME,
    rollNo: process.env.ROLL_NO,
    accessCode: process.env.ACCESS_CODE,
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
  });

  const token = res.data.access_token;
  fs.writeFileSync("token.txt", token);
  console.log("Access Token saved to token.txt");
};

getToken();
