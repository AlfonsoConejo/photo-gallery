'use strict';

var photosData = {    
        photos: {
            argentina: [
                {
                    id: 1,
                    photo_name: 'Río Mina Clavero',
                    description: 'El río Mina Clavero es un cauce natural de agua del Valle de Traslasierra, en la Provincia de Córdoba (Argentina); que se forma a partir de la confluencia de varios arroyos caudalosos que bajan de la Pampa de Achala, entre los cuales debe mencionarse los de La Cornetita, Potrero de los Blancos y Cerrito Blanco, que concurren al sitio llamado La Bolsa, donde queda formado el río. ',
                    location: './img/argentina/rio-mina-clavero.jpg',
                },
                {
                    id: 2,
                    photo_name: 'Río Mina Clavero',
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
                    description: 'El cañón del Sumidero es un estrecho cañón de gran profundidad situado a 5 km de Tuxtla Gutiérrez, capital del estado de Chiapas, México; dentro del municipio de Chiapa de Corzo. Este cañón tiene un acantilado cuya altura va un poco más allá de los 1,000 m s. n. m. y se levanta sobre el cauce del río Grijalva, que tiene una profundidad de más de 250 m . La falla geológica se abrió hace aproximadamente doce millones de años en la Sierra Norte de Chiapas. ',
                    location: './img/mexico/canon-del-sumidero.jpg',
                },
                {
                    id: 8,
                    photo_name: 'Gran Desiero de Altar',
                    description: 'El Gran Desierto de Altar es una importante sub-ecorregión del desierto de Sonora, localizado en el Estado de Sonora, en el noroeste de México. Tiene la única región erg activa en América del Norte. El desierto se extiende a través de gran parte de la frontera al norte del golfo de California, alcanzando más de 100 kilómetros de este a oeste, y más de 50 kilómetros de norte a sur. Constituye el área desértica continua más grande área dentro del desierto de Sonora. ',
                    location: './img/mexico/desierto-de-altar.jpg',
                },
                {
                    id: 9,
                    photo_name: 'Prismos Basálticos',
                    description: 'Los prismas basálticos de Santa María Regla son unas columnas basálticas, que se localizan en el centro oriente del estado de Hidalgo, México. Son el resultado del enfriamiento lento de coladas de lava hace unos 2.5 millones de años, en el pleistoceno.1​ De esta manera se formaron las columnas de basalto tanto verticalmente como horizontalmente, con forma de prismas poligonales (principalmente pentagonales y hexagonales)',
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
                    description: 'Vista desde punto panorámico Foz do Iguazú a «Cataratas» o «Iguazú», son un conjunto de cataratas que se localizan en el río Iguazú, en el límite entre la provincia argentina de Misiones, el estado brasileño de Paraná y el departamento paraguayo de Alto Paraná. El nombre de las cataratas en español, Iguazú y arcaicamente Yguazú, proviene de dos palabras de origen guaraní: la palabra «y» y la palabra «guazú», que en esa lengua quieren decir y= \'agua\', guazú= \'grande\'; es decir, Iguazú significa “agua grande”. En portugués se las denomina cataratas do Iguaçu. ',
                    location: './img/brazil/cascadas-del-iguazu.jpg',
                },
                {
                    id: 13,
                    photo_name: 'Pan de Azúcar',
                    description: 'El Pan de Azúcar (en portugués, Pão de Açúcar) es un peñasco situado en Río de Janeiro, Brasil, en la boca de la bahía de Guanabara sobre una península que sobresale en el océano Atlántico. Lo más probable es que su nombre haga referencia a los "panes de azúcar ", forma tradicional en que se producía el azúcar hasta finales del siglo XIX y que consistía en largos conos de punta redondeada similares al morro',
                    location: './img/brazil/pan-de-azucar.jpg',
                },
                {
                    id: 14,
                    photo_name: 'Parque nacional de los Lençóis Maranhenses',
                    description: 'El Parque Nacional de los Lençóis Maranhenses es un sitio de conservación de la naturaleza brasileña. Es un área protegida integral ubicada en la región nordeste del estado de Maranhão. El territorio del parque, con una superficie de 156.584 ha, está distribuido por los municipios de Barreirinhas, Primeira Cruz y Santo Amaro do Maranhão.​ El parque fue creado con el objetivo principal de la "protección de la flora, la fauna y la belleza natural, que están en el sitio."',
                    location: './img/brazil/pan-de-azucar.jpg',
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
                    photo_name: 'Archipiélago de San Andrés',
                    description: 'ABCDERDAFGJHKGHKD',
                    location: './img/brazil/amazonas.jpg',
                },
                {
                    id: 17,
                    photo_name: 'Salto del Tequendama',
                    description: 'dfykdykjdfgbg',
                    location: './img/brazil/cascadas-del-iguazu.jpg',
                },
                {
                    id: 18,
                    photo_name: 'Piedra del Peñol',
                    description: 'urtuiuykhmdgc',
                    location: './img/brazil/pan-de-azucar.jpg',
                },
                {
                    id: 19,
                    photo_name: 'Valle del Cocora',
                    description: 'poiuklghnsfgbsfd',
                    location: './img/brazil/pan-de-azucar.jpg',
                },
                {
                    id: 20,
                    photo_name: 'Desierto de la Tatacoa',
                    description: '9oyukrynfdhyjrwe',
                    location: './img/brazil/floresta_da_tijuca.jpg',
                }
            ],

            guatemala: [
                {
                    id: 21,
                    photo_name: 'Volcán de Pacaya',
                    description: 'a del río',
                    location: './img/brazil/amazonas.jpg',
                },
                {
                    id: 22,
                    photo_name: 'Parque Nacional de Tikal',
                    description: 'VParaná. Iguaçu. ',
                    location: './img/brazil/cascadas-del-iguazu.jpg',
                },
                {
                    id: 23,
                    photo_name: 'Lago de Atitlan',
                    location: './img/brazil/pan-de-azucar.jpg',
                },
                {
                    id: 24,
                    photo_name: 'Semuc Champey ',
                    description: 'Eleñ',
                    location: './img/brazil/pan-de-azucar.jpg',
                },
                {
                    id: 25,
                    photo_name: 'Reserva de la Biosfera Maya',
                    description: ' que se localizo de la Tijuca.',
                    location: './img/brazil/floresta_da_tijuca.jpg',
                }
            ], 

            panama: [
                {
                    id: 26,
                    photo_name: 'Guna Yala',
                    description: 'hujyjthg',
                    location: './img/brazil/amazonas.jpg',
                },
                {
                    id: 27,
                    photo_name: 'Cerro Cariguana',
                    description: 'lololo',
                    location: './img/brazil/cascadas-del-iguazu.jpg',
                },
                {
                    id: 28,
                    photo_name: 'Taboga',
                    description: 'poiuytrewdfgh',
                    location: './img/brazil/pan-de-azucar.jpg',
                },
                {
                    id: 29,
                    photo_name: 'Pozo azul',
                    description: 'hola',
                    location: './img/brazil/pan-de-azucar.jpg',
                },
                {
                    id: 30,
                    photo_name: 'The Lost Waterfalls (Boquete)',
                    description: '86jcggsdf',
                    location: './img/brazil/floresta_da_tijuca.jpg',
                }
            ]
        }, 
};

