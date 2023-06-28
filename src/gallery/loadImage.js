import data from './../Data/photos';

const gallery = document.getElementById('gallery');
const loadImage = (id, name, location, description) => {
    gallery.querySelector('.gallery-image').src = location;
    gallery.querySelector('.gallery-image').dataset.idImage = id;
    gallery.querySelector('.gallery-title').innerText = name;
    gallery.querySelector('.gallery-description-active-image').innerText = description;

    const currentCategory = gallery.dataset.category;
    const photos = data.photos[currentCategory];

    let indexCurrentImage;
    photos.forEach((photo, index) => {
        if(photo.id === id){
            indexCurrentImage = index;
        }
    });

    //Add border to active image
    if(gallery.querySelectorAll('.gallery-carousel-image').length > 0){

        //delete border from the previous slide
        gallery.querySelector('.carousel-active-image').classList.remove('carousel-active-image');

        gallery.querySelectorAll('.gallery-carousel-image')[indexCurrentImage].classList.add('carousel-active-image');
    }
};

//Load next or previous image when clicking buttons
const loadPreviousNext = (direction) => {
    const currentCategory = gallery.dataset.category;
    const photos = data.photos[currentCategory];
    const idCurrentImage = parseInt(gallery.querySelector('.gallery-image').dataset.idImage);

    let indexCurrentImage;
    photos.forEach((photo, index) => {
        if(photo.id === idCurrentImage){
            indexCurrentImage = index;
        }
    });

    if ( direction === 'next') {
        if(photos[indexCurrentImage + 1]){
            const {id, photo_name, location, description} = photos[indexCurrentImage + 1];
            loadImage(id, photo_name, location, description);
        }
    } else if (direction === 'previous') {
        if(photos[indexCurrentImage - 1]) {
            const {id, photo_name, location, description} = photos[indexCurrentImage - 1];
            loadImage(id, photo_name, location, description);
        }
    }
};

export {loadImage, loadPreviousNext};