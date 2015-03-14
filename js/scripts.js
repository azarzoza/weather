
// Get my City Choices
 $(document).ready(function() {
  $.simpleWeather({
    zipcode: '99504',
    woeid: '2354490', //anchorage  forecast[X].date
    location: '',
    unit: 'f',
    success: function(weather) {
      html = '<h2>'+weather.temp+'&deg;'+weather.units.temp+'</h2>';

      html += '<h3>'+weather.city+', '+weather.region+'</h3>';
      html += '<h3 class="date">'+weather.forecast[0].date+'</h3>';
      html += '<ul><li class="currently">'+weather.currently+'</li>';
      html += '<li class="sunrise">'+weather.sunrise+'</li>';
      html += '<li class="sunset">'+weather.sunset+'</li>';

      
      
  
  if(weather.temp > 75) {
        $('body').animate({backgroundColor: '#F7AC57'}, 1500);
      } else {
        $('body').animate({backgroundColor: '#0091c2'}, 1500);
      }

      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
  
  $.simpleWeather({
    zipcode: '',
    woeid: '727232', //amsterdam
    location: '',
    unit: 'f',
    sunrise: '',
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
  
});
// End of my cities with simpleWeather



// Enter Zip get weather Button 
// REF: http://foundation.zurb.com/docs/
// REF: http://simpleweatherjs.com/

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

      var currently = weather.currently;
      
      // Output to hooks in HTML
      $('.temp').text(temp);
      $('.city').text(city);
      $('.currently').text(currently);

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
      
      // See console for _weather_ object
      console.log(weather);
    },
  
    // if error
    error: function(error) {  
      $('body').html('<p>' + error + '</p>');
    }
  
  });




