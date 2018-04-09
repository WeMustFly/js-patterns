const MacBookPro = function () { }

MacBookPro.prototype = {
    getPrice: () => 900
}

const MacBookDecorator = function (macbook) {
    this.macbook = macbook
}

MacBookDecorator.prototype = {
    getPrice: function () {
        return this.macbook.getPrice()
    }
}

const CaseDecorator = function (macbook) {
    this.macbook = macbook
}

CaseDecorator.prototype.getPrice = function () {
    return this.macbook.getPrice() + 45
}

let mb = new MacBookPro()
console.log(mb.getPrice())
mb = new MacBookDecorator(mb)
console.log(mb.getPrice())
mb = new CaseDecorator(mb)
console.log(mb.getPrice())