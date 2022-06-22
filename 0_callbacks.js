function fulfilled() {
  const allIntegers = nums => nums.every(n => typeof n === 'number' && n % 1 === 0);

  const isEvensAsync = (numbers) => {
    return new Promise((resolve, reject) => {
      if (allIntegers(numbers)) {
        resolve(numbers.every(n => n % 2 === 0));
      } else {
        reject(new Error('Illegal argument: Not an integer.'));
      }
    });
  }

  const result = isEvensAsync([2, 4, 6]);
  console.log(result); // Promise { true }, the promise is fulfilled.
}

function pending() {
  const isEvensAsync = (ns) => {
    const allIntegers = ns => ns.every(n => Number.isInteger(n));

    return new Promise((resolve, reject) => {
      setTimeout(() => { // Delay execution
        if (allIntegers(ns)) {
          resolve(ns.every(n => n % 2 === 0));
        } else {
          reject(new Error('Illegal argument: Not an integer.'));
        }
      }, 100);
    });
  }

  const result = isEvensAsync([2, 4, 'foo']);
  console.log(result); // Promise { pending }, the promise is pending.

  result
    .then(r => {
      console.log(r)
      console.log(result);
    }) // the promise is rejected
    .catch(err => {
      console.log('error: ', err);
      console.log(result);
    }); // error: ...
}

// fulfilled();
pending();