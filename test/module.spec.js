const expect = require('chai').expect

const genderify = require('../src/index.js')

describe('Genderify people names', function () {
    it('retrieve the correct gender for Male name', function *() {
        const name = 'alberto'
        const genderStub = this.sandbox.stub(genderify(name, (gender) => {
            expect(gender).to.be.equal('m')
        }))
    })

    it('retrieve the correct gender for Female name', function *() {
        const name = 'Michela'
        const genderStub = this.sandbox.stub(genderify(name, (gender) => {
            expect(gender).to.be.equal('F')
        }))
    })

    it('retrieve the correct gender for Not exists names', function *() {
        const name = 'ZiBadrone'
        const genderStub = this.sandbox.stub(genderify(name, (gender) => {
            expect(gender).to.be.equal(null)
        }))
    })

    it('retrieve the correct gender for empty name', function *() {
        const name = ''
        const genderStub = this.sandbox.stub(genderify(name, (gender) => {
            expect(gender).to.be.equal(null)
        }))
    })

    it('retrieve the correct gender for null name', function *() {
        const name = null
        const genderStub = this.sandbox.stub(genderify(name, (gender) => {
            expect(gender).to.be.equal(null)
        }))
    })
})
