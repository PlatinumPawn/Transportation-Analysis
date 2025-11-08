const map = L.map('map').setView([42.3601, -71.0589], 13); // Boston by default

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors',
}).addTo(map);

L.marker([42.3601, -71.0589]).addTo(map)
  .bindPopup('Hello from Boston!')
  .openPopup();

L.Routing.control({
waypoints: [
    L.latLng(42.3601, -71.0589), // Boston
    L.latLng(42.3736, -71.1097)  // Cambridge
],
routeWhileDragging: true
}).addTo(map);

const toggleBtn = document.getElementById('toggle-panel');
const infoPanel = document.getElementById('info-panel');

toggleBtn.addEventListener('click', () => {
    console.log("Hidden toggle");
    infoPanel.classList.toggle('hidden');
});