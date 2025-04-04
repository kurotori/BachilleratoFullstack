const formulario = document.getElementById('formulario')


formulario.addEventListener('submit', 
    function(e) {
        e.preventDefault(); // Prevenir el método de envío por descarte
        
        // Get form data
        const formData = new FormData(this);
        
        // Send data to PHP script
        fetch('destino.php', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            // Display the response from PHP
            document.getElementById('respuesta').innerHTML = data;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            document.getElementById('response').innerHTML = 'Error: ' + error.message;
        });
    }
);