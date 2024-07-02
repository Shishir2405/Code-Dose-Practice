function repeatHello() {
    let counter = 0;
    const intervalId = setInterval(() => {
        console.log("Hello, again!");
        counter++;
        if (counter >= 5) {
            clearInterval(intervalId);
        }
    }, 2000);
}

repeatHello();
