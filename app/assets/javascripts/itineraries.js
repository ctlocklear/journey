var map;
var service;
var infoWindow;

var customIcon = {


}

function renderMap(latlng){
  var currentLocation = latlng
  var mapOptions = {
    center: currentLocation,
    zoom: 10
  };

  map = new google.maps.Map(document.getElementById("map-canvas"),
    mapOptions);


  var marker = new google.maps.Marker({
    position: currentLocation,
    map: map,
    animation: google.maps.Animation.DROP,
  });

  return map
};

function initialize() {
  var address = $("#trips_show").data('address');
  var geocoder = new google.maps.Geocoder();

  geocoder.geocode({'address': address}, function(result, status){
    if (status == google.maps.GeocoderStatus.OK){
      var location = result[0].geometry.location;
      var latlng = new google.maps.LatLng(location.k, location.D)
      map = renderMap(latlng);
      map.setCenter(result[0].geometry.location)
      var marker = new google.maps.Marker({
        position: result[0].geometry.location,
        map: map,
        animation: google.maps.Animation.DROP
      });

      infoWindow = new google.maps.InfoWindow();
      service = new google.maps.places.PlacesService(map);
      google.maps.event.addListenerOnce(map, 'bounds_changed', performSearch);
    } else {
      console.log($("#trips_show").data('address'))

    }
  });
};


function performSearch() {
  var request = {
    bounds: map.getBounds(),
    keyword: 'hotel'
  };
  service.radarSearch(request, callback);
}

function callback(results, status) {
  if (status != google.maps.places.PlacesServiceStatus.OK) {
    alert(status);
    return;
  }
  for (var i = 0; i < results.length; i++) {
    var result = results[i];
    var marker = new google.maps.Marker({
      map: map,
      position: result.geometry.location,

    });
  }
}

google.maps.event.addDomListener(window, 'load', initialize);


$(document).ready(function(){
  if ($("#trips_show").length){
  }
});


