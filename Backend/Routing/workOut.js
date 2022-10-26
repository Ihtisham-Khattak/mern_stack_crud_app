const express = require("express");
const router = express.Router();
const { postWorkUserReq, getWorkUserReq, getSingleUsereq, deleteWorkOutUserReq, updateWorkOutUserReq} = require('../Controller/workOutController')

//Get all Workout User
router.get("/", getWorkUserReq);

//Get a single Workout User
router.get("/:id", getSingleUsereq);

//Post all Workout User
router.post("/", postWorkUserReq);

//Update all Workoutmessaget User
router.patch("/:id", updateWorkOutUserReq);

//Delete all Workout User
router.delete("/:id", deleteWorkOutUserReq);

module.exports = router;
