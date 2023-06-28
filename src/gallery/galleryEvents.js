import closeGallery from "./closeGallery";
import slideClick from "./slideClick";
import { loadPreviousNext } from "./loadImage";

// Close Gallery
const gallery = document.getElementById('gallery');
gallery.addEventListener('click', (e) => {
    const button = e.target.closest("button");

    if (button?.dataset?.action === 'close-gallery'){
        closeGallery();
        document.body.style.overflow = '';
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