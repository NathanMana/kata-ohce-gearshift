const prompt = require('prompt-sync')()
const reverse = require('./ohce').reverse

class ConsoleInteractor {
  
  readInput () {
    return prompt('')
  }

  printMessage (message) {
    console.log(message)
  }
}

class UI {
  constructor (consoleInteractor) {
    // this.interactor = new ConsoleInteractor()
    this.interactor = consoleInteractor;
  }

  mainLoop () {
    while (true) {
      const input = this.interactor.readInput()
      if (input === 'quit') {
        break
      }
      const reversed = reverse(input)
      this.interactor.printMessage(reversed)
      if (input === reversed) {
        this.interactor.printMessage('That was a palindrome!')
      }
    }
  }
}

module.exports = { UI }
