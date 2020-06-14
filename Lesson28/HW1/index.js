//input:value;
//output:obj with methods

export function shmoment(currentValue) {
    let currentDate = new Date(currentValue);

    let counter = {
        add(numb, value) {
            let addTime = {
                milliSeconds: (value) => (currentDate.setMilliseconds(currentDate.getMilliseconds() + value)),
                seconds: (value) => (currentDate.setSeconds(currentDate.getSeconds() + value)),
                minutes: (value) => (currentDate.setMinutes(currentDate.getMinutes() + value)),
                hours: (value) => (currentDate.setHours(currentDate.getHours() + value)),
                days: (value) => (currentDate.setDate(currentDate.getDate() + value)),
                months: (value) => (currentDate.setMonth(currentDate.getMonth() + value)),
                years: (value) => (currentDate.setFullYear(currentDate.getFullYear() + value)),
            }
            currentDate = new Date(addTime[numb](value));
            return counter;
        },
        subtract(numb, value) {
            let takeOverTime = {
                milliSeconds: (value) => (currentDate.setMilliseconds(currentDate.getMilliseconds() - value)),
                seconds: (value) => (currentDate.setSeconds(currentDate.getSeconds() - value)),
                minutes: (value) => (currentDate.setMinutes(currentDate.getMinutes() - value)),
                hours: (value) => (currentDate.setHours(currentDate.getHours() - value)),
                days: (value) => (currentDate.setDate(currentDate.getDate() - value)),
                months: (value) => (currentDate.setMonth(currentDate.getMonth() - value)),
                years: (value) => (currentDate.setFullYear(currentDate.getFullYear() - value)),
            }
            currentDate = new Date(takeOverTime[numb](value));
            return counter;
        },
        result() {
            return currentDate;
        },
    }
    return counter;
}

console.log(shmoment(new Date(2020, 0, 7, 17, 17, 17)).add('minutes', 2).add('days', 8).subtract('years', 1).result());