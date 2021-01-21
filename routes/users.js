var express = require("express");
var router = express.Router();
const MongoClient = require("mongodb").MongoClient;

router.post("/chat", (req, res, next) => {
  let newUser = req.body;
  MongoClient.connect(
    process.env.URL,
    { useUnifiedTopology: true },
    (err, con) => {
      let sample_training = con.db("sample_training");
      sample_training
        .collection("ChatCollection")
        .insertOne(newUser, (err, result) => {
          if (err) throw err;
          console.log(newUser);
          res.send(result);
          con.close();
        });
    }
  );
});

router.get("/recive", (req, res, next) => {
  MongoClient.connect(
    process.env.URL,
    { useUnifiedTopology: true },
    (err, con) => {
      if (err) throw err;
      let sample_training = con.db("sample_training");
      sample_training
        .collection("ChatCollection")
        .find()
        .toArray((err, result) => {
          if (err) throw err;
          res.send(result);
          con.close();
        });
    }
  );
});
module.exports = router;
