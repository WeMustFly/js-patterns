const mySingleton = (function () {
  let instance


  init = () => {
    const randomNumber = Math.random()

    return {
      getRandomNumber: () => randomNumber
    }
  }

  return {
      getInstance: () => {
          if (!instance) {
              instance = init()
          }

          return instance
      }
  }
})()

const singletonA = mySingleton.getInstance()
const singletonB = mySingleton.getInstance()
console.log(singletonA.getRandomNumber() === singletonB.getRandomNumber())

const SingletonTester = (function () {
    const Singleton = function (options) {
        this.name = options.name || 'SingletonTester'
    }

    let instance

    const _static = {
        getInstance: function (options) {
            if (!instance) {
                instance = new Singleton(options)
            }

            return instance
        }
    }

    return _static
})()

const singletonTesterA = SingletonTester.getInstance({name: 'Test A'})
const singletonTesterB = SingletonTester.getInstance({name: 'Test B'})

console.log(singletonTesterA.name)
console.log(singletonTesterB.name)