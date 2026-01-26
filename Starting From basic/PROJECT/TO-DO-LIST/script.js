
document.addEventListener('DOMContentLoaded',() => {
    const taskInput = document.getElementById('text-input');
    const addTaskbtn = document.getElementById('add-task');
    const tasklist = document.getElementById('task-list');
    const emptyImage = document.querySelector('.empty');
    const todosCoontainer = document.querySelector('.todos-con');

    const toggleEmptyState =  () => {
        emptyImage.style.display = tasklist.children.length === 0 ? 'block' : 'none';
        todosCoontainer.style.width = tasklist.children.length > 0 ? '100%' : '50%';
    }

    const toggleEmptyState = () => {
        emptyImage.style.display = tasklist.children.length === 0?'block' : 'none' ;
    }


    const addTask = (event) => {
        event.preventDefault();
        const tasktext = taskInput.value.trim();
        if(!tasktext){
            return;
        }

        const li = document.createElement('li');
        li.innerHTML = `
        <input type="checkbox" class="checkbox">
        <span>${tasktext}</span>
        <div class="task-btn" >
        <button class ="edit-btn"><i class="fa-solid fa-pen"></i></button>
        <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
        </div>
        `;

        tasklist.appendChild(li);
        taskInput.value = '';
        toggleEmptyState();
    };
    addTaskbtn.addEventListener('click',addTask);
    taskInput.addEventListener('keypress',(e) => {
        if(e.key === 'Enter'){
            addTask(e);
        }
    })
});