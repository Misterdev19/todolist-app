const btnNewTodo = document.getElementById('btn-newtodo');
const todosPendietes  = [];

btnNewTodo.addEventListener('click' ,  function(){
      const nombreTodo =  document.getElementById('name').value;
      const decripcionTodo =  document.getElementById('description').value;
      const fechaTodo =  document.getElementById('date').value;

      todosPendietes.push({
        nombre: nombreTodo,
        descripcion: decripcionTodo,
        fecha: fechaTodo
      })

      const domListPending  =  document.getElementById('list-todo-pending')
      let domTodo = "";
      todosPendietes.forEach(function(todo, index){
        domTodo += makeTodo(todo,index);
      });
      domListPending.innerHTML = domTodo
      
})



function makeTodo(datos, index){

    return `
        <li>
            <b><span id="name">${datos.nombre}</span></b>
            <span id="description">${datos.descripcion}</span>
            <div>
                <span id="date">${datos.fecha}</span>
                <span id="sattus" class="pending">Pendiente</span>
            </div>
            <div>
                <button type="button" class="success">Termiar</button>
                <button type="button" onclick="deleteTodo(${index})" class="danger">Eliminar</button>
            </div>
        </li>
    `
}

function deleteTodo(index){
     todosPendietes.splice(index,1);
     const domListPending  =  document.getElementById('list-todo-pending')
     let domTodo = "";
     todosPendietes.forEach(function(todo, index){
       domTodo += makeTodo(todo,index);
     });
     domListPending.innerHTML = domTodo
}