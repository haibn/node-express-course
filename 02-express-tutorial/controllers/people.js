const { people } = require("../data.js");

const addPerson = (req, res) => {
    const data = req.body;
    if (!data.name) {
        return res.status(400).json({ success: false, message: "Please provide a name" });
    }
    people.push({ id: people.length + 1, name: data.name })
    res.status(201).json({ success: true, name: data.name })
}

const getPeople = (req, res) => {
    res.status(200).json(people);
}

const getPerson = (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))
    if (!person) {
        return res.status(404).json({ sucess: false, msg: `No person with id ${req.params.id}` })
    }
    res.status(200).json(person)
}

const updatePerson = (req, res) => {
    const { id } = req.params
    const { name } = req.body
    
    const person = people.find((person) => person.id === Number(id))

    if (!person) {
        return res.status(404).json({ success: false, msg: `No person with id ${req.params.id}` })
    }
    const updatedPerson = people.map((person) => {
        if (person.id == Number(id)) {
            person.name = name
        }
        return person;
    })
    res.status(200).json({ success: true, data: updatedPerson} )
}

const deletePerson = (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))

    if (!person) {
        return res.status(404).json({ success: false, msg: `No person with id ${req.params.id}` })
    }
    const updatedPeople = people.filter(
        (person) => person.id !== Number(req.params.id)
    )
    res.status(200).json({ success: true, data: updatedPeople} )
}

module.exports = {
    addPerson,
    getPeople,
    getPerson,
    updatePerson,
    deletePerson
}