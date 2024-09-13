document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector("input[type='text']");
    const addTaskButton = document.querySelector(".btn-success");
    const taskList = document.querySelector("tbody");

    let taskCount = 2; // since you already have 2 tasks

    // Function to add a new task
    const addTask = () => {
        const taskText = input.value.trim();
        if (taskText === "") return; // do nothing if input is empty

        taskCount++;
        const newRow = document.createElement("tr");

        newRow.innerHTML = `
            <th scope="row">${taskCount}</th>
            <td>${taskText}</td>
            <td>
                <button class="btn btn-warning edit-btn">Edit</button>
                <button class="btn btn-danger delete-btn">Delete</button>
            </td>
        `;

        taskList.appendChild(newRow);
        input.value = ""; // clear the input field

        // Add event listeners for the new buttons
        newRow.querySelector(".edit-btn").addEventListener("click", () => editTask(newRow));
        newRow.querySelector(".delete-btn").addEventListener("click", () => deleteTask(newRow));
    };

    // Function to edit a task
    const editTask = (row) => {
        const taskCell = row.querySelector("td");
        const taskText = taskCell.textContent;

        const newTaskText = prompt("Edit Task", taskText);
        if (newTaskText !== null && newTaskText.trim() !== "") {
            taskCell.textContent = newTaskText.trim();
        }
    };

    // Function to delete a task
    const deleteTask = (row) => {
        row.remove();
    };

    // Event listener for the Add Task button
    addTaskButton.addEventListener("click", addTask);

    // Add event listeners to the existing buttons
    document.querySelectorAll(".edit-btn").forEach((btn) => {
        btn.addEventListener("click", () => editTask(btn.closest("tr")));
    });

    document.querySelectorAll(".delete-btn").forEach((btn) => {
        btn.addEventListener("click", () => deleteTask(btn.closest("tr")));
    });
});
