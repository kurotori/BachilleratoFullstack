const formulario = document.getElementById('formulario')


formulario.addEventListener('submit', 
    function(evento) {
        evento.preventDefault(); // Prevenir el método de envío por descarte
        
        // Get form data
        const datosFormulario = new FormData(this);
        
        // Send data to PHP script
        fetch('destino.php', {
            method: 'POST',
            body: datosFormulario
        })
        .then(respuesta => {
            if ( ! respuesta.ok) {
                throw new Error('Ha ocurrido un error de comunicación con el servidor');
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