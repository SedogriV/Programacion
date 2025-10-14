const todoList = [];

renderTodoList();

function renderTodoList() {

  let todoListHTML = '';

  todoList.forEach(function(todoObject, index) {
    const { name, dueDate } = todoObject;
    const html = `
        <div clase="name">${name}</div> 
        <div clase="due-date">${dueDate}</div>
        <button class="delete button" onclick="
          todoList.splice(${index}, 1);
          renderTodoList();
        ">Delete</button>
      `;
    todoListHTML += html;
  });

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}


function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    //name: name,
    //dauDate: dueDate
      name,
      dueDate
    });
  dateInputElement.value = '';
  inputElement.value = '';

  renderTodoList();
}