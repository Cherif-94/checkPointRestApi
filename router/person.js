// const { request, response } = require("express");
const express = require("express");
const router = express.Router();
const Person = require("../models/Person");

router.get("/test", (request, response) => {
  response.send("hello world ");
});
// Create  =  new person = method Post
// request.body (don't forget to config Json type in postman )
// path is http://localhost/api/person

router.post("/", async (request, response) => {
  try {
    const newPerson = new Person({ ...request.body });
    // save the new person in data base
    await newPerson.save();
    // the succes msg
    response.send({ msg: "user saved succesfully", newPerson });
  } catch (error) {
    response.send({ msg: "user not saved  ", error });
  }
});
// all persons   = method GET
// path is http://localhost/api/person

router.get("/", async (request, response) => {
  try {
    const peoplesList = await Person.find();
    response.send({ msg: "all peoples is ", peoplesList });
  } catch (error) {
    response.send({ msg: "error to get the data ", error });
  }
});
// find person  by favoriteFood
router.get("/favorite/:favoriteFood", async (request, response) => {
  const { favoriteFood } = request.params;
  try {
    const onePerson = await Person.find({
      favoriteFood: { $in: favoriteFood },
    });
    response.send({ msg: "this is a person", onePerson });
  } catch (error) {
    response.send({ msg: "error", error });
  }
});

// find person  by Id
// we recive the id in request.params

router.get("/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const onePerson = await Person.findById(id);
    response.send({ msg: "this is a person with id", onePerson });
  } catch (error) {
    response.send({ msg: "error", error });
  }
});

// Delete Person
// path:/api/person/deletePerson/:id
// method: delete

router.delete("/deletePerson/:id", async (request, response) => {
  try {
    const id = request.params.id;
    await Person.deleteOne({ _id: id });
    response.status(200).send({
      msg: "the person is deleted succesfully !! :) this is the id of person deleted ",
      id,
    });
  } catch (error) {
    response.status(400).send({ msg: "cannot delete the person" });
  }
});

// remove many person who have the name cherif
//method : model.remove()
// path :removeManyPerson/:name
router.delete("/removeManyPerson/:name", async (request, response) => {
  try {
    const getName = request.params.name;
    await Person.remove({ name: getName });
    response.status(200).send({
      msg: "removed succesfully :) this is a person removed",
      getName,
    });
  } catch (error) {
    response.status.send({ msg: "cannot remove " });
  }
});

// update a person
// method :  update

router.put("/:id", async (request, response) => {
  try {
    const getId = request.params.id;
    await Person.updateOne({ id: getId }, { $set: { ...request.body } });
    response.send({ msg: "the person is updated succesfully" });
  } catch (error) {
    response.status(400).send({ msg: "cannot update" });
  }
});

module.exports = router;
