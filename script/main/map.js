function initMap() {
  let location = { lat: 49.803, lng: 24.00126 };
  let map = new google.maps.Map(document.querySelector(".map"), {
    zoom: 16,
    center: location,
  });

  let marker = new google.maps.Marker({ position: location, map: map });
}
