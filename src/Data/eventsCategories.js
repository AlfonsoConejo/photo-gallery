import photosData from './photos';

const categoriesContainer = document.getElementById("categories");
const gallery = document.getElementById("gallery");
const wrapper = document.getElementById("wrapper");
console.log(categories);

categoriesContainer.addEventListener('click', (e) => {
	e.preventDefault(); 
    if (e.target.closest('a')){
        console.log(e.target);
        wrapper.classList.add("wrapper-disabled")
        gallery.classList.add("active--gallery");
        document.body.style.overflow = 'hidden';
        const activeCategory = e.target.dataset.category;
        const photos = photosData.photos[activeCategory];
        
        photos.forEach(photo => {
            const slide =`
            <a href="#" class="gallery-carousel-slide">
                <img class="gallery-carousel-image" src= "${photo.location}"/>
            </a>
            `;

            gallery.querySelector('.gallery-carousel-slides').innerHTML += slide;

            gallery.querySelector('.gallery-carousel-slide').classList.add('carousel-active-image');
        });

        
    }

    

});

