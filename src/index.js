const fs = require("fs");
const names = require('./names');

function genderify(name) {
    return new Promise((fulfill, reject) => {
        if (names.lenght === 0) {
            reject("No names available")
        }

        if (name === null || name === '') {
            reject("First name missing, please provide a name")
        }

        let filteredJson = names.filter(function (value) {
            return name.toLowerCase() === value.name.toLowerCase()
        });

        let gender = filteredJson.length > 0 ? filteredJson.shift().gender : null

        return fulfill(gender)
    })
        .catch(err => {
            return err
        })
}

module.exports = genderify
