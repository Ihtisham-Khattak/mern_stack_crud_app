const workOut = require("../Models/workOutModel");
const mongoose = require('mongoose');

//get a workout user
const getWorkUserReq = async (req, res) => {
  const getWorkOut = await workOut.find({}).sort({ createdAt: -1 });
  res.status(404).json(getWorkOut);
};

//get a single workout user
const getSingleUsereq = async (req, res) => {
  const { id } = req.params;

  //Cast to ObjectId failed for value "HEXA" (type string)
  if(!mongoose.Types.ObjectId.isValid({id})){
    return res.status(404).json({error: "Not Found"})
  }
  const getSingleWorkOut = await workOut.findById(id);
  if (!getSingleUsereq) {
    res.status(202);
  } else {
    res.status(404).json(getSingleWorkOut);
  }
};

//post workoutuser
const postWorkUserReq = async (req, res) => {
  const { title, repeat, load } = req.body;

  //data to db
  try {
    const postWorkOut = await workOut.create({ title, repeat, load });
    res.status(202).json(postWorkOut);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

//update workout user
const updateWorkOutUserReq = async (req, res) => {
  const { id } = req.params;
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "Not Found"})
  }
  const updateWorkOutUser = await workOut.findByIdAndUpdate({_id:id},{...req.body}).exec();

  if (!updateWorkOutUser) {
    res.status(404).json({ message: "Not Found" });
  } else {
    res.status(202).res.json(updateWorkOutUser);
  }
};

//delete workout user
const deleteWorkOutUserReq = async (req, res) => {
  const { id } = req.params;
  //Not find specific ID
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "Not Found"})
  }
  const deleteWorkOutUser = await workOut.findByIdAndDelete({_id:id}).exec();

  if (!deleteWorkOutUser) {
    res.status(404).json({ message: "Not Found" });
  } else {
    res.status(404).json(deleteWorkOutUser);
  }
};

module.exports = {
  postWorkUserReq,
  getWorkUserReq,
  getSingleUsereq,
  deleteWorkOutUserReq,
  updateWorkOutUserReq,
};
