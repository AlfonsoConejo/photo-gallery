import dataCategories from "./categories";
const {categories} = dataCategories;
const containerCategories = document.getElementById('categories');

//Loads the information of the categories into the main page
categories.forEach((category)=> {
   const newCategory = document.createElement('a');
   newCategory.setAttribute('draggable','false');
   const template = `

    <img class="category__img" src="${category.coverImage}" alt=""/> 
    <div class="category-__data">
        <p class="category__name" >${category.name}</p>
    </div>
   `;

   newCategory.innerHTML = template;
   newCategory.classList.add("category");
   newCategory.href = "#";
   newCategory.dataset.category = category.id;

   containerCategories.append(newCategory);
});