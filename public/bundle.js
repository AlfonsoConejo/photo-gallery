'use strict';

var data = {    
        photos: {
            argentina: [
                {
                    id: 1,
                    photo_name: 'Río Mina Clavero',
                    description: 'El río Mina Clavero es un cauce natural de agua del Valle de Traslasierra, en la Provincia de Córdoba que se forma a partir de la confluencia de varios arroyos caudalosos que bajan de la Pampa de Achala, entre los cuales debe mencionarse los de La Cornetita, Potrero de los Blancos y Cerrito Blanco, que concurren al sitio llamado La Bolsa, donde queda formado el río. ',
                    location: './img/argentina/rio-mina-clavero.jpg',
                },
                {
                    id: 2,
                    photo_name: 'Salinas Grandes',
                    description: 'Salinas Grandes es la denominación de un salar de la provincia argentina de Jujuy situada al noroeste de Argentina. El origen de las Salinas Grandes de Jujuy data de un extenso periodo ubicado temporalmente entre 5 y 10 millones de años a. p. En tal extendido plazo la cuenca de este salar se cubrió de aguas con gran cantidad de sales provenientes de la actividad volcánica. ',
                    location: './img/argentina/salinas-grandes.jpg',
                },
                {
                    id: 3,
                    photo_name: 'Glaciar Perito Moreno',
                    description: 'El glaciar Perito Moreno es una gruesa masa de hielo ubicada en el departamento Lago Argentino de la provincia de Santa Cruz, Argentina. El nombre del glaciar hace honor a Francisco Moreno, director del museo de la Sociedad Científica Argentina y activo explorador de la zona austral de ese país. ',
                    location: './img/argentina/glaciar-perito-moreno.jpg',
                },
                {
                    id: 4,
                    photo_name: 'Selva Misionera',
                    description: 'La selva misionera o selva argentina, ubicada en la actual Provincia de Misiones y una pequeña porción en el extremo nordeste de la Provincia de Corrientes. Es una de las regiones más biodiversas de la Argentina,​ con alrededor de 3.000 especies de plantas vasculares y 500 especies de aves.​ Es el hábitat del yaguareté​ y el lugar donde se concentra la mayor cantidad de ejemplares de esta especie en la Argentina.',
                    location: './img/argentina/selva-misionera.jpg',
                },
                {
                    id: 5,
                    photo_name: 'Parque nacional Nahuel Huapi',
                    description: 'El parque nacional Nahuel Huapi (Isla del Jaguar) (estrictamente parque y reserva nacional Nahuel Huapi) es una extensa área natural protegida ubicada en el sudoeste de la provincia del Neuquén y en el oeste de la de Río Negro, en la Patagonia de Argentina.',
                    location: './img/argentina/parque-nacional-argentina.jpg',
                }
            ],

            mexico: [
                {
                    id: 6,
                    photo_name: 'Barrancas del Cobre',
                    description: 'Las Barrancas del Cobre o el Cañón del Cobre se denomina al sistema conformado por siete barrancas. Localizado en la Sierra Tarahumara en el suroeste del estado mexicano de Chihuahua en México. El sistema de cañones es cuatro veces más grande en extensión (60 mil km²) y casi dos veces mayor en profundidad que el Gran Cañón de Colorado en Arizona, en los Estados Unidos de América. Es hogar de los indígenas Rarámuris o Tarahumaras.',
                    location: './img/mexico/barrancas_del_cobre.jpg',
                },
                {
                    id: 7,
                    photo_name: 'Cañón del Sumidero',
                    description: 'El cañón del Sumidero es un estrecho cañón de gran profundidad situado a 5 km de Tuxtla Gutiérrez, capital del estado de Chiapas, México, dentro del municipio de Chiapa de Corzo. Este cañón tiene un acantilado cuya altura va un poco más allá de los 1,000 m s. n. m. y se levanta sobre el cauce del río Grijalva, que tiene una profundidad de más de 250 m . La falla geológica se abrió hace aproximadamente doce millones de años en la Sierra Norte de Chiapas. ',
                    location: './img/mexico/canon-del-sumidero.jpg',
                },
                {
                    id: 8,
                    photo_name: 'Gran Desiero de Altar',
                    description: 'El Gran Desierto de Altar es una importante sub-ecorregión del desierto de Sonora, localizado en el Estado de Sonora, en el noroeste de México. Tiene la única región erg activa en América del Norte. El desierto se extiende a través de gran parte de la frontera al norte del golfo de California, alcanzando más de 100 kilómetros de este a oeste, y más de 50 kilómetros de norte a sur. Constituye el área desértica continua más grande dentro del desierto de Sonora. ',
                    location: './img/mexico/desierto-de-altar.jpg',
                },
                {
                    id: 9,
                    photo_name: 'Prismos Basálticos',
                    description: 'Los prismas basálticos de Santa María Regla son unas columnas basálticas, que se localizan en el centro oriente del estado de Hidalgo, México. Son el resultado del enfriamiento lento de coladas de lava hace unos 2.5 millones de años, en el pleistoceno. De esta manera se formaron las columnas de basalto tanto verticalmente como horizontalmente, con forma de prismas poligonales (principalmente pentagonales y hexagonales).',
                    location: './img/mexico/prismas-basalticos.jpg',
                },
                {
                    id: 10,
                    photo_name: 'Popocatépetl',
                    description: 'El Popocatépetl, también conocido como don Goyo,​ es un volcán activo localizado en México. Tiene una altitud de 5400 metros sobre el nivel del mar. Se encuentra en los límites territoriales de los estados de México, Morelos y Puebla. Su nombre, proveniente de la lengua náhuatl, compuesto por popōca «humear» y tepētl «montaña, cerro», en conjunto significa «montaña que humea», debido a su ya constante actividad desde la época prehispánica.',
                    location: './img/mexico/popocatepetl.jpg',
                }
            ],

            brazil: [
                {
                    id: 11,
                    photo_name: 'Selva Amazónica',
                    description: 'La Amazonia, también denominada Amazonía y a veces llamada simplemente «el Amazonas»,  es una vasta región de la parte horizontal y septentrional de América del Sur que comprende la selva tropical de la cuenca del río Amazonas. Las adyacentes regiones de Las Guayanas y el Gran Chaco también poseen selvas tropicales, por lo que muchas veces se las considera parte de la Amazonia, especialmente por WWF. ',
                    location: './img/brazil/amazonas.jpg',
                },
                {
                    id: 12,
                    photo_name: 'Cataratas del Iguazú',
                    description: 'Vista desde punto panorámico Foz do Iguazú a «Cataratas» o «Iguazú», son un conjunto de cataratas que se localizan en el río Iguazú, en el límite entre la provincia argentina de Misiones, el estado brasileño de Paraná y el departamento paraguayo de Alto Paraná. El nombre de las cataratas en español, Iguazú y arcaicamente Yguazú, proviene de dos palabras de origen guaraní: la palabra «y» y la palabra «guazú», que en esa lengua quieren decir y= \'agua\', guazú= \'grande\'; es decir, Iguazú significa “agua grande”. En portugués se les denomina cataratas do Iguaçu. ',
                    location: './img/brazil/cascadas-del-iguazu.jpg',
                },
                {
                    id: 13,
                    photo_name: 'Pan de Azúcar',
                    description: 'El Pan de Azúcar (en portugués, Pão de Açúcar) es un peñasco situado en Río de Janeiro, Brasil, en la boca de la bahía de Guanabara sobre una península que sobresale en el océano Atlántico. Lo más probable es que su nombre haga referencia a los "panes de azúcar ", forma tradicional en que se producía el azúcar hasta finales del siglo XIX y que consistía en largos conos de punta redondeada similares al morro.',
                    location: './img/brazil/pan-de-azucar.jpg',
                },
                {
                    id: 14,
                    photo_name: 'Parque nacional de los Lençóis Maranhenses',
                    description: 'El Parque Nacional de los Lençóis Maranhenses es un sitio de conservación de la naturaleza brasileña. Es un área protegida integral ubicada en la región nordeste del estado de Maranhão. El territorio del parque, con una superficie de 156.584 hectáreas, está distribuido por los municipios de Barreirinhas, Primeira Cruz y Santo Amaro do Maranhão.​ El parque fue creado con el objetivo principal de la "protección de la flora, la fauna y la belleza natural, que están en el sitio."',
                    location: './img/brazil/lencois-maranheses.jpg',
                },
                {
                    id: 15,
                    photo_name: 'Parque nacional de la Tijuca',
                    description: 'El Parque Nacional de la Tijuca (en portugués: Parque Nacional da Tijuca), es un parque nacional de Brasil que se localiza en la ciudad y estado de Río de Janeiro. Entre los puntos turísticos del parque, además de sendas, grutas y cascadas, se encuentran lugares famosos de la ciudad, como la Pedra da Gávea, el cerro del Corcovado y el pico de la Tijuca, cima del parque, a 1.022 m s. n. m.. El parque presenta un relieve montañoso, incluyendo áreas del macizo de la Tijuca.',
                    location: './img/brazil/floresta_da_tijuca.jpg',
                }
            ], 

            colombia: [
                {
                    id: 16,
                    photo_name: 'Los Estoraques',
                    description: 'El área natural única Los Estoraques es una de las más pequeñas áreas protegidas de Colombia, abarcando tan solo 6,4 km² de superficie. Considerada única en su tipo por sus bellos paisajes quebradizos y erosionados, el área se encuentra ubicada a una altura que va entre 1450 y 2100 ms nm, en plena Cordillera Oriental de la región andina.',
                    location: './img/colombia/estoraques.jpg',
                },
                {
                    id: 17,
                    photo_name: 'Salto del Tequendama',
                    description: 'El salto del Tequendama es una cascada natural en Colombia, ubicada en el municipio de Soacha en el departamento de Cundinamarca. El entorno geográfico de esta catarata se encuentra en las zonas montañosas del Tequendama y Canoas que separan la sabana de Bogotá del valle bajo del río homónimo por el cual discurre el bosque alto andino y sus aguas caen desde aproximadamente 157 metros.',
                    location: './img/colombia/salto-tequendama.jpg',
                },
                {
                    id: 18,
                    photo_name: 'Piedra del Peñol',
                    description: 'El peñón de Guatapé, o piedra del Peñol (lengua tahamí: Mojarrá), es un monolito de 220 metros de altura, localizado en el término municipal de Guatapé, Antioquia.​ La piedra de El Peñol es una masa granítica, compuesta por cuarzo, feldespato y mica, fue escalada por primera vez en 16 de julio de 1954 por un habitante de la zona, Luis Eduardo Villegas López. Actualmente se puede acceder a su cumbre subiendo los 715 escalones construidos en el monolito.',
                    location: './img/colombia/piedra-penol.jpg',
                },
                {
                    id: 19,
                    photo_name: 'Valle de Cocora',
                    description: 'El valle de Cocora es un paisaje natural localizado en la cordillera central de los Andes colombianos, específicamente en el departamento del Quindío. Cuenta con algunas poblaciones del árbol nacional de Colombia, la palma de cera del Quindío (Ceroxylon quindiuense), así como de una gran variedad de flora y fauna, mucha de ella en peligro de extinción, protegida bajo el estatus de parque nacional natural.',
                    location: './img/colombia/valle-cocora.jpg',
                },
                {
                    id: 20,
                    photo_name: 'Desierto de la Tatacoa',
                    description: 'El Desierto de la Tatacoa es considerado como uno de los principales atractivos ambientales y turísticos del departamento del Huila, donde los procesos de erosión, las plantas de cactus y arbustos espinosos, las condiciones extremas del clima, y los hallazgos fósiles, llaman la atención de visitantes interesados en la apreciación de la naturaleza, al igual que de científicos de diversos países que investigan la evolución de la tierra y de los organismos vivos.',
                    location: './img/colombia/desierto-tatacoa.jpg',
                }
            ],

            guatemala: [
                {
                    id: 21,
                    photo_name: 'Volcán de Pacaya',
                    description: 'El Volcán de Pacaya es un volcán activo ubicado en el municipio de Amatitlán en el departamento de Guatemala. Después de estar dormido durante un siglo, hizo erupción violentamente en 1965 y desde entonces ha estado en constante actividad eruptiva.',
                    location: './img/guatemala/volcan-pacaya.jpg',
                },
                {
                    id: 22,
                    photo_name: 'Parque Nacional de Tikal',
                    description: 'El Parque nacional Tikal está situado en el departamento de Petén, en el norte de Guatemala y fue creado bajo decreto gubernativo de 26 de mayo de 1955. En 1979 fue declarado Patrimonio de la Humanidad por la Unesco y fue autorizado tanto por sus valores naturales como culturales. Desde 1990 forma parte de la red mundial de reservas de la biosfera, dentro de la Reserva de la Biosfera Maya.',
                    location: './img/guatemala/tikal.jpg',
                },
                {
                    id: 23,
                    photo_name: 'Lago de Atitlán',
                    description: 'El lago de Atitlán es un cuerpo de agua ubicado en un enorme cráter volcánico en la zona montañosa del suroeste de Guatemala. Está rodeado de colinas verdes empinadas y es conocido por las aldeas mayas y los volcanes con impresionantes conos agudos. La ajetreada localidad de Panajachel, donde se venden tejidos tradicionales, es una vía de acceso popular al lago.',
                    location: './img/guatemala/lago-atitlan.jpg',
                },
                {
                    id: 24,
                    photo_name: 'Semuc Champey ',
                    description: 'Semuc Champey (donde el río se esconde bajo las piedras), es un enclave natural localizado en el municipio guatemalteco de Lanquín (12 km aprox. al sur del centro urbano de Lanquín), en el departamento de Alta Verapaz, Guatemala. Fue declarado en 1999 Monumento Natural por el entonces presidente de la República de Guatemala, Álvaro Arzú Irigoyen y se encuentra muy próximo geográficamente al parque nacional Grutas de Lanquín con el que comparte un centro de visitantes para dar cobertura al turista.',
                    location: './img/guatemala/semuc-champey.jpg',
                },
                {
                    id: 25,
                    photo_name: 'Reserva de la Biosfera Maya',
                    description: 'La Reserva de la biosfera maya es, con una superficie de 21.602,04 km², el espacio natural protegido más grande de Guatemala. El modelo de reserva de la biosfera, implementado por la UNESCO, tiene por objeto promover un equilibrio entre las actividades humanas y la biosfera mediante la inclusión del desarrollo económico sostenible en la política de conservación.',
                    location: './img/guatemala/biosfera-maya.jpg',
                }
            ], 

            peru: [
                {
                    id: 26,
                    photo_name: 'Bosque de Piedras de Huayllay',
                    description: 'El Bosque de Piedras de Huayllay está ubicado en el distrito de Huayllay, provincia y departamento de Pasco, Perú. Tiene una extensión de 6000 hectáreas y está protegido desde 1974 por el establecimiento del Santuario nacional de Huayllay. Constituye una maravilla natural andina, a 4,310 metros sobre el nivel del mar.',
                    location: './img/peru/piedras-huayllay.jpg',
                },
                {
                    id: 27,
                    photo_name: 'Parque Nacional Bahuaja-Sonene',
                    description: 'El parque nacional Bahuaja-Sonene (PNBS)​ es una área protegida del Perú ubicado en la provincia de Tambopata en el departamento de Madre de Dios y en las provincias de Carabaya y Sandia, en el departamento de Puno. El área protege la Pampas del Heath, la única zona de sabana húmeda tropical en el Perú, que contiene vegetación y aguajales.',
                    location: './img/peru/bahuaja.jpg',
                },
                {
                    id: 28,
                    photo_name: 'Reserva Nacional de Paracas',
                    description: 'La reserva nacional de Paracas es una zona protegida de Perú ubicada en la provincia de Pisco, dentro del departamento de Ica. La reserva nacional de Paracas fue declarada el 25 de septiembre de 1975. Fue creada con el fin de conservar una porción del mar y del desierto del Perú, dando protección a las diversas especies de flora y fauna silvestres que allí viven. ',
                    location: './img/peru/paracas.jpg',
                },
                {
                    id: 29,
                    photo_name: 'Laguna Humantay',
                    description: 'La Laguna Humantay toma su nombre del nevado cercano a ella (Humantay, 5.473 m) y es considerada una de las lagunas más hermosas y sagradas de Cusco. Además de los turistas que realizan excursiones de un día a la laguna, están los turistas más aventureros que realizan la llamada “Salkantay Trek”, la cual es una caminata de 5 días a Machu Picchu y donde tienen la chance de visitar esta laguna a su paso.',
                    location: './img/peru/humantay.jpg',
                },
                {
                    id: 30,
                    photo_name: 'Montaña de Siete Colores',
                    description: 'Se trata de una formación montañosa teñida de varias tonalidades producto de la compleja combinación de minerales. Las laderas y la cumbre están teñidas de diversos tonos que incluyen el rojo, morado, verde, amarillo, rosado y otras variaciones. Este atractivo turístico estuvo rodeado de hielo hace no muchos años. Desde el 2016, este lugar recibe a cientos de visitantes al día convirtiéndose, junto con Machu Picchu, en uno de los lugares más visitados en Cusco-Perú.',
                    location: './img/peru/siete-colores.jpg',
                }
            ]
        }, 
};

