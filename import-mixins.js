const myModule = (function (argA, argB) {
    const privateMethodA = () => argA
    const privateMethodB = () => argB
    const privateMethodAB = () => argA + argB

    return {
        getA: () => privateMethodA(),
        getB: () => privateMethodB(),
        getAB: () => privateMethodAB()
    }
})(10, 29)

console.log(myModule.getA())
console.log(myModule.getB())
console.log(myModule.getAB())