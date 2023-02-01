const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/catching', (req, res) => {
  res.json({ probability: 0.5 });
  if (randomNumber <= 0.5) {
    console.log("The result is true with 50% probability");
  } else {
    console.log("The result is false with 50% probability");
  }
});

router.post('/release', (req, res) => {
  const isPrime = (num) => {
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num !== 1;
  }

  const releaseNumber = Math.floor(Math.random() * 100) + 1;
  if (isPrime(releaseNumber)) {
    res.send({
      success: true,
      message: `Released successfully with number ${releaseNumber}`,
    });
  } else {
    res.send({
      success: false,
      message: `Release failed with number ${releaseNumber}`,
    });
  }
});

module.exports = router;
