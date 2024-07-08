generateRandomNumber = () => {
    return Math.floor(Math.random() * 100);
}

randomNumberWithDelay = (delayInSeconds) => {
    console.log(`generating random number after ${delayInSeconds} seconds`);
    let timeRemaining = 3;
    const interval = setInterval(() => {
        console.log(`${timeRemaining} seconds remaining`);
        timeRemaining--;

        if (timeRemaining === 0){
            clearInterval (interval);
            const randomNumber = generateRandomNumber();
            console.log(`Random Number Generated: ${randomNumber}`);
        }
    }, 1000)
}

randomNumberWithDelay(3) 