
//As mentioned I created a vacation rental object with the properties defined
//I preffered to choose the class syntax obviously to get that AWESOMESAUCE and also to learn more
class VacationRental {
    constructor(name, price, rating, location, rooms, availability, features) {
        this.name = name;
        this.price = price;
        this.rating = rating;
        this.location = location;
        this.rooms = rooms;
        this.availability = availability;
        this.features = features;
    }
}

//As told by you defining a method with/without prototype would work for class syntax I did with prototype for these 2 methods
//This method will tell a description about the place that you wanna stay during your vacation.
VacationRental.prototype.description = function() {
    console.log('Welcome to the beautiful ' + this.name + ' in ' + this.location + '. It has a rating of ' + this.rating + ' .It has ' + this.rooms + ' rooms and People like it because of its ' + this.features[0] + ' and ' + this.features[1]);
};

//This method will tell whether the place is available or not. As simple as that.
VacationRental.prototype.available = function() {
    console.log('The rental property ' + this.name + ' ' + 'is ' + this.availability);
};

//I created 2 instances of the rental properties with reference to the class VacationRental as defined above
let rental = new VacationRental('World famous Seashell House', 750, 4.5, 'Casa Caracol', 6, 'Not Available', ['Scenery', 'Shell-shape']);
let rental1 = new VacationRental('Underground Hygge', 350, 4.2, 'Orondo', 1, 'Available', ['View', 'Exoticness']);

//So the next part is to define another object with special Rate which is inheriting almost everything from VacationRental.
//I thought of giving the second vacation spot the reduced price and because of this offer it is sold out
//BECAUSE I want to be as descriptive as possible.
//This object is having an extra property(type) which is set to a special rate.
class SpecialRate extends VacationRental {
    constructor(name, price, rating, location, rooms, availability, features, type) {
        super(name, price, rating, location, rooms, availability, features);
        this.type = type;
    }
    //This is the method which is calculating the price after 20% discount and will show the new price
    //These two methods I am not declaring them as prototype because I want to TELL YOU that I tried everything literally.
    reducedRate() {
        alert(this.price = this.price * 0.8);
    }
}

//This is the instance of the class SpecialRate with all the properties.
let special = new SpecialRate('World famous Seashell House', 750, 4.5, 'Casa Caracol', 6, 'Available', ['Scenery', 'Shell-shape'], 'Special Rate');

//LAST but not the least the SUPERHOST class which is also having the same properties as above but this time the type property is set to Superhost.
//It is also inheriting from VacationRental
class SuperHost extends VacationRental {
    constructor(name, price, rating, location, rooms, availability, features, type) {
        super(name, price, rating, location, rooms, availability, features);
        this.type = type;
    }
    //This method will show the rating of the superhost so that everything I am creating in a nutshell.
    rating() {
        alert('The rating of the superhost is ' + this.rating);
    }
}

let superDuperHost = new SuperHost('Kristie', 100, 4.5, 'Washington', 6, 'Available', ['Sweet', 'Humble'], 'SuperHost');

//SO AS TOLD I WOULD TRY EVERYTHING I AM USING TWO METHODS TO PRINT THE METHODS
//1. USING alert box
//2. Creating a paragraph element and there displaying it
//I want to call the button element which is having an id #btn1
//This will show the description in an alert box.
let btn1 = document.getElementById('btn1');
btn1.addEventListener('click', function() {
    alert('Welcome to the beautiful ' + rental1.name + ' in ' + rental1.location + '. It has a rating of ' + rental1.rating + ' .It has ' + rental1.rooms + ' rooms and People like it because of its ' + rental1.features[0] + ' and ' + rental1.features[1]);
});

//This will show the availability of the rental property in an alert box.
let btn2 = document.getElementById('btn2');
btn2.addEventListener('click', function() {
    alert('The rental property ' + rental1.name + ' ' + 'is ' + rental1.availability);
});

//This will show the superhost rating in an alert box.
let btn3 = document.getElementById('btn3');
btn3.addEventListener('click', function() {
    alert('The rating of the superhost is ' + superDuperHost.rating);
});

let main = document.querySelector('main');


