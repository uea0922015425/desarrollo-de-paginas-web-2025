// Mostrar alerta al hacer clic en el botón
function mostrarAlerta() {
    alert("¿Tienes dudas? Escríbenos y te contactaremos pronto.");
}

// Validación del formulario
(() => {
    'use strict';
    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                event.preventDefault();
                alert("✅ ¡Gracias por contactarnos!");
                form.reset();
            }
            form.classList.add('was-validated');
        }, false);
    });
})();