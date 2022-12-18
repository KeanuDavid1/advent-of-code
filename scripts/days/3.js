const findDuplicateInSack = (sack) => {
    let duplicate;
    const firstCompartment = sack.slice(0, sack.length / 2);
    const secondCompartment = sack.slice(sack.length / 2, sack.length);

    for (let item of firstCompartment) {
        if (secondCompartment.includes(item)) {
            duplicate = item;
            break; // The sack will only contain one duplicate type, once it is found we can stop looping.
        }
    }

    return duplicate;
}

const alphabet = '.abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

const analyseRuckSacks = (content) => {
    const duplicateItems = [];
    let totalTypeScore = 0;

    // Search rucksacks...
    const ruckSacks = content.split('\n');
    ruckSacks.forEach((sack) => duplicateItems.push(findDuplicateInSack(sack)));
    duplicateItems.forEach((type) => totalTypeScore += alphabet.indexOf(type));

    console.log('Total duplicate type score is', totalTypeScore);
}