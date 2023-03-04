const router = require('express').Router();
const { User, Thought } = require("../models")

router.get("/", async (request, response)=> {
    try {
        const allThoughts = await Thought.find();
        if (allThoughts){
            response.status(200).json(allThoughts);
        } else {
            response.status(404).json({msg: "An error has occurred."});
        }
    } catch (error) {
        console.log(error);
        response.status(500).json({msg: "An error has occurred."});
    }
});

router.get("/:id", async (request, response)=> {
    try {
        const thought = await Thought.findOne(
            {
                _id: request.params.id
            }
        );
        if (thought){
            response.status(200).json(thought);
        } else {
            response.status(404).json({msg: "An error has occurred."});
        }
    } catch (error) {
        console.log(error);
        response.status(500).json({msg: "An error has occurred."});
    }
});

router.post("/", async (request, response) => {
    try {
        const newThought = await Thought.create(
            request.body
        )
        if (newThought){
            const user = await User.findOne({
                username: request.body.username
            });
            if (user){
                user.thoughts.push(newThought);
                response.status(200).json(newThought);
            } else {
                response.status(404).json({msg: "An error has occurred."});
            }
        } else {
            response.status(404).json({msg: "An error has occurred."});
        }
    } catch (error) {
        console.log(error);
        response.status(500).json({msg: "An error has occurred."});
    }
});

router.put("/:id", async (request, response)=> {
    try {
        const updatedThought = await Thought.findOneAndUpdate(
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
        if (updatedThought){
            response.status(200).json(updatedThought);
        } else {
            response.status(404).json({msg: "An error has occurred."});
        }
    } catch (error) {
        console.log(error);
        response.status(500).json({msg: "An error has occurred."});
    }
});

router.delete("/:id", async (request, response)=> {
    try {
        const deletedThought = await Thought.findOneAndDelete(
            {
                _id: request.params.id
            }
        );
        if (deletedThought){
            response.status(200).json(deletedThought);
        } else {
            response.status(404).json({msg: "An error has occurred."});
        }
    } catch (error) {
        console.log(error);
        response.status(500).json({msg: "An error has occurred."});
    }
});

router.post("/:thoughtId/reactions", async (request, response)=> {
    try {
        const thought = await Thought.findOne(
            {
                _id: request.params.thoughtId
            }
        )
        if (thought){
            thought.reactions.push(request.body)
            response.status(200).json(thought);
        } else {
            response.status(404).json({msg: "An error has occurred."});
        }
    } catch (error) {
        console.log(error);
        response.status(500).json({msg: "An error has occurred."});
    }
});

router.post("/:thoughtId/reactions/:reactionId", async (request, response)=> {
    try {
        const thought = await Thought.findOneAndUpdate(
            {
                _id: request.params.thoughtId
            },
            {
                $pull: {
                    reactions: {
                        _id: request.params.reactionId
                    }
                }
            }
        );
        if (thought){
            response.status(200).json(thought);
        } else {
            response.status(404).json({msg: "An error has occurred."})
        }
    } catch (error) {
        console.log(error);
        response.status(500).json({msg: "An error has occurred."});
    }
});

module.exports = router;