import photosData from './photos';
const {photos} = photosData;

export default {
    categories: [
        { id: 'argentina', name: 'Argentina', totalPhotos: photos['argentina'].length, coverImage: './img/argentina/rio-mina-clavero.jpg'},
        { id: 'mexico', name: 'México', totalPhotos: photos['mexico'].length, coverImage: './img/mexico/barrancas_del_cobre.jpg'},
        { id: 'brazil', name: 'Brasil', totalPhotos: photos['brazil'].length, coverImage: './img/brazil/amazonas.jpg'},
        { id: 'colombia', name: 'Colombia', totalPhotos: photos['colombia'].length, coverImage: '../img/colombia/estoraques.jpg'},
        { id: 'guatemala', name: 'Guatemala', totalPhotos: photos['guatemala'].length, coverImage: './img/guatemala/volcan-pacaya.jpg'},
        { id: 'peru', name: 'Perú', totalPhotos: photos['peru'].length, coverImage: './img/peru/piedras-huayllay.jpg'},
    ],
}