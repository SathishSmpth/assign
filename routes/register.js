var express = require('express');
const UserData = require('../Schema');
var router = express.Router();

router.post('/register', async (req, res, next) => {
  try{
    console.log(req.body)
    const user = new UserData(req.body)
    await user.save()
    console.log(user);
    res.json({
      success:"true"
    })
  }catch(e){return e;}
});

module.exports = router;