var express = require('express');
var UserDetails = require('../Schema');
var router = express.Router();

router.post('/login', async (req, res) => {
  try {
    var loginCd = await UserDetails.findOne({ Email: req.body.Email, Password:req.body.Password })
    console.log(loginCd);
    if (loginCd) {
      if ( loginCd.Email == req.body.Email && loginCd.Password == req.body.Password) {
        res.json({
          data:loginCd
        })
      } else{
        res.json({
          data:{
            status:0
          }
        })
      }
    }else{
      res.json({
        data:{
          status:0
        }
      })
    }
  } catch (err) { console.log(err); }
});

module.exports = router;