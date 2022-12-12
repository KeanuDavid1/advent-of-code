const findHighestTotal = (content) => {
    let highestTotal = 0;
    // Every value in the text file is followed with a \r, these are useless.
    // A '\n\n' indicates a double enter (blank line), which means the next data will be another group of data.
    const splitContent = content.split('\n\n');
    for (const item of splitContent) {
        const result = item.split('\n').reduce((total, currentNumber) => total + Number(currentNumber), 0);
        if (result > highestTotal) {
            highestTotal = result;
        }
    }
    console.log('Day 1 answer is', highestTotal);
};
