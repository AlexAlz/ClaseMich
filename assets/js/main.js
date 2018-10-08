	// Variables
	var lista = document.getElementById("lista"),
		tareaInput = document.getElementById("tareaInput"),
		btnNuevaTarea = document.getElementById("btn-agregar"),
		imagen = document.getElementById("borrar");
		deleteAll = document.getElementById("deleteall");

	// Funciones
	var agregarTarea = function(){
		var tarea = tareaInput.value,
			nuevaTarea = document.createElement("li"),
			enlace = document.createElement("a"),
			span = document.createElement("span"),
			contenido = document.createTextNode(tarea);

		if (tarea === "") {
			tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
			tareaInput.className = "error";
			return false;
		}

		// Agregamos el contenido al enlace
		enlace.appendChild(contenido);
		// Le establecemos un atributo href
		enlace.setAttribute("href", "#");
		enlace.setAttribute("id", "elemento" );
		enlace.setAttribute("draggable", "true");
		// Agrergamos el enlace (a) a la nueva tarea (li)
		nuevaTarea.appendChild(enlace);
		nuevaTarea.setAttribute("cursor", "move");
		// Agregamos la nueva tarea a la lista
		lista.appendChild(nuevaTarea);

		tareaInput.value = "";

		for (var i = 0; i <= lista.children.length -1; i++) {
			lista.children[i].addEventListener("click", function(){
				this.parentNode.removeChild(this);
				// document.getElementById("numerotareas").document.write("hola");
			});
		}

	};
	var comprobarInput = function(){
		if (tareaInput != null) {
			tareaInput.className = "AgregarTareaN";
			// teareaInput.setAttribute("placeholder", "Agrega tu tarea");
		}
	};

	var eleminarTarea = function(){
		this.parentNode.removeChild(this);
	};

	var eliminarTodos = function(){
		lista.style.display = "none";
		mostrarImagen();
	}

	var ocultarIamgen = function(){
		if (lista != null) {
			imagen.style.display = "none";
		}
	}

	var mostrarImagen = function(){
		imagen.style.display = "block";
	}

	var ocultarEliminar = function(){
		deleteAll.style.display = "none";
	}

	var mostrarEliminar = function(){
		deleteall.style.display = "block";
	}

	// Eventos

	// Agregar Tarea
	btnNuevaTarea.addEventListener("click", agregarTarea);
	// Comprobar Input
	tareaInput.addEventListener("click", comprobarInput);
	// Eliminar todas las tareas
	deleteall.addEventListener("click", eliminarTodos);
	// Eliminar imagen de tareas vacias
	btnNuevaTarea.addEventListener("click", ocultarIamgen, mostrarEliminar);
	//Mostrar imagen de tareas vacias
	lista.addEventListener("click", mostrarImagen);
	// Borrando Elementos de la lista
	for (var i = 0; i <= lista.children.length -1; i++) {
		lista.children[i].addEventListener("click", eleminarTarea);
	}
	// Ocultar el boton elimar todo si no hay Tareas
	deleteAll.addEventListener("click", ocultarEliminar);
	// Mostrar el boton al haber tareas
	btnNuevaTarea.addEventListener("click", mostrarEliminar);
	btnNuevaTarea.addEventListener("click", agregarTarea);

	$(document).ready(function(){
	              //Aplicar la función sortable a la lista con id milista
	              $( "elemento" ).sortable({});
	          });
