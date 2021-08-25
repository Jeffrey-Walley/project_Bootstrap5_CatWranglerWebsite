mapboxgl.accessToken = 'your API_KEY here';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-108.037, 33.19],
    zoom: 7,
});