const {photos} = data;

var dataCategories = {
    categories: [
        { id: 'argentina', name: 'Argentina', totalPhotos: photos['argentina'].length, coverImage: './img/argentina/rio-mina-clavero.jpg'},
        { id: 'mexico', name: 'México', totalPhotos: photos['mexico'].length, coverImage: './img/mexico/barrancas_del_cobre.jpg'},
        { id: 'brazil', name: 'Brasil', totalPhotos: photos['brazil'].length, coverImage: './img/brazil/amazonas.jpg'},
        { id: 'colombia', name: 'Colombia', totalPhotos: photos['colombia'].length, coverImage: '../img/colombia/estoraques.jpg'},
        { id: 'guatemala', name: 'Guatemala', totalPhotos: photos['guatemala'].length, coverImage: './img/guatemala/volcan-pacaya.jpg'},
        { id: 'peru', name: 'Perú', totalPhotos: photos['peru'].length, coverImage: './img/peru/piedras-huayllay.jpg'},
    ],
};

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

const gallery$3 = document.getElementById('gallery');
const loadImage = (id, name, location, description) => {
    gallery$3.querySelector('.gallery-image').src = location;
    gallery$3.querySelector('.gallery-image').dataset.idImage = id;
    gallery$3.querySelector('.gallery-title').innerText = name;
    gallery$3.querySelector('.gallery-description-active-image').innerText = description;

    const currentCategory = gallery$3.dataset.category;
    const photos = data.photos[currentCategory];

    let indexCurrentImage;
    photos.forEach((photo, index) => {
        if(photo.id === id){
            indexCurrentImage = index;
        }
    });

    //Add border to active image
    if(gallery$3.querySelectorAll('.gallery-carousel-image').length > 0){

        //delete border from the previous slide
        gallery$3.querySelector('.carousel-active-image').classList.remove('carousel-active-image');

        gallery$3.querySelectorAll('.gallery-carousel-image')[indexCurrentImage].classList.add('carousel-active-image');
    }
};

