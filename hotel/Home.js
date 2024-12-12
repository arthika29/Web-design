
// Function to open the navbar when side menu button is clicked
function openNavbar() {
    document.getElementById("sideNavigationBar").style.width = "50%";
}

// Function to close the navbar
function closeNavbar() {
    document.getElementById("sideNavigationBar").style.width = "0%";
}

// Register button functionality to show the form
document.getElementById('registerButton').addEventListener('click', function() {
    window.location.href = 'register.html'; // Redirect to the registration page
});

// Registration form submit functionality
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent actual form submission to the server

    // Show confirmation message
    alert('Thank you for registering!');

    // Optionally, you can redirect the user after form submission
    window.location.href = 'thankyou.html'; // Redirect to another page (e.g., thank you page)
});

// If you need to handle any other JS code or specific functionality for elements
// such as closing modals, submitting forms, or other interactions, include them here.



