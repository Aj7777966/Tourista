// Sample tour data (in a real app, this would come from an API or state management)
const tourData = [
    { 
        cityname:"Ahmedabad",
        tours:[
            {
                
                id:"1",
            title: "Ahmedabad City Heritage Tour",
            price: "₹4,999 per person",
        rating: "4.7",
        reviews: "120",
        category: "Cultural",
        image: "https://www.gujarattourism.com/images/heritage.jpg",
        agencyDetails: {
            name: "Heritage Explorers",
            location: "Navrangpura, Ahmedabad",
            amenities: [
                "AC transport",
                "Breakfast included",
                "Guided tour",
                "Entry tickets"
            ],
            pickupLocation: "Law Garden, Ahmedabad",
            placesToVisit: [
                "Sabarmati Ashram",
                "Sidi Saiyyed Mosque",
                "Jhulta Minar",
                "Kankaria Lake",
                "Adalaj Stepwell"
            ],
            hotel: "N/A (Day Tour)",
            finalFare: "No hidden charges",
            paymentDetails: "Payment via UPI or cash",
            contact: {
                phone: "+91-98765 43210",
                email: "heritageexplorers@gmail.com"
            }
        }
    },
    {
        id:"2",
        title: "Rann of Kutch Budget Trip",
        price: "₹6,999 per person",
        rating: "4.6",
        reviews: "140",
        category: "Adventure",
        image: "https://www.rannutsav.com/images/rann.jpg",
        agencyDetails: {
            name: "Kutch Wanderers",
            location: "Paldi, Ahmedabad",
            amenities: [
                "Non-AC bus transport",
                "Homestay accommodation",
                "Local food",
                "Cultural night"
            ],
            pickupLocation: "Ahmedabad Railway Station",
            placesToVisit: [
                "White Desert",
                "Bhuj",
                "Handicraft Villages",
                "Mandvi Beach",
                "Kalo Dungar"
            ],
            hotel: "Traditional Kutchi Homestay",
            finalFare: "Includes all meals",
            paymentDetails: "UPI or cash on arrival",
            contact: {
                phone: "+91-94262 55522",
                email: "kutchwanderers@gmail.com"
            }
        }
    },
    {
        id:"3",
        title: "Spiritual Dwarka-Somnath Tour",
        price: "₹5,499 per person",
        rating: "4.8",
        reviews: "160",
        category: "Spiritual",
        image: "https://www.gujarattourism.com/images/dwarka.jpg",
        agencyDetails: {
            name: "Shree Yatra Travels",
            location: "Maninagar, Ahmedabad",
            amenities: [
                "AC bus transport",
                "Temple darshan priority",
                "Simple vegetarian meals",
                "Guide support"
            ],
            pickupLocation: "Gita Mandir Bus Station, Ahmedabad",
            placesToVisit: [
                "Dwarkadhish Temple",
                "Somnath Temple",
                "Nageshwar Jyotirlinga",
                "Triveni Sangam",
                "Porbandar"
            ],
            hotel: "Budget Dharamshala Stay",
            finalFare: "Inclusive of meals & stay",
            paymentDetails: "Online payment or cash",
            contact: {
                phone: "+91-95101 10029",
                email: "shreeyatratravels@gmail.com"
            }
        }
    },
    {
        id:"4",
        title: "Gir National Park Safari",
        price: "₹7,999 per person",
        rating: "4.5",
        reviews: "110",
        category: "Wildlife",
        image: "https://www.girnationalpark.in/images/safari.jpg",
        agencyDetails: {
            name: "Gir Adventure Tours",
            location: "Satellite, Ahmedabad",
            amenities: [
                "Jeep safari",
                "Forest entry permits",
                "AC travel",
                "Basic meals"
            ],
            pickupLocation: "Ahmedabad Railway Station",
            placesToVisit: [
                "Gir National Park",
                "Devalia Safari Park",
                "Junagadh",
                "Somnath Temple",
                "Diu Beach"
            ],
            hotel: "Budget Jungle Stay",
            finalFare: "All-inclusive safari package",
            paymentDetails: "Bank transfer / UPI / cash",
            contact: {
                phone: "+91-98250 50001",
                email: "giradventure@gmail.com"
            }
        }
    },
    {
        id:"5",
        title: "Saputara Hill Station Tour",
        price: "₹5,999 per person",
        rating: "4.6",
        reviews: "125",
        category: "Leisure",
        image: "https://www.gujarattourism.com/images/saputara.jpg",
        agencyDetails: {
            name: "Nature Trails Gujarat",
            location: "Ashram Road, Ahmedabad",
            amenities: [
                "Non-AC transport",
                "Boating included",
                "Hill view resort",
                "Sightseeing"
            ],
            pickupLocation: "Ahmedabad Central Bus Station",
            placesToVisit: [
                "Saputara Lake",
                "Sunset Point",
                "Gira Waterfalls",
                "Artist Village",
                "Waghai Botanical Garden"
            ],
            hotel: "2-star Hill Resort",
            finalFare: "No extra charges",
            paymentDetails: "UPI / cash on arrival",
            contact: {
                phone: "+91-98765 43211",
                email: "naturetrailsguj@gmail.com"
            }
        }
    }
]
}
];
export default tourData;