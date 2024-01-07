const categoriesList = document.querySelector("#categories");
const items = categoriesList.querySelectorAll(".item");
console.log("Number of categories:", items.length);

items.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoriesListCount = category.querySelectorAll("ul > li").length;
  console.log("Category:", categoryName);
  console.log("Elements:", categoriesListCount);
});
