const todoInput = document.getElementById('todo-input')
const addTaskButton = document.getElementById('add-task-btn')
const todoList = document.getElementById('todo-list')


//Add a Task
const addTask = () => {
  const taskText = todoInput.value.trim()

  if(taskText !== ''){
    const taskItem = createTaskItem(taskText)
    todoList.appendChild(taskItem)
    todoInput.value = ''
  }
}


//Create new Task Items
const createTaskItem = (taskText) => {
  const taskItem = document.createElement('li')
  taskItem.className = 'flex text-center bg-white text-black p-2 justify-between rounded-lg mb-[5px]'


  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'

  const taskTextSpan = document.createElement('span')
  taskTextSpan.textContent = taskText

 const deleteBtn = document.createElement('button') 
 deleteBtn.textContent = 'Delete'
 deleteBtn.classList.add('delete-btn')
 deleteBtn.addEventListener('click', deleteTask)
 deleteBtn.className = 'rounded-[20px] bg-purple-800 border-none text-white py-2.5 px-[15px] items-center'
 

 taskItem.appendChild(checkbox)
 taskItem.appendChild(taskTextSpan)
 taskItem.appendChild(deleteBtn)

 return taskItem
}

//Delete Task
const deleteTask = (event) => {
  const taskItem = event.target.parentNode
  todoList.removeChild(taskItem)
}

//Cross out Task
const toggleTask = (event) => {
  const taskItem = event.target.parentNode
  taskItem.classList.toggle('completed')
  if (event.target.checked) {
    taskItem.className = 'line-through flex text-center bg-white text-black p-2 justify-between rounded-lg mb-1'
  }else {
    taskItem.className = 'flex text-center bg-white text-black p-2 justify-between rounded-lg mb-1'
  }

}

//Event Listeners
addTaskButton.addEventListener('click', addTask)
todoInput.addEventListener('keydown', function(event) {
  if(event.key === 'Enter'){
    addTask()
  }
})

todoList.addEventListener('change', toggleTask)

//Examples of tasks
const initialTasks = ['Buy Groceries', 'Pay Bills', 'Walk the Dog']

initialTasks.forEach((task) => {
  const taskItem = createTaskItem(task)
  todoList.appendChild(taskItem)
})