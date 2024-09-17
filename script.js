const inputNum = document.getElementById('ip');
const inputBtn = document.getElementById('btn');
const outputDiv = document.getElementById('output');

inputBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const number = parseFloat(inputNum.value); // Convert input to a number

    // Start the promise chain
    new Promise((res) => {
        setTimeout(() => {
            res(number);
        }, 2000);
    })
    .then((data) => {
        outputDiv.innerText = `Result: ${data}`;
        return new Promise((res) => {
            setTimeout(() => {
                res(data);
            }, 2000);
        });
    })
    .then((data) => {
        outputDiv.innerText = `Result: ${data}`;
        return new Promise((res) => {
            setTimeout(() => {
                res(data * 2); // Multiply by 2
            }, 1000);
        });
    })
    .then((data) => {
        outputDiv.innerText = `Result: ${data}`;
        return new Promise((res) => {
            setTimeout(() => {
                res(data - 3); // Subtract 3
            }, 1000);
        });
    })
    .then((data) => {
        outputDiv.innerText = `Result: ${data}`;
        return new Promise((res) => {
            setTimeout(() => {
                res(data / 2); // Divide by 2
            }, 1000);
        });
    })
    .then((data) => {
        outputDiv.innerText = `Result: ${data}`;
        return new Promise((res) => {
            setTimeout(() => {
                res(data + 10); // Add 10
            }, 1000);
        });
    })
    .then((data) => {
        outputDiv.innerText = `Final Result: ${data}`; // Final result
    })
    .catch((err) => {
        outputDiv.innerText = `Error: ${err}`;
    });
});
