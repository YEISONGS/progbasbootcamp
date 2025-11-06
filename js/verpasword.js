const password = document.getElementById("password");
const toggle_password = document.getElementById("toggle_password"); // 🔹 agregado

toggle_password.addEventListener("click", () => {
    const tipo_elemento = password.type === "password" ? "text" : "password";
    password.type = tipo_elemento;
    toggle_password.classList.toggle("fa-eye");
    toggle_password.classList.toggle("fa-eye-slash");
});

function validar() {
    const passwordValue = password.value;
    const lowercase = /[a-z]/.test(passwordValue);
    const uppercase = /[A-Z]/.test(passwordValue);
    const number = /\d/.test(passwordValue);
    const specialchar = /[\W_]/.test(passwordValue);
    

    

   if (passwordValue.length < 8) {
        Swal.fire("Error", 
            "La contraseña debe tener al menos 8 caracteres", 
            "error");
        return;
    }

    if (lowercase && uppercase &&  number && specialchar){
        Swal.fire(
            "FELICIDADES",
            "CONTRASE;A CORRECTA ",
            "SUCCES"
        );
        
    } else{
        Swal.fire({
            icon: "error",
            title: "contrasea invalida:",
            html: `
            <ul style="text-aling:left; nargin-left:20px;">
            <li>${number ? "🖐️" : "❌"} Al menos un numero</li>
            <li>${lowercase ? "🖐️" : "❌"} Al menos una minuscula</li>
            <li>${uppercase ? "🖐️" : "❌"} Al menos una mayuscula</li>
            <li>${specialchar ? "🖐️" : "❌"} Al menos un caracter</li>
            </ul>
        `
        }

        )
    }

   
}
