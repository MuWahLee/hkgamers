
Template.footer.helpers({

	  year: function() {
	  	return ( new Date().getFullYear() );
  	},
  
  	cruiseShip: function(){

  		var ship = {
  			make: "QE2",
  			passengers: [
  				{
  					first_name: "bob",
  					last_name: "smith" 
  				},

  				{
  					first_name: "joe",
  					last_name: "jones" 
  				},

  				{
  					first_name: "john",
  					last_name: "smith" 
  				},

  				{
  					first_name: "claire",
  					last_name: "thompson" 
  				},

  				{
  					first_name: "dawn",
  					last_name: "french" 
  				},

  				{
  					first_name: "clarice",
  					last_name: "sterling" 
  				},

  				{
  					first_name: "simon",
  					last_name: "balls" 
  				},

  				{
  					first_name: "ted",
  					last_name: "pagonis" 
  				}  	 				

  			]
  	  };

  		return (ship);
  	}

  
});

// key: value,
// key: value,
// key: value

// var sum = 2 + 2;

// new Date().getFullYear();

var passengers = 
[
	{
		first_name: "bob",
		last_name: "smith",
		age: 2
	},

	{
		first_name: "joe",
		last_name: "jones",
		age: 23
	},

	{
		first_name: "tom",
		last_name: "smith",
		age: 23
	},

	{
		first_name: "emily",
		last_name: "hanks",
		age: 12
	},

	{
		first_name: "kelsey",
		last_name: "hanks",
		age: 4
	}
]

var anotherArray = 
[
	"one",
	"two",
	"three",
	"four",
	"five"
]

var numbersArray = [1, 2, 3, 4, 5];

// 1. You have an online store and when a user submits an order the order is wrapped up into an object. 
// Create an object called orderSubmission that has the customer's first name, last name, and email.
// ex. orderSubmission.customer.firstName

// The object should also contain all of the items ordered. Each item should have a quantity, price (of one item), and sku.
// ex. orderSubmission.items[3].sku

// The object also needs to contain the total price.
// ex. orderSubmission.totalPrice

// Tally up the number of items ordered.

var orderSubmission = {
  
  customer: {
    first_name: "bob",
    last_name:  "smith",
    email:      "bobsmith@example.com" 
  },
  
  items: [
    {
      description:  "ipad",
      quantity:     1,
      unitPrice:    200,
      sku:          "1234pad" 
    },

    {
      description:  "iphone",
      quantity:     2,
      unitPrice:    500,
      sku:          "5678phn"  
    },

    {
      description:   "macbook air",
      quantity:      1,
      unitPrice:     20000,
      sku:           "9012mac"  
    },

    {
      description:  "widgets",
      quantity:     40,
      unitPrice:    5,
      sku:          "3456wid"  
    }   
  ],

  totalPrice:  21400

}

var calculateTotalItems = function(orders){

  var sum = 0;
  var i = 0;

  while(i < orders.items.length){
    sum = sum + orders.items[i].quantity;
    i++;
  };

  return sum;
}

var calculateTotalPrice = function(orders){

  var sum = 0;
  var i = 0;

  while(i < orders.items.length){
    sum = sum + ( orders.items[i].quantity * orders.items[i].unitPrice ) ;
    i++;
  };

  return "$" + sum;
}


// 2. You have an auction site and you want to create an object for each item.
// Create an object called item that has the item's name, sku, description, and the people that have bid on it. 
// The people that have bid on it need to have a username, time bid, amount bid. 
// There are 5 bidders.

var item = {
  name:         "bicycle",
  sku:          "123bik",
  description:  "tricycle",
  
  bidders:      [
    {
      userName:   "john smith",
      timeBid:    "Wed Aug 20 2014 23:56:16 GMT+0800 (HKT)",
      amountBid:  100
    },

    {
      userName:   "joe jones",
      timeBid:    "Tue Aug 19 2014 23:56:16 GMT+0800 (HKT)",
      amountBid:  101
    },

    {
      userName:   "carrie lam",
      timeBid:    "Wed Aug 20 2014 13:56:16 GMT+0800 (HKT)",
      amountBid:  122
    },

    {
      userName:   "megan mooks",
      timeBid:    "Mon Aug 18 2014 02:56:16 GMT+0800 (HKT)",
      amountBid:  55
    },

    {
      userName:   "james bond",
      timeBid:    "Wed Aug 20 2014 23:00:16 GMT+0800 (HKT)",
      amountBid:   300
    }        
  ], 

}


// 3. You have a Tinder-like app. There are four users. Create the user objects and which have matched with whom. 

var tinder = {
  user: [
    {
      name:     "john smith",
      gender:   "male",
      age:      "23",
      matchedWith: [
        {
          name:     "carrie lam",
          gender:   "female",
          age:      "25"
        },
        
        {
          name:     "claire cook",
          gender:   "female",
          age:      "27"
        } 

      ],
    },

    {
      name:     "tony jones",
      gender:   "male",
      age:      "30",
      matchedWith: [
        {
          name:     "carrie lam",
          gender:   "female",
          age:      "25"
        }  
      ],
    },

    {
      name:     "claire cook",
      gender:   "female",
      age:      "27",
      matchedWith: [
        {
          name:     "carrie lam",
          gender:   "female",
          age:      "25"
        }  
      ],
    },

    {
      name:     "carrie lam",
      gender:   "female",
      age:      "25",
      matchedWith: [
        {
          name:     "claire cook",
          gender:   "female",
          age:      "27"
        },

        {
          name:     "john smith",
          gender:   "male",
          age:      "23"
        } 
      ],
    }

  ]

}

var tinder = {
  users: [
    {
      name:   "john smith",
      gender: "male",
      age:    "23",
      matchedWith: ["carrie lam", "claire cook"]
    },

    {
      name:   "tony jones",
      gender: "male",
      age:    "30",
      matchedWith: []
    },

    {
      name:   "carrie lam",
      gender: "female",
      age:    "25",
      matchedWith: ["john smith", "claire cook"]
    },

    {
      name:   "claire cook",
      gender: "female",
      age:    "27",
      matchedWith: ["carrie lam", "john smith"]
    }        

  ]

}



Tinder site

Users Collection:

{
   _id: "123",
  name:   "john smith",
  gender: "male",
  age:    "23",
  matchedWith: ["456", "789"]
}

{
   _id: "456",
  name:   "jane smith",
  gender: "female",
  age:    "18",
  matchedWith: ["111"]
}

{
   _id: "789",
  name:   "ada stevens",
  gender: "female",
  age:    "32",
  matchedWith: ["456", "123"]
}

{
   _id: "111",
  name:   "jim bean",
  gender: "male",
  age:    "55",
  matchedWith: ["456", "789"]
}











