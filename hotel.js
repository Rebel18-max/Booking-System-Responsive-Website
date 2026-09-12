// document.querySelectorAll('.book-now').forEach(button => {
//     button.addEventListener('click', function() {
//         const hotelName = this.getAttribute('data-hotel');
//         document.getElementById('hotel-name').value = hotelName;
//         document.getElementById('booking-modal').style.display = "block";
//     });
// });

// document.querySelector('.close').addEventListener('click', function() {
//     document.getElementById('booking-modal').style.display = "none";
// });

// document.getElementById('booking-form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     alert('Booking confirmed for ' + document.getElementById('hotel-name').value + '!');
//     document.getElementById('booking-modal').style.display = "none";
// });

// document.getElementById('bookingForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form submission

//     // Get selected hotel and dates
//     const hotelSelect = document.getElementById('hotelSelect');
//     const checkInDate = new Date(document.getElementById('checkIn').value);
//     const checkOutDate = new Date(document.getElementById('checkOut').value);
    
//     // Calculate number of days
//     const timeDifference = checkOutDate - checkInDate;
//     const numberOfDays = timeDifference / (1000 * 3600 * 24);

//     // Validate dates
//     if (numberOfDays <= 0) {
//         document.getElementById('totalPrice').innerText = "Please select valid check-in and check-out dates.";
//         return;
//     }

//     // Get hotel price based on selection
//     let pricePerNight;
//     const dayOfWeek = checkInDate.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

//     switch (hotelSelect.value) {
//         case "1":
//             pricePerNight = (dayOfWeek >= 0 && dayOfWeek <= 3) ? 55 : 95; // Sun-Wed: $55, Thu-Sat: $95
//             break;
//         // Add cases for other hotels as needed
//         default:
//             pricePerNight = 0;
//     }

//     // Calculate total price
//     const totalPrice = pricePerNight * numberOfDays;
//     document.getElementById('totalPrice').innerText = `Total Price: $${totalPrice.toFixed(2)}`;
// });



// document.getElementById('search-btn').addEventListener('click', function() {
//     const city = document.getElementById('city').value;
//     displayHotels(city);
// });

// function displayHotels(city) {
//     const hotelList = document.getElementById('hotel-list');
//     hotelList.innerHTML = ''; // Clear previous results

//     // Sample data for hotels
//     const hotels = [
//         { name: "Hotel A", city: "Delhi", price: "₹3000", rating: 4.5 },
//         { name: "Hotel B", city: "Mumbai", price: "₹4500", rating: 4.0 },
//         { name: "Hotel C", city: "Bangalore", price: "₹3500", rating: 4.2 },
//         { name: "Hotel D", city: "Delhi", price: "₹4000", rating: 4.8 },
//         { name: "Hotel E", city: "Mumbai", price: "₹5000", rating: 4.6 },
//     ];

//     const filteredHotels = hotels.filter(hotel => hotel.city.toLowerCase() === city.toLowerCase());

//     if (filteredHotels.length > 0) {
//         filteredHotels.forEach(hotel => {
//             const hotelCard = document.createElement('div');
//             hotelCard.className = 'hotel-card col-md-4';
//             hotelCard.innerHTML = `
//                 <h5>${hotel.name}</h5>
//                 <p>City: ${hotel.city}</p>
//                 <p>Price: ${hotel.price}</p>
//                 <p>Rating: ${hotel.rating} ★</p>
//             `;
//             hotelList.appendChild(hotelCard);
//         });
//     } else {
//         hotelList.innerHTML = '<p>No hotels found in this city.</p>';
//     }
// }


// document.getElementById('search-btn').addEventListener('click', function() {
//     const city = document.getElementById('city').value;
//     displayHotels(city);
// });

// function displayHotels(city) {
//     const hotelList = document.getElementById('hotel-list');
//     hotelList.innerHTML = ''; // Clear previous results

