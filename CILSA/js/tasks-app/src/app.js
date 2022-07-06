document.getElementById('formTarea').addEventListener('submit', agregarTarea);

function agregarTarea(e) {
  let urgencia = document.getElementById('urgencia').value;
  let descripcion = document.getElementById('descripcion').value;
  console.log(descripcion)

  let tarea = {
    urgencia,
    descripcion
  };

  if(localStorage.getItem('tareas') === null) {
    let tareas = [];
    tareas.push(tarea);
    localStorage.setItem('tareas', JSON.stringify(tareas));
  } else {
    let tareas = JSON.parse(localStorage.getItem('tareas'));
    tareas.push(tarea);
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }

  getTareas();
  document.getElementById('formTarea').reset();
  e.preventDefault();
}

function borrarTarea(urgencia) {
  console.log(urgencia)
  let tareas = JSON.parse(localStorage.getItem('tareas'));
  for(let i = 0; i < tareas.length; i++) {
    if(tareas[i].urgencia == urgencia) {
      tareas.splice(i, 1);
    }
  }
  
  localStorage.setItem('tareas', JSON.stringify(tareas));
  getTareas();
}

/* La función completarTarea() está en desarrollo!


function completarTarea(urgencia) {
  console.log(urgencia)
  let tareas = JSON.parse(localStorage.getItem('tareas'));
  for(let i = 0; i < tareas.length; i++) {
    if(tareas[i].urgencia == urgencia) {
    console.log(tareas.splice(tareas.toString()));
    }
    
  }
  
  localStorage.setItem('tareas', JSON.stringify(tareas));
  getTareas();
}

*/

function getTareas() {
  let tareas = JSON.parse(localStorage.getItem('tareas'));
  let tareasVisu = document.getElementById('tareas');
  tareasVisu.innerHTML = '';
  for(let i = 0; i < tareas.length; i++) {
    let urgencia = tareas[i].urgencia;
    let descripcion = tareas[i].descripcion;

    tareasVisu.innerHTML += `<div class="card mb-3">
        <div class="card-body">
          <p>${urgencia} - ${descripcion}
          <a href="#" onclick="borrarTarea('${urgencia}')" class="btn btn-danger ml-5">Borrar</a>

          </p>
        </div>
      </div>`;
  }
}

getTareas();