const fieldInput = document.querySelector('#name-input');
const fieldOutput = document.querySelector('#name-output');

const onFieldInput = () => {
    const nameEl = fieldInput.value.trim();
    fieldOutput.textContent = nameEl === '' ? 'Anonymous' : nameEl;
};


fieldInput.addEventListener('input', onFieldInput);