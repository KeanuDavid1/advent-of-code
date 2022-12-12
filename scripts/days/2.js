const playRockPaperScissors = (content) => {
    let playerScore = 0;
    const pointsForRound = { lose: 0, draw: 3, win: 6 };
    // Right side -> { X = rock, Y = paper, Z = scissors }, Left side -> { A = rock, B = paper, C = scissors }
    const handRightSide = { X: 1, Y: 2, Z: 3 };
    const handLeftSide = { A: 1, B: 2, C: 3 };

    const rounds = content.split('\n');
    rounds.forEach((round) => {
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
    })

    console.log('Day 2 answer is', playerScore)
};