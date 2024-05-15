const axios = require("axios");
// const { EOL } = require("os");
const TELEGRAM_URL =
  "https://api.telegram.org/bot" +
  process.env.BOT_TOKEN +
  "/sendMessage?chat_id=" +
  process.env.CHAT_ID +
  "&text=check&LB&slots";
module.exports = {
  notify: async function () {
    axios
      .get(TELEGRAM_URL)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
