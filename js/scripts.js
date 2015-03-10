$(document).ready(function() {
    $('#fullpage').fullpage();
});


var cheney = '99004';
var spokane = '99220';
var anchorage = '99504';

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

