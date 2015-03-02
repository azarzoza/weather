
var cheney = '99004';
var spokane = '99220';

  $.simpleWeather({
    
    location: '99504', // change zip
    unit: 'f',
    
    // Get _weather_ object
    success: function(weather) {
      
      // Project !














      
      // See console for _weather_ object
      console.log(weather);
    },
  
    // if error
    error: function(error) {  
      $('body').html('<p>' + error + '</p>');
    }
  
  });


