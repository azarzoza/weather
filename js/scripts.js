



// Get my City Choices
 $(document).ready(function() {
  $.simpleWeather({
    zipcode: '99504',
    woeid: '2354490', //anchorage  forecast[X].date
    location: '',
    unit: 'f',
    code: '',


    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';

      html = '<h2>'+weather.temp+'&deg;'+weather.units.temp+'</h2>';

      html += '<h3>'+weather.city+', '+weather.region+'</h3>';
      html += '<h3 class="date">'+weather.forecast[0].date+'</h3>';
      html += '<ul><li class="currently">'+weather.currently+'</li>';
      html += '<li class="sunrise">'+weather.sunrise+'</li>';
      html += '<li class="sunset">'+weather.sunset+'</li>';

     for(var i=0;i<weather.forecast.length;i++) {
        html += '<p>'+weather.forecast[i].day+': '+weather.forecast[i].high+'</p>';
      }
    

    
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });

   $.simpleWeather({
    zipcode: '',
    woeid: '2378872', 
    location: '',
    unit: 'f',
    success: function(weather) {
      html = '<h2>'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
       html += '<h3>'+weather.city+', '+weather.region+'</h3>';
      html += '<h3 class="date">'+weather.forecast[0].date+'</h3>';
      html += '<li class="currently">'+weather.currently+'</li>';
      html += '<li class="sunrise">'+weather.sunrise+'</li>';
      html += '<li class="sunset">'+weather.sunset+'</li>';
  
      $("#weather2").html(html);
    },
    error: function(error) {
      $("#weather2").html('<p>'+error+'</p>');
    }
  });
  
});


$.simpleWeather({
    zipcode: '',
    woeid: '727232', //amsterdam
    location: '',
    unit: 'f',
    sunrise: '',
    code: '',
    success: function(weather) {
      html = '<h2>'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
       html += '<h3>'+weather.city+', '+weather.region+'</h3>';
      html += '<h3 class="date">'+weather.forecast[0].date+'</h3>';
      html += '<li class="currently">'+weather.currently+'</li>';
      html += '<li class="sunrise">'+weather.sunrise+'</li>';
      html += '<li class="sunset">'+weather.sunset+'</li>';
   


      $("#weather3").html(html);
    },
    error: function(error) {
      $("#weather3").html('<p>'+error+'</p>');
    }
  });
  
  $.simpleWeather({
    zipcode: '',
    woeid: '2378872', 
    location: '',
    unit: 'f',
    success: function(weather) {
      html = '<h2>'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
       html += '<h3>'+weather.city+', '+weather.region+'</h3>';
      html += '<h3 class="date">'+weather.forecast[0].date+'</h3>';
      html += '<li class="currently">'+weather.currently+'</li>';
      html += '<li class="sunrise">'+weather.sunrise+'</li>';
      html += '<li class="sunset">'+weather.sunset+'</li>';
  
      $("#weather3").html(html);
    },
    error: function(error) {
      $("#weather3").html('<p>'+error+'</p>');
    }
  });
// End of my cities with simpleWeather



// Enter Zip get weather Button 
// On click button, get zip, then run Simple Weather
$('button').on('click', function() {
  
  // 1. Get & store entered zipcode
  var zipcode = $('#getWeather').val();
  
  // 2. Pass weather into _simpleWeather()_ object
  $.simpleWeather({
    
    location: zipcode,
  
    success: function(weather) {
      
      // Get & store temperature
      var temp = weather.temp;
      // Get & store city
      var city = weather.city;

// Get and store current conditions

      var currently = weather.currently;
      
var sunrise = weather.sunrise;
var sunset = weather.sunset;
var code = weather.code;


      // Output to hooks in HTML
      $('.temp').text(temp).append('&deg;F');
      $('.city').text(city);
      $('.currently').text(currently);
      $('.sunrise').text(sunrise).prepend('Sunrise ');
      $('.sunset').text(sunset).prepend('Sunset ');
   
     
      // See console for all properties of object
      console.log(weather);
    },
  
    error: function(error) {
      $('body').html('<p>' + error + '</p>');
    }
  
  });
  
  // 3. Reset input value
  $('#getWeather').val('');
  
});




// Conditioning


 // 2. _simpleWeather()_ object
  $.simpleWeather({
    
    location: '99504', // change zip
    unit: 'f',
    
    // Get _weather_ object
    success: function(weather) {
     
      console.log(weather.code);
     if (weather.code >= 24 && weather.code <= 30) {
       $('body').addClass('cloudy');
     }
      
           if (weather.code >= 31 && weather.code <= 34) {
       $('body').addClass('fair');
     }

           if (weather.code >= 13 && weather.code <= 16) {
       $('body').addClass('flurry');
     }
      
      // See console for _weather_ object
      console.log(weather);
    },
  
    // if error
    error: function(error) {  
      $('body').html('<p>' + error + '</p>');
    }
  
  });

  