var prioridades = [];

var misPrioridades = document.getElementById('monstrarPrioridades');
var prioridad = document.getElementById('prioridad');

var mostrar = document.getElementById('mostrar');

if(prioridades.length == 0){
    misPrioridades.innerHTML = "Aún no has agregado ninguna prioridad"
}

function pushButton() {
    prioridades.push(prioridad.value);
    misPrioridades.innerHTML =  ` ${prioridades}`;
    let json = JSON.stringify(prioridades);
    let local = localStorage.setItem("data", json);
    let myData = localStorage.getItem("data");
    console.log(myData);
    var list = document.createElement("li");
    console.log(list);


    var newContent = document.createTextNode(myData);
    newDiv.appendChild(newContent);
    var currentDiv = document.getElementById("propiedades-container");
    document.body.insertBefore(list, currentDiv);
}
function popButton() {
    prioridades.pop()
    misPrioridades.innerHTML =  ` ${prioridades}`;
}
function shiftButton() {
    prioridades.shift()
    misPrioridades.innerHTML =  ` ${prioridades}`;
}
let date = new Date().toDateString();
let fecha = document.getElementById('date');
fecha.innerHTML =  ` ${date}`;

// let params = new URLSearchParams({
//     access_key: 'f5c083ec9d8b9da800761e01757f67b1',
//     query: 'Mexico'
// })
// const URL = `http://api.weatherstack.com/current${params}`;
// fetch(URL)
// .then(res => res.json())
// .then(console.log())


fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))