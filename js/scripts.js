var cheney = '99004';
var spokane = '99220';
var anchorage = '99504';

 $(document).ready(function() {
  $.simpleWeather({
    zipcode: '99504',
    woeid: '2354490', //anchorage
    location: '',
    unit: 'f',
    success: function(weather) {
      html = '<h2>'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
      html += '<li class="sunrise">'+weather.sunrise+'</li>';
  
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
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
      html += '<li class="sunrise">'+weather.sunrise+'</li>';
  
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
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
      html += '<li class="sunrise">'+weather.sunrise+'</li>';
  
      $("#weather3").html(html);
    },
    error: function(error) {
      $("#weather3").html('<p>'+error+'</p>');
    }
  });
  
});


