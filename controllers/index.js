const router = require('express').Router();
const userRoutes = require("./userController");
const thoughtRoutes = require("./thoughtController");
const reactionRoutes = require("./reactionController");

router.use("/api/users", userRoutes);
router.use("/api/thoughts", thoughtRoutes);
router.use("/api/reactions", reactionRoutes);

module.exports = router;
