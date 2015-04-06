var map;
var service;
var infoWindow;
var input;
var searchBox;




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
  })

var input =  document.getElementById('pac-input');
map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
 
  var searchBox = new google.maps.places.SearchBox(input);
 

  // Listen for the event fired when the user selects an item from the
  // pick list. Retrieve the matching places for that item.
  google.maps.event.addListener(searchBox, 'places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }
    for (var i = 0, marker; marker = markers[i]; i++) {
      marker.setMap(null);
    }

    // For each place, get the icon, place name, and location.
    markers = [];
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0, place; place = places[i]; i++) {
      var image = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      var marker = new google.maps.Marker({
        map: map,
        icon: image,
        title: place.name,
        position: place.geometry.location
      });

      markers.push(marker);

      bounds.extend(place.geometry.location);
    }

    map.fitBounds(bounds);
  });

  // Bias the SearchBox results towards places that are within the bounds of the
  // current map's viewport.
  google.maps.event.addListener(map, 'bounds_changed', function() {
    var bounds = map.getBounds();
    searchBox.setBounds(bounds);
  });
}



google.maps.event.addDomListener(window, 'load', initialize);


$(document).ready(function(){
  if ($("#trips_show").length){
  }
});
