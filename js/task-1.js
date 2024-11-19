const categoriesList = document.getElementById('categories');
const categories = categoriesList.getElementsByClassName('item');

console.log(`Number of categories: ${categories.length}`);

Array.from(categories).forEach(category => {
  const categoryTitle = category.querySelector('h2').textContent;
  const itemsCount = category.querySelectorAll('ul li').length;
  console.log(`Category: ${categoryTitle}, Number of items: ${itemsCount}`);
});
