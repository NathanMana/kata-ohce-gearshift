const test = require('tape')
const Greeter = require('../greeter').Greeter

class SystemClock {
  constructor (hour) {
    this.hour = hour;
  }
  currentHour () {
    return this.hour;
  }
}

test('should say "good night" at midnight', (t) => {
  const greeter = new Greeter(new SystemClock(0));

  t.equal(greeter.greet(), 'Good night');

  t.end()
})

test('should never return undefined', (t) => {
  // TODO : for each hour from 0 to 23, check that Greeter.greet()
  // never returns undefined

  let isReturnUndefined = false;

  for (let i = 0; i < 24; i++) {
    const greeter = new Greeter(new SystemClock(i));
    if (!greeter.greet())
      isReturnUndefined = true;
  }

  t.notOk(isReturnUndefined);

  t.end()
})