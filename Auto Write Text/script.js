const text = 'Hello My Name is Mohib Ismail and I am a full stack Web developer'

let index = 0;

function autoComplete() {
    document.body.innerText = text.slice(0, index);

    index++;

    if (index > text.length - 1) {
        index = 0;
    }
};

setInterval(autoComplete, 100);