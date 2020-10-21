var geocoder = require('geocoder');
 
// Geocoding
geocoder.geocode("Atlanta, GA", function ( err, data ) {
  // do something with data
});
 
// Reverse Geocoding
geocoder.reverseGeocode( 33.7489, -84.3789, function ( err, data ) {
  console.log(data)
});