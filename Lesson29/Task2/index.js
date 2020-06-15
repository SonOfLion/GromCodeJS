//pinger(num,period)

export const pinger = (num, period) => {
    console.log('Ping');

    let i = num;

    const interval = setInterval(() => {
        if (--i > 0) {
            console.log('Ping');
        } else {
            clearInterval(interval)
        }
    }, period);

    // setTimeout(() => {
    //     clearInterval(interval);
    // }, num * per);

    // console.log(interval);
};

pinger(5, 1000);