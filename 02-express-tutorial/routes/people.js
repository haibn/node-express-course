const express = require("express")
const router = express.Router();
const { addPerson, getPeople, getPerson, updatePerson, deletePerson } = require("../controllers/people.js")

const { people } = require("../data.js");

router.get("/", getPeople)
router.get("/:id", getPerson)
router.post("/", addPerson)
router.put("/:id", updatePerson)
router.delete("/:id", deletePerson)

module.exports = router