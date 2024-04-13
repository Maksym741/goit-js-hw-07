const categories = document.querySelectorAll(`ul#categories > li`);
console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const categoryName = category.querySelector(`h2`).textContent;
  const categoryItemCound = category.querySelectorAll(`ul li`).length;

  console.log(`Category:${categoryName}`);
  console.log(`Elements:${categoryItemCound}`);
});