//This will show the description of the second rental property by creating a paragraph dynamically and there inserting the details.
//I also did a bit of styling in the text.
let btn4 = document.getElementById('btn4');
btn4.addEventListener('click', function() {
    let p = document.createElement('p');
    let text = ('Welcome to the beautiful ' + rental.name + ' in ' + rental.location + '. It has a rating of ' + rental.rating + ' .It has ' + rental.rooms + ' rooms and People like it because of its ' + rental.features[0] + ' and ' + rental.features[1]);
    p.textContent = text;
    main.appendChild(p);
    p.setAttribute('style', 'font-size:30px;font-weight:bold;font-style:italic;color:red;');
});

//This will show the availability in a paragraph as well
let btn5 = document.getElementById('btn5');
btn5.addEventListener('click', function() {
    let p = document.createElement('p');
    let text = ('The rental property ' + rental.name + ' ' + 'is ' + rental.availability);
    p.textContent = text;
    main.appendChild(p);
    p.setAttribute('style', 'font-size:30px;font-weight:bold;font-style:italic;color:red;');
});


//MOST IMPORTANTLY thinking logically, this property's price was reduced so thats why each room or whatever it offers is sold out and it is not available because as said I want to be as descriptive as I could be.
let btn6 = document.getElementById('btn6');
btn6.addEventListener('click', function() {
    let p = document.createElement('p');
    let text = (special.price = special.price * 0.8 + ". You are getting a 20% off the regular price YAYY!!");
    p.textContent = text;
    main.appendChild(p);
    p.setAttribute('style', 'font-size:30px;font-weight:bold;font-style:italic;color:red;');
});

//Lastly this will show the rating of the superhost in a paragraph below.
let btn7 = document.getElementById('btn7');
btn7.addEventListener('click', function() {
    let p = document.createElement('p');
    let text = ('The rating of the superhost is ' + superDuperHost.rating);
    p.textContent = text;
    main.appendChild(p);
    p.setAttribute('style', 'font-size:30px;font-weight:bold;font-style:italic;color:red;');
});


// JavaScript Document
function thirdPartyApi() {
    let seaShell = {
        lat: 21.2109126,
        lng: -86.7189751
    };

    let undergroundHygge = {
          lat: 47.6253856,
        lng: -120.2393811
    }

    let div = document.getElementById('mapDisplay');

    //create new map object
    let map = new google.maps.Map(div, {
        zoom: 14,
        center: seaShell,
        styles: [{
                "elementType": "geometry",
                "stylers": [{
                    "color": "#242f3e"
                }]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#746855"
                }]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#242f3e"
                }]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#d59563"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#d59563"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#263c3f"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#6b9a76"
                }]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#38414e"
                }]
            },
            {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#212a37"
                }]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9ca5b3"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#746855"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#1f2835"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#f3d19c"
                }]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#2f3948"
                }]
            },
            {
                "featureType": "transit.station",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#d59563"
                }]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#17263c"
                }]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#515c6d"
                }]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#17263c"
                }]
            }
        ]
    });

    //create new marker object
    let marker = new google.maps.Marker({
        position: seaShell,
        animation: google.maps.Animation.BOUNCE,
        map: map,
        label: {
            color: 'white',
            fontWeight: 'bold',
            text: 'SeaShell House',
        }
    });

     let marker2 = new google.maps.Marker({
        position: undergroundHygge,
        animation: google.maps.Animation.BOUNCE,
        map: map,
        label: {
            color: 'white',
            fontWeight: 'bold',
            text: 'underground Hygge',
        }
    });

}

let payBtn = document.getElementById('payment');
payBtn.addEventListener('click',requestPayment);

function requestPayment(){
    if(window.PaymentRequest){

        let supportedMethodsToPay =
    [
         {
            supportedMethods:['basic-card']
        } 
    ];

        let paymentDescription = {
            total: {
                label: 'Room Cost',
                amount: {
                    currency: 'CAD',
                    value: 150
                }
            }
        };

        let paymentRequest = new PaymentRequest(supportedMethodsToPay, paymentDescription);
        paymentRequest.show();

    }
    else{
        alert('Payment is not supported in your browser. Sowieee! :(');
    }
}   

//THATS THE END----
