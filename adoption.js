// adoption.js

// Get query parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const animalName = urlParams.get('name'); // Get the 'name' parameter

// If the animal name exists in the URL, set the value of the input field
if (animalName) {
    document.getElementById("animal").value = animalName;
}

// Initialize EmailJS
emailjs.init("4ZhCicBE2n4M6z5t9");

// Add event listener for form submission
document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form default behavior

    // Send the form data using EmailJS
    emailjs.sendForm("service_qs1hwhg", "template_jnmxl1m", this)
        .then(function (response) {
            alert("Message sent successfully!");
            document.getElementById("form").reset(); // Reset the form after successful submission
        }, function (error) {
            alert("Failed to send message: " + JSON.stringify(error));
        });
});


