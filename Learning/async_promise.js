const fetchData = () => {
    const promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done in 1sec!');
        }, 1000);
    });
    const promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done in 1.5sec!');
        }, 1500);
    });
    return [promise1, promise2];
}

setTimeout(() => {
    console.log('Timer is done in 2sec !');
    const [promise1, promise2] = fetchData();

    promise1.then(text => {
        console.log(text);
    });

    promise2.then(text => {
        console.log(text);
    });
}, 2000);

console.log('Hello!');
console.log('Hi!');
