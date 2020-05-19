'use strict';

const message = 'Good job';

export function sendMessage(name) {
    const sender = 'Gromcode';

    console.log(`${name},${message}! Your ${sender}`);
}

export function setMessage(text) {
    message = text;
}

// sentMessage('Ann');
// sentMessage('Tom');