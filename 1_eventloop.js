console.log('Sync 1'); // Sync exec first
setTimeout(_ => console.log('Timeout 2'), 0); // macro task (exec next loop)
Promise.resolve().then(_ => console.log('Promise 3')); // micro task (exec last on current loop)
console.log('Sync 4');