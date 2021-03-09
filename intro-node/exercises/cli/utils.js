const fs = require("fs")
const path = require("path")

// this path needs to be relative to work with fs
const contactsLocation = path.join(__dirname, "contacts.json")

/**
 * should read the contacts at the
 * @contactsLocation path and convert
 * it to a js object
 */
const getContacts = () => {
  var object = JSON.parse(fs.readFileSync(contactsLocation, "utf-8"))
  return object
}

/**
 * takes a contacts object, converts it to JSON
 * and saves it at the @contactsLocation path
 * @param {Object} contacts contacts object
 */
const saveContacts = (contacts) => {
  fs.writeFileSync(contactsLocation, JSON.stringify(contacts))
}

module.exports = {
  contactsLocation,
  getContacts,
  saveContacts,
}
