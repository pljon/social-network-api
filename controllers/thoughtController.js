const { model } = require("mongoose");
const { Thought, User } = require("../models");

module.exports = {
  // get all thoughts
  getThought(req, res) {
    Thought.find(
      // find all thoughts
      {}
        .then((thought) => {
          // then send thoughts as json
          console.log(thought); // log thoughts
          res.json(thought); // send thoughts as json
        })
        .catch((err) => res.status(400).json(err)) // if error, send 400 error
    );
  },

  // get single thought by id
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId }) // find thought by id in params object
      .select("-__v") // excludes __v
      .then(
        // then send thought as json
        (thought) =>
          !thought // if no thought is found
            ? res
                .status(404)
                .json({ message: "No thought found with this id!" }) // send 404 error
            : res.json(thought) // if thought, send thought
      );
  },

  // create thought
  createThought(req, res) {
    Thought.create(req.body)
      .then(({ _id }) => {
        // destructure _id from thought object and assign to _id
        return User.findOneAndUpdate(
          // find user by id and update thoughts array with new thought id
          { _id: req.body.userId }, // find user by id in body object
          { $push: { thoughts: _id } }, // push new thought id to thoughts array
          { new: true } // return updated user / document as new object instead of original object
        );
      })
      // then send updated user as json
      .then((thought) => 
        !thought // if no thought is found
          ? res.status(404).json({ message: "No thought found with this id!" }) // send 404 error
          : res.json(thought) // if thought, send thought
      )
      .catch((err) => res.status(400).json(err));
  },
};
