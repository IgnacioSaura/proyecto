function userLogin(user1,pass1)
{
    var userName = user1.value;
    var userPass = pass1.value;
    var correct = 0;	// establezco la variable para que, si es Verdadero, ejecute la siguiente instrucción.
    var wrong = 1; // Si es falso, mensaje de alerta

    var i = 0
    var userarray = ["Ignacio", "Luisa", "Sonia", "Jose", "Natalia"]; // usuarios y contraseñas.
    var passarray = ["Saura", "Delaespriella", "Muñoz", "Saura", "Saura"];


    for (var i=0; i < userarray.length; i++)
        {
            if (( userName == userarray[i]) && ( userPass == passarray[i])) // si la pass y la contraseña son iguales el login es correcto
                {
                    correct = 1;
                }
        }	


    if (correct ===  1) //cuando es correcto se ejecuta
        {
            window.location="menuprincipal.html" // si es correcto te manda a esta pagina
            wrong = 0;
        }

    else
        {
            alert ("Contrasena o Usuario Incorrectos");
            correct = 0;
        }
}
