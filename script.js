document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que la página se recargue al enviar el formulario

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Comprueba las credenciales (usando valores predeterminados en este ejemplo)
    if (username === "usuario" && password === "contraseña") {
        document.getElementById("login-message").textContent = "¡Bienvenido!";
    } else {
        document.getElementById("login-message").textContent = "Usuario o contraseña incorrectos. Inténtalo de nuevo.";
    }
});