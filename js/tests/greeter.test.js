const test = require('tape')
const Greeter = require('../greeter').Greeter

test('should say "good night" at midnight', (t) => {

  const date = new Date();
  date.setHours(0);
  const greeter = new Greeter(date);

  t.equal(greeter.greet(), 'Good night');

  t.end()
})

test('should never return undefined', (t) => {
  // TODO : for each hour from 0 to 23, check that Greeter.greet()
  // never returns undefined
  t.fail('TODO')
  t.end()
})
