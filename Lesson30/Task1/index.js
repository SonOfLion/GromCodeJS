//addImage Promise

export const addImage = imgSrc => {
    const promise = new Promise((resolveCb /*correct*/ , rejectCb /*error*/ ) => {
        const imgElem = document.createElement('img');
        imgElem.setAttribute('alt', 'My photo');

        imgElem.src = imgSrc;

        const containerElem = document.querySelector('.page');
        containerElem.append(imgElem);

        function onImageLoaded() {
            const { width, height } = imgElem;
            resolveCb({ width, height });
        };

        imgElem.addEventListener('load', onImageLoaded);
        imgElem.addEventListener('error', () => rejectCb(new Error('Image load failed')));
    })
    return promise;
};

const imgSrc = 'https://i.pinimg.com/564x/74/3e/3b/743e3bf425a3002e024c473312b42f3c.jpg';

const resultPromise = addImage(imgSrc);

resultPromise.then((data) => {
    console.log(data)
});
resultPromise.catch((error) => {
    console.log(error)
});

const result = addImage(imgSrc);
console.log(result);