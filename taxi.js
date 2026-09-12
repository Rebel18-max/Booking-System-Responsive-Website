document.getElementById('taxiPickupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Display a simple confirmation message
    const confirmationMessage = `
        <h5>Confirmation Done!</h5>
        <p>We'll be there :)</p>
    `;

    // Show confirmation message in the designated div
    const confirmationDiv = document.getElementById('confirmationMessage');
    confirmationDiv.innerHTML = confirmationMessage;
    confirmationDiv.style.display = 'block'; // Make the confirmation message visible

    // Clear the form fields
    document.getElementById('taxiPickupForm').reset();
});