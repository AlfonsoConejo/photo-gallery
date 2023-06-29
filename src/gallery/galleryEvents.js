import closeGallery from "./closeGallery";
import slideClick from "./slideClick";
import { loadPreviousNext } from "./loadImage";

// Added event listener to gallery
const gallery = document.getElementById('gallery');
const gallery_container = document.querySelector('.gallery_container');

gallery.addEventListener('click', (e) => {
const button = e.target.closest("button");

    //Close gallery with button
    if (button?.dataset?.action === 'close-gallery'){
        closeGallery();
    }

    //Click on carousel slides
    if (e.target.dataset.id){
        slideClick(e);
        
    }
    //Next image
    if (button?.dataset?.action === 'next-img'){
        loadPreviousNext('next');
    }
    
    //Previous image
    if (button?.dataset?.action === 'previous-img'){
       loadPreviousNext('previous');
    }
});
//Event Listener for keybord events
document.addEventListener('keydown', (e) => {
    //Close gallery
    if (e.key === 'Escape' && gallery.classList.contains('active--gallery')) {
        closeGallery();
    }
    //Next image
    if (e.key === 'ArrowRight' && gallery.classList.contains('active--gallery')) {
        loadPreviousNext('next');
    }
    //Previous image
    if (e.key === 'ArrowLeft' && gallery.classList.contains('active--gallery')) {
        loadPreviousNext('previous');
    }
});