fetch('https://appi.github.com/users/github')
    .then(response => {
        debugger;
        if (response === 200) {
            return response.json();
        }
        throw new Error('no data');
    })
    .then(data => console.log(data))
    .catch(err => {
        debugger;
        console.log(err);
    })