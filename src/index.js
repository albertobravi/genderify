const names = require(__dirname + '/../data/names');

function genderify(name) {
    return new Promise((fulfill, reject) => {
        try
        {
            let gender = getNameInfo(name)

            return fulfill(gender)
        }
        catch (err)
        {
            return reject(err)
        }
    })
}


function getNameInfo(name)
{
    if (names.lenght === 0) {
        throw "No names available"
    }

    if (name === null || name === '') {
        throw "First name missing, please provide a name"
    }

    let filteredNames = names.filter(function (value) {
        return name.toLowerCase() === value.name.toLowerCase()
    });

    return filteredNames.length > 0 ? filteredNames.shift().gender : null
}

module.exports = genderify
