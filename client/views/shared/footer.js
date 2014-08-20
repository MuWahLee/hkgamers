
Template.footer.helpers({

	  year: function() {
	  	return ( new Date().getFullYear() );
  	},
  
  	car: function(){

  		var car = {
  			make: "honda",
  			passengers: {
  				first_name: ["bob", "joe"],
  				last_name: ["smith", "jones"]
  			}
  	  };

  		return (car.passengers.first_name[0] + " " + car.passengers.last_name[0]);
  	}
  
});

// key: value,
// key: value,
// key: value

// var sum = 2 + 2;

// new Date().getFullYear();