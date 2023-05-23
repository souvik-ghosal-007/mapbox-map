mapboxgl.accessToken =
  "pk.eyJ1Ijoic2dob3NhbC0wMDciLCJhIjoiY2xoeXJscmk2MTA2NzNxbGJ4Z24zMjJ3YyJ9.42dugVsqztz6IZErH1gWwA";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  setupMap([-2.24, 53.48]);
}

function setupMap(position) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v12",
    center: [-74.5, 40],
    zoom: 9,
  });

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  });

  map.addControl(directions, "top-left");
}
