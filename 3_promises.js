
const tick = Date.now();
const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}ms`);

const codeBlocker = () => {

    // Blocking

    let i = 0;
    while(i < 1000000000) { i++;}

    return 'All loops done';

    // Async blocking (still happens on the main thread)

    // return new Promise((resolve, reject) => {

    //     let i = 0;
    //     while(i < 1000000000) { i++;}
 
    //     resolve('All loops done'); //this won't happen until the sync op's have finished
    // })

    // Non-blocking (micro task placed on the queue to be run after all sync code)

    // return Promise.resolve().then(v =>  {
    //     let i = 0;
    //     while(i < 1000000000) { i++; }
    //     return 'All loops done';
    // })
}

log('🥪 Synchronous 1');

log(codeBlocker()); //Blocking
// codeBlocker().then(log); // Async blocking & non-blocking

log('🥪 Synchronous 2');