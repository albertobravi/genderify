const expect = require('chai').expect

const genderify = require('../src/index.js')

describe('Genderify people names', function () {
    it('retrieve the correct gender for Male name', function *() {
        const name = 'alberto'
        genderify(name)
            .then(gender => {
                expect(gender).to.be.equal('m')
            })
    })

    it('retrieve the correct gender for Female name', function *() {
        const name = 'valentina'
        genderify(name)
            .then(gender => {
                expect(gender).to.be.equal('f')
            })
    })

    it('retrieve the correct gender for Not exists names', function *() {
        const name = 'ZiBadrone'
        genderify(name)
            .then(gender => {
                expect(gender).to.be.equal(null)
            })
    })

    it('retrieve the correct gender for empty name', function *() {
        const name = ''
        genderify(name)
            .catch(err => {
                expect(err).to.be.equal('First name missing, please provide a name')
            })
    })

    it('retrieve the correct gender for null name', function *() {
        const name = null
        genderify(name)
            .catch(err => {
                expect(err).to.be.equal('First name missing, please provide a name')
            })
    })
})
