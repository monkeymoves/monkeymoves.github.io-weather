function weather2(unit, a, b) {
//    alert(unit);
    tempunit = unit;
    displayunits = a;
    displaywind = b;
    weather(unit);
};

var tempunit = '?units=si';
var displayunits = '';
var displaywind ='';

function weather() {
    
    var location = document.getElementById("location");
    var apiKey = '5ad405dbaeaf4aef286618e4a5558716';
    var url = 'https://api.forecast.io/forecast/';
   
    
   if (tempunit == '?units=si'){
       tempunit = '?units=si';
       displayunits = 'C';
       displaywind = 'MPH';
   } else {
       tempunit = tempunit;
       displayunits = 'F';
       displaywind = 'KPH';
   }
        
//    if(document.getElementById('t1').checked) {
//        displaywind = 'MPH';
//        
//    } else displaywind ='KPH';
//     
//    
//    
//    
//    if(document.getElementById('t1').checked) {
//        tempunit = '?units=si';
//        displayunits = 'C';
//    } else tempunit ='?units=us';
    
    navigator.geolocation.getCurrentPosition(sucess, error); 
    
    function sucess(position){
        latitude = position.coords.latitude.toFixed(2);
        longitude = position.coords.longitude.toFixed(2); 
        
        location.innerHTML = 'Latitude ' + latitude + '° <br> Longitude ' + longitude + '° </br>';
        
        

        $.getJSON(url + apiKey + '/' + latitude + "," + longitude + tempunit + "&callback=?", function (data) {
            $('#temp').html(data.currently.temperature + displayunits);
            $('#minutely').html(data.minutely.summary);
            $('#windspeed').html(data.currently.windSpeed + displaywind);
            $('#weathericon').html(data.currently.icon);
            var skycons = new Skycons({
                "color": "white"
            });
            // you can add a canvas by it's ID...
            skycons.add("icon1", data.currently.icon);
            skycons.play();
                
      switch (displayunits) {
          case 'F':
              var temps = [70, 50, 32]
              break
          case 'C':
              temps = [20, 10, 0]
              break
      }

    // Array of backgroudn images.
    var imgs = ['url("landscape1.jpg")', 'url("landscape2.jpg")', 'url("landscape2.jpg")', 'url("landscape2.jpg")']
    var temp = data.currently.temperature;
    // Select custom backgroudn image according to temperature range.
    if (temp >= temps[0]) {
      $('body').css('background-image', imgs[0])
    } else if (temp < temps[0] && temp >= temps[1]) {
      $('body').css('background-image', imgs[1])
    } else if (temp < temps[1] && temp >= temps[2]) {
      $('body').css('background-image', imgs[2])
    } else if (temp < temps[2]) {
      $('body').css('background-image', imgs[3])
    } 

        });

    }
 
    
    function error(){
        location.innerHTML = "Sorry unable to find your location - on mobile, turn on GPS";
    }
    
    location.innerHTML = 'Locating...';

}

weather();
       
