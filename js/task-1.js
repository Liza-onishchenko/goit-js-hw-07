
const numberCategories = document.querySelector('ul').children.length;
console.log('Number of categories:', numberCategories);

const categoriesEl = document.querySelectorAll('.item');
categoriesEl.forEach(item => {
    const title = item.querySelector('h2').textContent;
    const items = item.querySelectorAll('ul li');
    console.log(`Category: ${title}`);
    console.log(`Element : ${items.length}`);
})






