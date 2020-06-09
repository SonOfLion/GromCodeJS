//input: num,num;
//output: num of day, num of hours num of minutes num of seconds;
// daysDifference = Math.ceil(Math.abs(startDate.getTime() - endDate.getTime()) / (1000 * 60 * 60 * 24));

export function getDiff(startDate, endDate) {
    const dif = Math.abs(startDate - endDate);
    const difDays = Math.floor(dif / (1000 * 60 * 60 * 24));
    const difHours = Math.floor(dif / (1000 * 60 * 60) % 24);
    const difMinutes = Math.floor(dif / (1000 * 60) % 60);
    const difSeconds = Math.floor(dif / 1000) % 60;
    return `${difDays}d ${difHours}h ${difMinutes}m ${difSeconds}s`;
}

// startDate = new Date(2020, 01, 2, 10, 56, 22);
// endDate = new Date(2019, 9, 9, 2, 38, 17);

// console.log(getDiff(startDate, endDate));