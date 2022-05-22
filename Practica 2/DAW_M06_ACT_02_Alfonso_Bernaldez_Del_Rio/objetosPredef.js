
document.getElementById("listaPropiedades").innerHTML = 
"<li> Valor máximo que puede tener un número en JavaScript "+ Number.MAX_VALUE + "</li>"
+ "<li> Valor mínimo que puede tener un número en JavaScript " + Number.MIN_VALUE + "</li>"
+ "<li>	Altura total de la pantalla "+ screen.availHeight + "</li>"
+ "<li>	Anchura total de la pantalla "+ screen.availWidth + "</li>"
+ "<li> Altura interna de la ventana "+ screen.height + "</li>"
+ "<li> Anchura interna de la ventana. " + screen.width + "</li>"
+ "<li>	URL de la página web "+ location.href + "</li>"
+ "<li>	Título de la página web. "+ document.title + "</li>"
+ "<li> Un valor aleatorio entre 0 y 200 (utiliza el objeto Math) "+ Math.random(0-200) + "</li>"
+ "<li>	Sistema operativo del ordenador. "+ window.FileSystem + "</li>"
+ "<li>	La fecha actual es:  "+  new Date() + "</li>"
+ "<li>	La hora actual es: "+ new Date().getHours() + "</li>";

function nombre_usuario(){ //cookie

    let valorInput = document.getElementById("nombreCookie").value; //COGEMOS EL VALOR DEL INPUT
    document.cookie="nombre=usuario" + valorInput; //LO AÑADIMOS A LA COOKIE CREADA

}

function numeroVentana(){

window.open("numero.html", "width=300, height=300", "menubar=no", "top=618","left=262");
} 