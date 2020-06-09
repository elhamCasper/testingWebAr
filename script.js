
window.onload = () => {
    const button = document.querySelector('button[data-action="change"]');
    button.innerText = '﹖';

    let places = staticLoadPlaces();
    renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'kkip',
            location: {
                // decomment the following and add coordinates:
                // lat: 6.084702,
                // lng: 116.165717,
                lat:6.085254096494074, lng:116.16549007214257
            },
           
        },
    ];
}

var models = [
    // {
    //     url: './assets/magnemite/scene.gltf',
    //     scale: '0.5 0.5 0.5',
    //     info: 'Magnemite, Lv. 5, HP 10/10',
    //     rotation: '0 180 0',
    // },
    // {
    //     url: './assets/articuno/scene.gltf',
    //     scale: '0.2 0.2 0.2',
    //     rotation: '0 180 0',
    //     info: 'Articuno, Lv. 80, HP 100/100',
    // },
    {
        url: './assets/eureka/scene.gltf',
        scale: '5 5 5',
        rotation: '0 0 0',
        info: 'Eureka, Lv. 100, HP 100/100',
    },
    {
        url: 'https://poly.googleusercontent.com/downloads/c/fp/1591212678436005/fhNFcBydj7T/7zVvuQkXFf_/model.gltf',
        scale: '5 5 5',
        rotation: '0 0 0',
        info: 'Eureka2, Lv. 100, HP 100/100',
    },
    {
        url: './assets/eureka/model.gltf',
        scale: '5 5 5',
        rotation: '0 0 0',
        info: 'Eureka3, Lv. 100, HP 100/100',
    },
    // {
    //     url: './assets/dragonite/scene.gltf',
    //     scale: '0.01 0.01 0.01',
    //     rotation: '180 270 0',
    //     info: 'Dragonite, Lv. 99, HP 150/150',
    // },
];

var modelIndex = 0;
var setModel = function (model, entity) {
    if (model.scale) {
        entity.setAttribute('scale', model.scale);
    }

    if (model.rotation) {
        entity.setAttribute('rotation', model.rotation);
    }

    if (model.position) {
        entity.setAttribute('position', model.position);
    }

    entity.setAttribute('gltf-model', model.url);

    const div = document.querySelector('.instructions');
    div.innerText = model.info;
};

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);

        setModel(models[modelIndex], model);

        model.setAttribute('animation-mixer', '');

        document.querySelector('button[data-action="change"]').addEventListener('click', function () {
            var entity = document.querySelector('[gps-entity-place]');
            modelIndex++;
            var newIndex = modelIndex % models.length;
            setModel(models[newIndex], entity);
        });

        scene.appendChild(model);
    });
}
