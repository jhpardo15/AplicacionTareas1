let input = document.querySelector("#Materia");
let input2 = document.querySelector("#Descripcion");
let input3 = document.querySelector("#Fecha")
let Materia = input.value
let Descripcion = input2.value
let Fecha = input3.value

let inputs = [Materia, Descripcion, Fecha];
let tabla = document.querySelector("#tablaTareas");
// Opcion 1, for como en C
// for (let i = 0; i < compras.length; i++) {
//   let elemento = document.createElement("li");
//   elemento.innerHTML = compras[i];
//   lista.appendChild(elemento);
// }
// Opcion 2, for of.
// Se hace lo mismo para cada uno de los elementos de la lista.
function addHeaders() {
  let fila = document.createElement("tr");
  let enc1 = document.createElement("th");
  enc1.innerHTML = "Materia";
  let enc2 = document.createElement("th");
  enc2.innerHTML = "Descripción";
  let enc3 = document.createElement("th");
  enc3.innerHTML = "Fecha";

  fila.appendChild(enc1);
  fila.appendChild(enc2);
  fila.appendChild(enc3);
  tabla.appendChild(fila);
  console.log("aqui");
}
addHeaders();
function hacerTabla() {
  
  
  
    let fila = document.createElement("tr");
    // Creo los datos que van en la fila
    let tdMateria = document.createElement("td");
    tdMateria.innerHTML = input.value; //en su programa esto hara referencia al dato de materia ingresado por el usuario
    let tdDescripcion = document.createElement("td");
    tdDescripcion.innerHTML = input2.value; //en su programa esto hara referencia al dato de descripcion ingresado por el usuario
    let tdFecha = document.createElement("td");
    tdFecha.innerHTML = input3.value; ////en su programa esto hara referencia al dato de fecha ingresado por el usuario
    // Añado los nuevos datos como children de la fila
    fila.appendChild(tdMateria);
    fila.appendChild(tdDescripcion);
    fila.appendChild(tdFecha);
    // Añado la fila a la tabla
    tabla.appendChild(fila);
  
}
let btn = document.querySelector("#btnAdd");
// Event listener
function addItem() {
  // leer el valor que el usuario escribio
  let item = input.value;
  let item2 = input2.value;
  let item3 = input3.value;
  inputs.push(item);
  inputs.push(item2);
  inputs.push(item3);
 hacerTabla();
  //Borrar lo que el usuario escribio
  input.value = "";
  input2.value = "";
  input3.value = "";
}
btn.onclick = addItem;
hacerTabla();