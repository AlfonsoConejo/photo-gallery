import data from './../Data/photos';
import { loadImage } from './loadImage';

const slideClick = (e) => {
    let location, name, description;

    const id = parseInt(e.target.dataset.id);
    const gallery = document.getElementById('gallery');
    const activeCategory = gallery.dataset.category;
    
    data.photos[activeCategory].forEach(photo => {
        if (photo.id === id){
            location = photo.location;
            name = photo.photo_name;
            description = photo.description;
        };
    });
    loadImage(id, name, location, description);
};

export default slideClick;