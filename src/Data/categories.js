import photosData from './photos';
const {photos} = photosData;

export default {
    categories: [
        { id: 'argentina', name: 'Argentina', totalPhotos: photos['argentina'].length, coverImage: './img/argentina/rio-mina-clavero.jpg'},
        { id: 'mexico', name: 'Mexico', totalPhotos: photos['mexico'].length, coverImage: './img/mexico/barrancas_del_cobre.jpg'},
        { id: 'brazil', name: 'Brazil', totalPhotos: photos['brazil'].length, coverImage: './img/brazil/amazonas.jpg'},
        { id: 'colombia', name: 'Colombia', totalPhotos: photos['colombia'].length, coverImage: '../img/brazil/amazonas.jpg'},
        { id: 'guatemala', name: 'Guatemala', totalPhotos: photos['guatemala'].length, coverImage: './img/brazil/amazonas.jpg'},
        { id: 'panama', name: 'Panama', totalPhotos: photos['panama'].length, coverImage: './img/brazil/amazonas.jpg'},
    ],
}