const router = require('express').Router();
const { User } = require("../models");

router.get("/", async (request, response)=> {
    try {
        const allUsers = await User.find();
        if (allUsers){
            response.status(200).json(allUsers);
        } else {
            response.status(400).json({msg: "An error has occurred."});
        }
    } catch (error) {
        console.log(error);
        response.status(500).json({msg: "An error has occurred."});
    }
});

router.get("/:id", async (request, response)=> {
    try {
        const user = await User.find(
            {
                _id: request.params.id
            }
        );
        if (user){
            response.status(200).json(user);
        } else {
            response.status(400).json({msg: "An error has occurred."});
        }
    } catch (error) {
        console.log(error);
        response.status(500).json({msg: "An error has occurred."});
    }
});

router.post("/", async (request, response) => {
    try {
        const newUser = await User.create(
            request.body
        )
        if (newUser){
            response.status(200).json(newUser);
        } else {
            response.status(400).json({msg: "An error has occurred."});
        }
    } catch (error) {
        console.log(error);
        response.status(500).json({msg: "An error has occurred."});
    }
});

router.put("/:id", async (request, response)=> {
    try {
        const updatedUser = await User.findOneAndUpdate(
            {
                _id: request.params.id
            },
            {
                $set: request.body
            },
            {
                runValidators: true,
                new: true
            }
        );
        if (updatedUser){
            response.status(200).json(updatedUser);
        } else {
            response.status(400).json({msg: "An error has occurred."});
        }
    } catch (error) {
        console.log(error);
        response.status(500).json({msg: "An error has occurred."});
    }
});

router.delete("/:id", async (request, response)=> {
    try {
        const deletedUser = await User.findOneAndDelete(
            {
                _id: request.params.id
            }
        );
        if (deletedUser){
            response.status(200).json(deletedUser);
        } else {
            response.status(400).json({msg: "An error has occurred."});
        }
    } catch (error) {
        console.log(error);
        response.status(500).json({msg: "An error has occurred."});
    }
});


module.exports = router;