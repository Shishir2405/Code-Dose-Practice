function randomPromise() {
    return new Promise((resolve, reject) => {
        const randomNum = Math.random();
        if (randomNum < 0.5) {
            resolve("Success");
        } else {
            reject("Error");
        }
    });
}

randomPromise()
    .then(result => {
        console.log("Resolved:", result);
    })
    .catch(error => {
        console.error("Rejected:", error);
    });
