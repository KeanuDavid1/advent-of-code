const findHighestTotal = (content) => {
    let highestTotal = 0;
    // Every value in the text file is followed with a \r, these are useless.
    // A '\n\n' indicates a double enter (blank line), which means the next data will be another group of data.
    const splitContent = content.replaceAll('\r', '').split('\n\n');
    for (const item of splitContent) {
        const result = item.split('\n').reduce((total, currentNumber) => total + Number(currentNumber), 0);
        if (result > highestTotal) {
            highestTotal = result;
        }
    }
    console.log('Highest total is', highestTotal)
}

const loadTextFile = (functionToExecuteWithData) => {
    console.log("Reading file...")
    const [file] = document.getElementById('file-data').files;
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
        console.log('Finished loading!');
        functionToExecuteWithData(event.target.result);
    });
    reader.readAsText(file);
}

const addListenerToInput = () => {
    document.getElementById('file-data').addEventListener('change', () => loadTextFile(findHighestTotal));
};

const init = () => {
    addListenerToInput();
}

init();
