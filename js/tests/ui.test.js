const test = require('tape')
const UI = require('../ui');

class ConsoleInteractorTest {

  constructor(inputs) {
    this.printedMessages = [];
    this.listInputs = inputs
  }

  readInput () {
    return this.listInputs.shift()
  }

  printMessage (message) {
    this.printedMessages.push(message);
  }
}

test('main loop', (t) => {

    /* TODO
    Given the following inputs:
    - hello
    - oto
    - quit

    Check that the following messages are printed:
    - olleh
    - oto
    - That was a palindrome!
   */

  const consoleInteractor = new ConsoleInteractorTest(['hello', 'oto', 'quit']);
  const uiElement = new UI.UI(consoleInteractor); 
  uiElement.mainLoop();

  // Vérifier si les éléments ont bien été prints
  const expectedOutputs = ['olleh', 'oto', 'That was a palindrome!'];

  let isEqual = true;
  uiElement.interactor.printedMessages.forEach((output, index) => {

    if (output === expectedOutputs[index]) return;

    isEqual = false;
  })

  t.ok(isEqual);
  t.end()
})