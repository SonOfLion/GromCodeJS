//input: numbers;
//output: numbers;
// daysDifference = Math.ceil(Math.abs(startDate.getTime() - endDate.getTime()) / (1000 * 60 * 60 * 24));

export function getDiff(startDate, endDate) {
    const diffDays = Math.abs(startDate - endDate);
    // console.log(diffDays);
    const days = (diffDays / 1000) * 60 * 60 * 24;
    // console.log(days);
    const daysRound = Math.floor(days);
    // console.log(daysRound);
    const hoursPerDay = (days - daysRound) * 24;
    // console.log(hoursPerDay);
    const hoursRound = Math.floor(hoursPerDay);
    // console.log(hoursRound);
    const minutesPerDay = (hoursPerDay - hoursRound) * 60;
    const minutesRound = Math.floor(minutesPerDay);
    const secondsPerDay = (minutesPerDay - minutesRound) * 60;
    const secondsRound = Math.round(secondsPerDay);

    return `${daysRound}d ${hoursRound}h ${minutesRound}m ${secondsRound}s`;
}

// startDate = new Date(2020, 01, 2, 10, 56, 22);
// endDate = new Date(2019, 9, 9, 2, 38, 17);

// console.log(getDiff(startDate, endDate));