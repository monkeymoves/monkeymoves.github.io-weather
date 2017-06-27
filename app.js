function weather() {
    
    var location = document.getElementById("location");
    var apiKey = '5ad405dbaeaf4aef286618e4a5558716';
    var url = 'https://api.forecast.io/forecast/';
    
    navigator.geolocation.getCurrentPosition(sucess, error); 
    
    function sucess(position){
        latitude = position.coords.latitude.toFixed(2);
        longitude = position.coords.longitude.toFixed(2); 
        
        location.innerHTML = 'Latitude ' + latitude + '° <br> Longitude ' + longitude + '° </br>';
        
        

        
        
        $.getJSON(url + apiKey + '/' + latitude + "," + longitude + '?units=si'+ "&callback=?", function(data){
          $('#temp').html(data.currently.temperature + '°C');
          $('#minutely').html(data.minutely.summary);
        });
        

    }
    
    function error(){
        location.innerHTML = "Sorry unable to find your location";
    }
    
    location.innerHTML = 'Locating...';

}

weather();