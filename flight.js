// Locations and flight data (mock data)
const flightData = {
    Delhi: {
        Mumbai: [
            { airline: 'Air India', flightNumber: 'AI202', price: 8000, departure: '10:00 AM', arrival: '12:30 PM', duration: '2h 30m' },
            { airline: 'IndiGo', flightNumber: '6E134', price: 6000, departure: '2:00 PM', arrival: '4:30 PM', duration: '2h 30m' }
        ],
        Bangalore: [
            { airline: 'SpiceJet', flightNumber: 'SG319', price: 7000, departure: '8:00 AM', arrival: '10:30 AM', duration: '2h 30m' }
        ],
        Goa: [
            { airline: 'Vistara', flightNumber: 'UK125', price: 8500, departure: '9:00 AM', arrival: '11:30 AM', duration: '2h 30m' }
        ]
    },
    Mumbai: {
        Delhi: [
            { airline: 'GoAir', flightNumber: 'G8240', price: 7500, departure: '7:00 AM', arrival: '9:30 AM', duration: '2h 30m' },
            { airline: 'Jet Airways', flightNumber: '9W323', price: 9000, departure: '3:00 PM', arrival: '5:30 PM', duration: '2h 30m' }
        ]
    },
    Bangalore: {
        Chennai: [
            { airline: 'Air India', flightNumber: 'AI209', price: 8500, departure: '11:00 AM', arrival: '12:30 PM', duration: '1h 30m' }
        ]
    }
};

// Handle departure location change to update available destination locations
document.getElementById('departure-location').addEventListener('change', function() {
    const departureCity = this.value;
    const destinationSelect = document.getElementById('destination-location');
    destinationSelect.innerHTML = '<option value="">Select Destination City</option>';

    if (departureCity && flightData[departureCity]) {
        const destinations = Object.keys(flightData[departureCity]);
        destinations.forEach(function(destination) {
            const option = document.createElement('option');
            option.value = destination;
            option.textContent = destination;
            destinationSelect.appendChild(option);
        });
    }
});

// Handle flight search form submission
document.getElementById('flight-search-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const departure = document.getElementById('departure-location').value;
    const destination = document.getElementById('destination-location').value;
    const passengers = document.getElementById('passengers').value;

    const flightList = document.getElementById('flight-list');
    flightList.innerHTML = '';  // Clear previous results

    if (departure && destination && flightData[departure] && flightData[departure][destination]) {
        const flights = flightData[departure][destination];
        flights.forEach(flight => {
            const flightItem = document.createElement('div');
            flightItem.classList.add('flight-item');
            flightItem.innerHTML = `
                <h3>${flight.airline} (${flight.flightNumber})</h3>
                <p>Departure: ${flight.departure} | Arrival: ${flight.arrival}</p>
                <p>Duration: ${flight.duration}</p>
                <p>Price: ₹${flight.price * passengers}</p>
                <button onclick="selectFlight(${flight.price * passengers}, '${flight.airline}', '${flight.flightNumber}', '${flight.departure}', '${flight.arrival}')">Select Flight</button>
            `;
            flightList.appendChild(flightItem);
        });
    } else {
        flightList.innerHTML = '<p>No flights available for the selected route.</p>';
    }
});

// Show payment section when a flight is selected
function selectFlight(totalPrice, airline, flightNumber, departure, arrival) {
    document.getElementById('flight-summary').innerHTML = `
        <h3>${airline} (${flightNumber})</h3>
        <p>Departure: ${departure} | Arrival: ${arrival}</p>
        <p>Price: ₹${totalPrice}</p>
    `;
    document.getElementById('total-price').innerText = totalPrice;
    document.getElementById('payment-section').style.display = 'block';
}

// Handle payment form submission
document.getElementById('payment-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const cardName = document.getElementById('card-name').value;
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;

    if (cardName && cardNumber && expiryDate && cvv) {
        alert('Payment successful! Your flight is booked.');
        document.getElementById('payment-section').style.display = 'none';
    } else {
        alert('Please fill in all payment details.');
    }
});