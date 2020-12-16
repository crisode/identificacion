let user = '';
let password = '';
function identificacion(user,password){
    switch(true){
        case (user == 'admin') && (password == '1234'):
        console.log("Bienvenido a nuestro sitio");
        break;
    case (user == 'admin') && (password != '1234'):
        console.log("Contraseña incorrecta");
        break;
    case (user != 'admin') && (password == '1234'):
        console.log("Usuario incorrecto");
        break;
    default:
        console.log("Datos invalidos");
    }
}
identificacion('admin', '1234');