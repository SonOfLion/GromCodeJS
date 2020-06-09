export const weekDays = ['Mon', 'Tu', 'We', 'Th', 'Fr', 'St', 'Su'];

export const DayOfWeek = (date, days) => {
    const day = new Date(date).getDate();
    const dateInFuture = new Date(date).setDate(day + days);

    return weekDays[new Date(dateInFuture).getDay()];
};

// const result = DayOfWeek(new Date(2019, 0, 1), 14);

// console.log(result);