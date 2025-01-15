// Получаем элементы
const addButton = document.getElementById("add-task-btn");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

// Функция для добавления задачи
function addTask() {
    const taskText = todoInput.value.trim();

    if (taskText !== "") {
        const li = document.createElement("li");

        // Создание текста задачи
        const taskContent = document.createElement("span");
        taskContent.textContent = taskText;

        // Создание кнопки удаления
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Удалить";
        deleteButton.classList.add("delete-btn");

        // Слушатель для удаления задачи
        deleteButton.addEventListener("click", function () {
            todoList.removeChild(li);
        });

        // Слушатель для пометки задачи как выполненной
        li.addEventListener("click", function () {
            li.classList.toggle("completed");
        });

        // Добавление содержимого в список
        li.appendChild(taskContent);
        li.appendChild(deleteButton);
        todoList.appendChild(li);

        // Очищаем поле ввода
        todoInput.value = "";
    }
}

// Добавление задачи по кнопке
addButton.addEventListener("click", addTask);

// Добавление задачи по нажатию на Enter
todoInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
