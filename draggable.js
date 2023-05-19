console.log('draggable.js working')

function allowDrop(ev) {
    ev.preventDefault();
    }

function drag(ev) {
console.log("drag event initiated")
ev.dataTransfer.setData("text", ev.target.id);
console.log( ev.dataTransfer.setData("text", ev.target.id))
console.log(document.querySelector('#task1Label'))
}

function drop(ev) {
ev.preventDefault();
var data = ev.dataTransfer.getData("text");
ev.target.appendChild(document.getElementById(data));
}

