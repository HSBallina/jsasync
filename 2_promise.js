import fetch from 'node-fetch';

const promise = fetch('https://jsonplaceholder.typicode.com/todos/1');

function happyFlow() {
  promise
    .then(result => result.json())
    .then(user => { console.log(user.title) });

  console.log('Sync');
}

function sadFlow() {
  promise
    .then(result => result.json())
    .then(user => {
      throw new Error('Bummer');
      // return user;
    })
    .then(user => console.log(user.title))
    .catch(err => console.log(err))
  
  console.log('Sync dude!')
}

// happyFlow();
sadFlow();