//Load next or previous image when clicking buttons
const loadPreviousNext = (direction) => {
    const currentCategory = gallery$3.dataset.category;
    const photos = data.photos[currentCategory];
    const idCurrentImage = parseInt(gallery$3.querySelector('.gallery-image').dataset.idImage);

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

const categoriesContainer = document.getElementById("categories");
const gallery$2 = document.getElementById("gallery");
document.getElementById("wrapper");

//Opens the gallery after a category is clicked
categoriesContainer.addEventListener('click', (e) => {
	e.preventDefault(); 
    if (e.target.closest('a')){
        gallery$2.classList.add("active--gallery");
        document.body.style.overflow = 'hidden';
        
        const activeCategory = e.target.dataset.category;
        gallery$2.dataset.category = activeCategory;

        const photos = data.photos[activeCategory];
        const carousel = gallery$2.querySelector('.gallery-carousel-slides');
        carousel.innerHTML = '';

        const {id, photo_name, location, description} = photos[0];
        loadImage(id, photo_name, location, description);

        photos.forEach(photo => {
            const slide =`
            <a href="#" class="gallery-carousel-slide">
                <img class="gallery-carousel-image" src= "${photo.location}" data-id="${photo.id}"/>
            </a>
            `;

            gallery$2.querySelector('.gallery-carousel-slides').innerHTML += slide;

            
        });

        gallery$2.querySelector('.gallery-carousel-image').classList.add('carousel-active-image');
    }

    

});

const gallery$1 = document.getElementById('gallery');

const closeGallery = () =>{
    gallery$1.classList.remove('active--gallery');
    document.body.style.overflow = '';
};

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
        }    });
    loadImage(id, name, location, description);
};

// Added event listener to gallery
const gallery = document.getElementById('gallery');
document.querySelector('.gallery_container');

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
