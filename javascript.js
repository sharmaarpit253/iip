 document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Simple validation
        if (name && email && password) {
            alert(`Thank you for registering, ${name}!`);
            // Here you can add code to send the data to a server or process it further
        } else {
            alert('Please fill in all fields.');
        }
    });