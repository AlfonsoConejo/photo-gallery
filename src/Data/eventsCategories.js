import { loadImage } from '../gallery/loadImage';
import photosData from './photos';

const categoriesContainer = document.getElementById("categories");
const gallery = document.getElementById("gallery");
const wrapper = document.getElementById("wrapper");

//Opens the gallery after a category is clicked
categoriesContainer.addEventListener('click', (e) => {
	e.preventDefault(); 
    if (e.target.closest('a')){
        gallery.classList.add("active--gallery");
        document.body.style.overflow = 'hidden';
        
        const activeCategory = e.target.dataset.category;
        gallery.dataset.category = activeCategory;

        const photos = photosData.photos[activeCategory];
        const carousel = gallery.querySelector('.gallery-carousel-slides');
        carousel.innerHTML = '';

        const {id, photo_name, location, description} = photos[0];
        loadImage(id, photo_name, location, description);

        photos.forEach(photo => {
            const slide =`
            <a href="#" class="gallery-carousel-slide">
                <img class="gallery-carousel-image" src= "${photo.location}" data-id="${photo.id}"/>
            </a>
            `;

            gallery.querySelector('.gallery-carousel-slides').innerHTML += slide;

            
        });

        gallery.querySelector('.gallery-carousel-image').classList.add('carousel-active-image');
    }

    

});

