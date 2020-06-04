export function getSection(num) {
    const span = document.querySelector(`span[data-number='${num}']`);
    const parent = span.closest('.box');

    console.dir(parent.dataset.section);
    return parent.dataset.section;
}

// getSection(3);