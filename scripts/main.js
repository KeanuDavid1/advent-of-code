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
    console.log('Highest total is', highestTotal);
};

const playRockPaperScissors = (content) => {
    let playerScore = 0;
    const pointsForRound = { lose: 0, draw: 3, win: 6 };
    // Right side -> { X = rock, Y = paper, Z = scissors }, Left side -> { A = rock, B = paper, C = scissors }
    const handRightSide = { X: 1, Y: 2, Z: 3 };
    const handLeftSide = { A: 1, B: 2, C: 3 };

    const rounds = content.split('\n');
    rounds.forEach((round, index) => {
        // We always play the hand on index 1.
        const handsPlayed = round.split(' ');

        // Opponent
        const leftHand = handLeftSide[handsPlayed[0]];

        // Us
        const rightHand = handRightSide[handsPlayed[1]];

        if ((rightHand - leftHand) === 1) {
            playerScore += pointsForRound['win']; 
        } else if ((rightHand - leftHand) === -2) {
            playerScore += pointsForRound['win'];
        } else if ((rightHand - leftHand) === 0) {
            playerScore += pointsForRound['draw'];
        } else {
            playerScore += pointsForRound['lose'];
        }

        playerScore += rightHand;
        console.log('Round:', index + 1, '\n', 'Score: ', playerScore);
    })

    console.log('Final score is', playerScore)
};

const selectDayFunction = (file) => {
    const day = file.name.split('.')[0].replace('day', '');
    switch (day) {
        case '1':
            return findHighestTotal;
        case '2':
            return playRockPaperScissors;
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
