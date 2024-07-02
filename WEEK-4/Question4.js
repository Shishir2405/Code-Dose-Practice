function delayedResolve() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Resolved!");
        }, 2000);
    });
}

delayedResolve().then(message => {
    console.log(message);
});
