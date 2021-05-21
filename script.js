function capturar(){
  const nombre = document.getElementById('nombre').value
  const apellido = document.getElementById('apellido').value
  const email = document.getElementById('email').value
  const facultad = document.getElementById('facultad').value
  const carrera = document.getElementById('carrera').value

  guardar(nombre, apellido, email, facultad, carrera)
}


function guardar(nombre, apellido, email, facultad, carrera){

  var expira = new Date()
  expira.setTime(expira.getTime() + 1000 * 3600)
  
  document.cookie = "Nombre =" + nombre + "; expires =" + expira.toUTCString() + "SameSite = None; Secure;"
  document.cookie = "Apellido =" + apellido + "; expires =" + expira.toUTCString() + "SameSite = None; Secure;"
  document.cookie = "Email =" + email + "; expires =" + expira.toUTCString() + "SameSite = None; Secure;"
  document.cookie = "Facultad =" + facultad + "; expires =" + expira.toUTCString() + "SameSite = None; Secure;"
  document.cookie = "Carrera =" + carrera + "; expires =" + expira.toUTCString() + "SameSite = None; Secure;"

  enviar()
}


function enviar(){
  
  var cookies = document.cookie
  var cookieArray = cookies.split(";")
  
  if(cookieArray[0] !== ""){
    document.getElementById("cookieNombre").innerHTML = cookieArray[0]
    document.getElementById("cookieApellido").innerHTML = cookieArray[1]
    document.getElementById("cookieEmail").innerHTML = cookieArray[2]
    document.getElementById("cookieFacultad").innerHTML = cookieArray[3]
    document.getElementById("cookieCarrera").innerHTML = cookieArray[4]
  }

}