const myModule = (function () {
    const module = {}
    const privateConst = 1

    const privateMethod = () => console.log('Private method is called')

    module.publicProperty = 2
    module.publicMethod = () => console.log(
        this.publicProperty + privateConst
    )

    module.privateMethod.bind(module)

    return module
})()

myModule.publicMethod()