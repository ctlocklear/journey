



function renderMap(location){

  var currentLocation = new google.maps.LatLng(location.coords.latitude, location.coords.longitude)

  var mapOptions = {
    center: currentLocation,
    zoom: 10
  };

  var map = new google.maps.Map(document.getElementById("map-canvas"),
    mapOptions);

  var marker = new google.maps.Marker({
    position: currentLocation,
    map: map,
    animation: google.maps.Animation.DROP
  });

  return map

};

function initialize(location)
{
	console.log(location);

  var map = renderMap(location);
  var address = $("#trips_show").data('address');
  var geocoder = new google.maps.Geocoder();
  

  geocoder.geocode({'address': address}, function(result, status){
    if (status == google.maps.GeocoderStatus.OK){
      map.setCenter(result[0].geometry.location)
      var marker = new google.maps.Marker({
        position: result[0].geometry.location,
        map: map,
        animation: google.maps.Animation.DROP
      });
    } else {
      console.log($("#trips_show").data('address'))
    }
  });

  service = new google.maps.places.PlacesService(map);

 //google.maps.event.addListenerOnce(map, 'bounds_changed', performSearch);
};

$(document).ready(function(){
  if ($("#trips_show").length){
    navigator.geolocation.getCurrentPosition(initialize);

  }
});