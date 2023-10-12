var express = require("express");
var router = express.Router();
var axios = require("axios");

/* GET users listing. */
router.get("/", function (req, res, next) {
  axios
    .get("https://jsonplaceholder.typicode.com/comments?postId=1")
    .then((response) => {
      console.log(response);
      res.status(200).json(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
