function weather() {
    
    var location = document.getElementById("location");
    var apiKey = '5ad405dbaeaf4aef286618e4a5558716';
    var url = 'https://api.forecast.io/forecast/';
    var tempunit = '';
    var displayunits = 'F';
    var displaywind ='';
    
   
    if(document.getElementById('t1').checked) {
        displaywind = 'MPH';
        
    } else displaywind ='KPH';
     
    
    
    
    if(document.getElementById('t1').checked) {
        tempunit = '?units=si';
        displayunits = 'C';
    } else tempunit ='?units=us';
    
    navigator.geolocation.getCurrentPosition(sucess, error); 
    
    function sucess(position){
        latitude = position.coords.latitude.toFixed(2);
        longitude = position.coords.longitude.toFixed(2); 
        
        location.innerHTML = 'Latitude ' + latitude + '° <br> Longitude ' + longitude + '° </br>';
        
        

        
        
        $.getJSON(url + apiKey + '/' + latitude + "," + longitude + tempunit + "&callback=?", function(data){
          $('#temp').html(data.currently.temperature + displayunits );
          $('#minutely').html(data.minutely.summary);
          $('#windspeed').html(data.currently.windSpeed + displaywind );

        });
        

    }
    
    function error(){
        location.innerHTML = "Sorry unable to find your location";
    }
    
    location.innerHTML = 'Locating...';

}

weather();
       
 