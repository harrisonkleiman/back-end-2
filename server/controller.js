let nextID = 4

// Outside of module.exports, create a variable that requires your db.
const houses = require("./db.json")

// Set a module up with the following function signatures: getHouses, deleteHouse, createHouse, updateHouse.

module.exports = {
  getHouses: (req, res) => {
    res.status(200).send(houses)
  },
  deleteHouse: (req, res) => {
    let index = houses.findIndex((house) => house.id === +req.params.id)
    houses.splice(index, 1)
    res.status(200).send(houses)
  },
  createHouse: (req, res) => {
    let { address, price, imageURL } = req.body
    let newHouse = {
      id: nextID,
      address,
      price,
      imageURL,
    }
    houses.push(newHouse)
    res.status(200).send(houses)
    nextID++
  },
  updateHouse: (req, res) => {
    let { id } = req.params
    let { type } = req.body

    let index = houses.findIndex((house) => house.id === +id)

    if (type === "plus") {
      houses[index].price += 10000
      res.status(200).send(houses)
      res.status(400).send("invalid type")
    } else if (type === "minus") {
      houses[index].price -= 10000
      res.status(200).send(houses)
      res.status(400).send("invalid type")
    }
  },
}

// Outside of module.exports, create a variable to keep track of your upcoming house id, and set it equal to 4 (we already have 3 houses in the database with id’s 1, 2, and 3).
