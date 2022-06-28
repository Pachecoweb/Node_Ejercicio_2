let name = "Diego Pacheco ";
let age = 32;
let work = "desarrollador";


function trabajo (){
    if (work = true){
        console.log ("Si soy desarrollador");
    }
}
console.log ("Me llamo "+ name + "y tengo "+ age +" años.");
console.log (trabajo());

const bornBirth = new Date (1989, 10, 2);

console.log ("Naci en " + bornBirth);

let book = {
    "encabezado":"MI LIBRO FAVORITO ES:",
    "espacio":"",
    "titulo": "Crimen y castigo",
    "autor": "Dostoyevsky",
    "fecha": new Date(1770,10,20),
    "url":"freeditorial.com/en/books/crimen-y-castigo/"
}
console.log (book.encabezado);
console.log (book.espacio);
console.log (book.titulo);
console.log (book.autor);
console.log (book.fecha);
console.log (book.url);
