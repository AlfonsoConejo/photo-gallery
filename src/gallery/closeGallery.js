const gallery = document.getElementById('gallery');

const closeGallery = () =>{
    gallery.classList.remove('active--gallery');
    document.body.style.overflow = '';
};

export default closeGallery;