const {photos} = photosData;

var dataCategories = {
    categories: [
        { id: 'argentina', name: 'Argentina', totalPhotos: photos['argentina'].length, coverImage: './img/argentina/rio-mina-clavero.jpg'},
        { id: 'mexico', name: 'Mexico', totalPhotos: photos['mexico'].length, coverImage: './img/mexico/barrancas_del_cobre.jpg'},
        { id: 'brazil', name: 'Brazil', totalPhotos: photos['brazil'].length, coverImage: './img/brazil/amazonas.jpg'},
        { id: 'colombia', name: 'Colombia', totalPhotos: photos['colombia'].length, coverImage: '../img/brazil/amazonas.jpg'},
        { id: 'guatemala', name: 'Guatemala', totalPhotos: photos['guatemala'].length, coverImage: './img/brazil/amazonas.jpg'},
        { id: 'panama', name: 'Panama', totalPhotos: photos['panama'].length, coverImage: './img/brazil/amazonas.jpg'},
    ],
};

const {categories} = dataCategories;
const containerCategories = document.getElementById('categories');

categories.forEach((category)=> {
    console.log(category.coverImage);
   const newCategory = document.createElement('a');
   const template = `
    <img class="category__img" src="${category.coverImage}" alt="" /> 
    <div class="categoy-__data">
        <p class="category__name" >${category.name}</p>
        <p class="__number__of__photos" >${category.totalPhotos}</p>
    </div>
   `;

   newCategory.innerHTML = template;
   newCategory.classList.add("category");
   newCategory.href = "#";
   newCategory.dataset.category = category.id;

   containerCategories.append(newCategory);
});
