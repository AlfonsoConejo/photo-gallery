import dataCategories from "./categories";
const {categories} = dataCategories;
const containerCategories = document.getElementById('categories');

categories.forEach((category)=> {
   const newCategory = document.createElement('a');
   newCategory.setAttribute('draggable','false');
   const template = `

    <img class="category__img" src="${category.coverImage}" alt=""/> 
    <div class="categoy-__data">
        <p class="category__name" >${category.name}</p>
    </div>
   `;

   newCategory.innerHTML = template;
   newCategory.classList.add("category");
   newCategory.href = "#";
   newCategory.dataset.category = category.id;

   containerCategories.append(newCategory);
});