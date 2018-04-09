const MacBook = function () {
    this.cost = () => 997
    this.screenSize = () => 11.6
}

function memory (macbook) {
    const cost = macbook.cost()
    macbook.cost = () => cost + 75
}

function engraving (macbook) {
    const cost = macbook.cost()
    macbook.cost = () => cost + 200
}

function insurance (macbook) {
    const cost = macbook.cost()
    macbook.cost = () => cost + 250
}

const mb = new MacBook()
memory(mb)
engraving(mb)
insurance(mb)

console.log(mb.cost())
console.log(mb.screenSize())