//     // Sample data for hotels
//     const hotels = [
//         { name: "Hotel A", city: "Delhi", price: "₹3000", rating: 4.5 },
//         { name: "Hotel B", city: "Mumbai", price: "₹4500", rating: 4.0 },
//         { name: "Hotel C", city: "Bangalore", price: "₹3500", rating: 4.2 },
//         { name: "Hotel D", city: "Delhi", price: "₹4000", rating: 4.8 },
//         { name: "Hotel E", city: "Mumbai", price: "₹5000", rating: 4.6 },
//     ];

//     const filteredHotels = hotels.filter(hotel => hotel.city.toLowerCase() === city.toLowerCase());

//     if (filteredHotels.length > 0) {
//         filteredHotels.forEach(hotel => {
//             const hotelCard = document.createElement('div');
//             hotelCard.className = 'hotel-card col-md-4';
//             hotelCard.innerHTML = `
//                 <h5>${hotel.name}</h5>
//                 <p>City: ${hotel.city}</p>
//                 <p>Price: ${hotel.price}</p>
//                 <p>Rating: ${hotel.rating} ★</p>
//                 <button class="btn btn-success book-now-btn" onclick="bookNow('${hotel.name}')">Book Now</button>
//             `;
//             hotelList.appendChild(hotelCard);
//         });
//     } else {
//         hotelList.innerHTML = '<p>No hotels found in this city.</p>';
//     }
// }

// function bookNow(hotelName) {
//     // Here you can redirect to a booking page or show a confirmation alert
//     alert(`Booking for ${hotelName} is in progress!`);
//     // Alternatively, you could redirect to a booking form:
//     // window.location.href = `booking-form.html?hotel=${hotelName}`;
// }


document.getElementById('search-btn').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    displayHotels(city);
});

function displayHotels(city) {
    const hotelList = document.getElementById('hotel-list');
    hotelList.innerHTML = ''; // Clear previous results

    // Sample data for hotels
    const hotels = [
        { name: "Hyatt Regency Delhi", city: "Delhi", price: "₹30,000", rating: 4.5 },
        { name: "Hotel Sai Leela", city: "Mumbai", price: "₹1,400", rating: 4.0 },
        { name: "Hotel Hilltop Courtyard", city: "Bangalore", price: "₹2,600", rating: 4.2 },
        { name: "The Holiday Inn", city: "Delhi", price: "₹25,000", rating: 4.8 },
        { name: "Trident Hotel", city: "Mumbai", price: "₹42,000", rating: 4.6 },
        { name: "Hotel Le ROI", city: "Delhi", price: "₹2,700", rating: 3.9 },
    ];

    const filteredHotels = hotels.filter(hotel => hotel.city.toLowerCase() === city.toLowerCase());

    if (filteredHotels.length > 0) {
        filteredHotels.forEach(hotel => {
            const hotelCard = document.createElement('div');
            hotelCard.className = 'hotel-card col-md-4';
            hotelCard.innerHTML = `
                <h5>${hotel.name}</h5>
                <p>City: ${hotel.city}</p>
                <p>Price: ${hotel.price}</p>
                <p>Rating: ${hotel.rating} ★</p>
                <button class="btn btn-success book-now-btn" onclick="bookNow('${hotel.name}')">Book Now</button>
            `;
            hotelList.appendChild(hotelCard);
        });
    } else {
        hotelList.innerHTML = '<p>No hotels found in this city.</p>';
    }
}

function bookNow(hotelName) {
    // Show the modal and set the hotel name
    document.getElementById('hotelName').value = hotelName;
    $('#bookingModal').modal('show');
}

// Handle form submission
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const rooms = document.getElementById('rooms').value;
    const hotelName = document.getElementById('hotelName').value;

    // Here you can handle the booking logic, such as sending the data to a server
    alert(`Booking confirmed for ${name} at ${hotelName}.\nEmail: ${email}\nCheck-in: ${checkin}\nCheck-out: ${checkout}\nRooms: ${rooms}`);

    // Close the modal after booking
    $('#bookingModal').modal('hide');

    // Optionally, reset the form
    document.getElementById('bookingForm').reset();
});