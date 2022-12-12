const selectDayFunction = (file) => {
    const day = file.name.split('.')[0].replace('day', '');
    switch (day) {
        case '1':
            return findHighestTotal;
        case '2':
            return playRockPaperScissors;
        case '3':
            return sortRucksacks;
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '10':
        case '11':
        default:
            return function() { console.error('No matching function was found for the selected file.') };
    };
};

const loadTextFile = () => {
    console.log("Reading file...")
    const [file] = document.getElementById('file-data').files;
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
        console.log('Finished loading!');
        // selectDayFunction() returns a function.
        selectDayFunction(file)(event.target.result.replaceAll('\r', ''));
    });
    reader.readAsText(file);
};

const addListenerToInput = () => {
    document.getElementById('file-data').addEventListener('change', loadTextFile);
};

const init = () => {
    addListenerToInput();
};

init();
