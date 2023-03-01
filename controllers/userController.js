const router = require('express').Router();

router.get("/", (request, response)=> {
    response.status(200).json({msg: "It works!"});
})

module.exports = router;