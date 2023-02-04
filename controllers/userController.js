const { User, Thought } = require("../models");

module.exports = {
  // get all users
  getUser(req, res) {
    User.find({})
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  // get single user by id
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId }) // find user by id in params object
      // populate thoughts and friends data
      .populate({
        path: "thoughts",
        select: "-__v",
      })
      .populate({
        path: "friends",
        select: "-__v",
      })
      .select("-__v")
      // then send user as json
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user found with this id!" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  // create user
  createUser(req, res) {
    User.create(req.body) // create a new user with data in body object
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  // update user
  updateUser(req, res) {
    // find user by id in params object and update with data in body object
    User.findOneAndUpdate(
      { _id: req.params.userId }, // find user by id in params object
      { $set: req.body }, // set (update) data in body object
      { new: true, runValidators: true } // return new document and run
    )
      // then send user as json
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user found with this id!" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  // delete user and associated thoughts
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId }) // find user by id in params object
      .then((user) => {
        !user
          ? res.status(404).json({ message: "No user found with this id!" })
          : Thought.deleteMany({ _id: { $in: user.thoughts } }); // respond with user data with deleted thoughts data
      })
      .then(() =>
        res.json({ message: "User and associated thoughts deleted!" })
      )
      .catch((err) => res.status(500).json(err));
  },

  // add friend
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId }, // find user by id in params object
      { $addToSet: { friends: req.params.friendId } }, // add friend id to friends array, if not already there
      { new: true } // return new document
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user found with this id!" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  // delete friend
  deleteFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId }, // find user by id in params object
      { $pull: { friends: req.params.friendId } }, // remove friend id from friends array if present
      { new: true } 
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user foudn with this id!" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
};
