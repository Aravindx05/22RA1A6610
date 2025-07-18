const axios = require("axios");

const register = async () => {
  const response = await axios.post("http://20.244.56.144/evaluation-service/register", {
    email: "22ra1a6610@kpritech.ac.in",
    name: "ARAVIND REDDY BADDAM",
    mobileNo: "8328257728",
    githubUsername: "Aravindx05",
    rollNo: "22RA1A6610",
    accessCode: "qwtEMf"
  });

  console.log("Registered");
  console.log("clientID:", response.data.clientID);
  console.log("clientSecret:", response.data.clientSecret);
};

register();
