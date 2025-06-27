
function sendMail() {

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    // Validación manual
    if (!nombre || !email || !mensaje) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    let parms = {
        name: document.getElementById("nombre").value,
        mail: document.getElementById("email").value,
        message: document.getElementById("mensaje").value,
    }

    emailjs.send("service_g6fwuc2", "template_rqljmfv", parms)
        .then(function(response) {
            // Mostrar el modal al enviar exitosamente
            const modal = document.getElementById('myModal');
            modal.style.display = 'flex';

            // Limpiar formulario si querés
            document.getElementById("nombre").value = '';
            document.getElementById("email").value = '';
            document.getElementById("mensaje").value = '';
        })
        .catch(function(error) {
            alert("Ocurrió un error al enviar el mensaje. Intenta nuevamente.");
            console.log("FAILED", error);
        });
}

// Cerrar el modal cuando se hace click en "Cerrar"
document.getElementById('closeModal').addEventListener('click', function () {
    document.getElementById('myModal').style.display = 'none';
});

// También cerrarlo si clickeás fuera del contenido
window.addEventListener('click', function(event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

