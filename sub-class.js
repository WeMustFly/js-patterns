const Person = function (firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
    this.sex = 'male'
}

const Superhero = function (firstName, lastName, powers) {
    Person.call(this, firstName, lastName)
    this.powers = powers
}

Superhero.prototype = Object.create(Person.prototype)

const Superman = new Superhero('Clark', 'Ken', ['fly', 'strong'])
console.log(Superman)