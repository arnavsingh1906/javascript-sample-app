// Select elements
const input = document.getElementById('todo-input');
const addButton = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Add task
addButton.addEventListener('click', () => {
  const taskText = input.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create list item
  const listItem = document.createElement('li');
  listItem.textContent = taskText;

  // Add delete button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete'; 
  deleteButton.addEventListener('click', () => {
    todoList.removeChild(listItem);
  });

  listItem.appendChild(deleteButton);
  todoList.appendChild(listItem);

  // Clear input
  input.value = '';
});
