function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

/*очіщує попередній контент перед + нових ел-тів*/
function createBoxes (amount) {
  const boxes = document.querySelector('#boxes');
  boxes.innerHTML = ''; 

/*початковий розмір*/
let size = 30;
/*масив для зберігання нових елементів */
const elements = [];

/* умова, встанов ширину,висоту,випадковий колір,
  +ел-т в масив,збільшуємо розмір на 10рх*/
for (let i = 0; i<amount; i++) {
  const div = document.createElement('div');
  div.style.width = `${size}px`;
  div.style.height = `${size}px`;
  div.style.backgroundColor = getRandomHexColor();
  elements.push(div);
  size += 10;
}

/* додаємо всі ел-ти в дерево за 1 операцію*/
boxes.append(...elements);
}


/* очищую вміст контейнера*/
function destroyBoxes () {
  const boxes = document.querySelector('#boxes');
  boxes.innerHTML = ''; 
}


/* отрим поле вводу*/
const input = document.querySelector('#controls input');
/* кнопку create*/
const createButton = document.querySelector('button[data-create]');
/* кнопка destroy*/
const destroyButton = document.querySelector('button[data-destroy]');


/* значення з інпуту і перетвор в число , перевіряю умову,
створ нову умову,очищую значення інпуту*/
createButton.addEventListener('click', () => {
 const amount = Number(input.value);
 if(amount < 1 || amount > 100) {
  return alert("Number is out of range")
}
createBoxes(amount);
input.value = '';
});


/* + обробник  для кнпоки destroy*/
destroyButton.addEventListener('click', destroyBoxes);
