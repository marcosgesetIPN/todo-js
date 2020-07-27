import './styles.css';
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();
//const tarea = new Todo('Aprender a bailar');

//todoList.nuevoTodo(tarea);

//tarea.completado = true;
//console.log(todoList);

//crearTodoHtml(tarea);


/*
//local y session starage, session se borra todo cuando se cierre todo
localStorage.setItem('mi-key', 'ABC123');
setTimeout(() => {
    localStorage.removeItem('mi-key');
}, 1500); //segundo y medio
*/

//mostrandolos en html
todoList.todos.forEach(todo => crearTodoHtml(todo));