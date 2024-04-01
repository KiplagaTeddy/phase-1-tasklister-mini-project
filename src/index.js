document.addEventListener("DOMContentLoaded", () => {
const newForm = document.querySelector('form');
newForm.addEventListener('submit', (Task) => {
  Task.preventDefault();
  const newToDo = Task.target.querySelector('#new-task-description').value
  buildToDo(newToDo);
  newForm.reset();
})
})

function buildToDo(newToDo){
  const taskLi = document.createElement('li');
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'x';
  taskLi.textContent = newToDo;
  taskLi.appendChild(deleteButton);
  document.querySelector('#tasks').appendChild(taskLi);
  deleteButton.addEventListener('click', handleDelete);
  
  function handleDelete(Task){
    Task.target.parentNode.remove();
  }
}