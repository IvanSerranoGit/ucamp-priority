// Varibales globales
const formularioUI = document.getElementById('formulario');
const listaPrioridadesUI = document.getElementById('listaPrioridades');
let arrayPrioridades = [];
// funciones
const CrearPrioridad = (prioridad) => {
    let prioridades = {
        prioridad: prioridad,
        estado: false
    }
    arrayPrioridades.push(prioridades)
    return prioridades
}
// let priori1 = CrearPrioridad('Crear Web App');
// let priori2 = CrearPrioridad('Crear movil App');
// console.log(priori1);
// console.log(arrayPrioridades);

const GuardarPrioridad = () => {
    localStorage.setItem('prioridades', JSON.stringify(arrayPrioridades));
    MostrarPrioridad();
}

const EliminarPrioridad = (prioridad) => {
    // console.log(prioridad);
    let indexArray;
    arrayPrioridades.forEach((element, index) => {
        // console.log(index);
        if(element.prioridad === prioridad){
            indexArray = index;
            console.log(indexArray);
        }
    });
    arrayPrioridades.splice(indexArray, 1);
    GuardarPrioridad();
}   
const EditarPrioridad = (prioridad) => {
    // buscan el undex
    let indexArray = arrayPrioridades.findIndex((element) =>{
        return element.prioridad === prioridad
    });
    console.log(indexArray);
    console.log(arrayPrioridades[indexArray]);
    arrayPrioridades[indexArray].estado = true;
    GuardarPrioridad();
}
const MostrarPrioridad = () => {
    // vacia lo que tenemos en html
    listaPrioridadesUI.innerHTML = '';
    arrayPrioridades = JSON.parse(localStorage.getItem('prioridades'));
    // console.log(arrayPrioridades);
    if(arrayPrioridades === null){
        arrayPrioridades = [];
    }else{
        arrayPrioridades.forEach(element => {

            if (element.estado) {
                           // console.log(element);
            listaPrioridadesUI.innerHTML += `<div class="alert alert-info" role="alert"><span class="material-symbols-rounded float-left mr-2">priority</span><b class="ml-4">${element.prioridad}</b> - ${element.estado}<span class="float-right"><span class="material-symbols-rounded">task_alt</span><span class="material-symbols-rounded">delete</span></span></div>` 
            }else{
                // console.log(element);
                listaPrioridadesUI.innerHTML += `<div class="alert alert-danger" role="alert"><span class="material-symbols-rounded float-left mr-2">priority</span><b class="ml-4">${element.prioridad}</b> - ${element.estado}<span class="float-right"><span class="material-symbols-rounded">task_alt</span><span class="material-symbols-rounded">delete</span></span></div>`
            }

        });
    }
}
// EventListener

formularioUI.addEventListener('submit', (e) => {
    e.preventDefault();
    let prioridadUI = document.getElementById('prioridad').value;
    console.log(prioridadUI);

    CrearPrioridad(prioridadUI);
    GuardarPrioridad();
    formularioUI.reset();
});
// se ejecuta cuando carga el HTML
document.addEventListener('DOMContentLoaded', MostrarPrioridad())
listaPrioridadesUI.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log(e);
    // console.log(e.path[2].childNodes[3].innerHTML);
    // console.log(e.target.innerHTML);
    if(e.target.innerHTML === 'task_alt' | e.target.innerHTML === 'delete'){
        let textoPrioridad = e.path[2].childNodes[1].innerHTML
        // console.log("accion task");
        // console.log(e.path[2].childNodes[1].innerHTML); 
        if(e.target.innerHTML === 'delete'){
            // aliminar
            EliminarPrioridad(textoPrioridad)
        }
        if(e.target.innerHTML === 'task_alt'){
            // editar
            EditarPrioridad(textoPrioridad);
        }
    }
});


// hora real
let date = new Date().toDateString();
let fecha = document.getElementById('date');
fecha.innerHTML =  ` ${date}`;