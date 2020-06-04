function manageClases() {
    const one = document.querySelector('one');
    one.classList.add('selected');

    const two = document.querySelector('two');
    two.classList.remove('selected');

    const three = document.querySelector('three');
    three.classList.toggle('three_done');

    const four = document.querySelector('four');
    if (four.classList.contains('some-class')) {
        four.classList.add('another-class');
    }
}

export { manageClases };