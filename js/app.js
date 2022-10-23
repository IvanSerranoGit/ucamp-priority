var prioridades = [];

var misPrioridades = document.getElementById('monstrarPrioridades');
var prioridad = document.getElementById('prioridad');

var mostrar = document.getElementById('mostrar');

if(prioridades.length == 0){
    misPrioridades.innerHTML = "Aún no has agregado ninguna prioridad"
}


function pushButton() {
    // agregamos el valor del campo prioridad a array prioridades
    prioridades.push(prioridad.value);
    // guardamos el local Storage los valore de prioridades
    localStorage.setItem("prioridades", JSON.stringify(prioridades));
    // transformamos el arrya en un objeto json
    console.log(prioridades);
    

    // for (let value of prioridades) {
    //     let list = document.createElement("li");
    //     let textoPrioridad = document.createTextNode("soy");
    //     document.body.appendChild(textoPrioridad);

    //     // let currentList = document.getElementById("monstrarPrioridades");
    //     // document.body.insertBefore(list, currentList);
    // }

    // let priority = document.createTextNode(prioridades);

}

const btnList = document.getElementById('btnAdd');
btnList.addEventListener('click',event => {
    let lista = document.createElement('div');
    let listText  = document.createTextNode(prioridades);
    document.body.appendChild(listText);
    misPrioridades.innerHTML =   ` ${prioridades} \n`;

});

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


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))