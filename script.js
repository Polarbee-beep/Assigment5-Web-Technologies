
document.addEventListener("DOMContentLoaded", function () {

    
    if (document.getElementById("helloButton")) {
        console.log("Student: YOUR NAME");
        console.log("Group: YOUR GROUP");

        document.getElementById("helloButton").onclick = function () {
            alert("Hello, JavaScript World!");
        };
    }

    if (document.getElementById("variablesOutput")) {
        let name = "YOUR NAME";
        let age = 18;
        let isStudent = true;
        let a = 10;
        let b = 5;

        let result =
            "Name: " + name +
            "\nAge: " + age +
            "\nStudent: " + isStudent +
            "\nAddition: " + (a + b) +
            "\nSubtraction: " + (a - b) +
            "\nMultiplication: " + (a * b) +
            "\nDivision: " + (a / b) +
            "\nConcatenation: Hello " + name;

        document.getElementById("variablesOutput").textContent = result;
        console.log(result);
    }

    if (document.getElementById("changeText")) {
        document.getElementById("changeText").onclick = function () {
            document.getElementById("paragraph").textContent =
                "The paragraph has been changed!";
        };
    }

    if (document.getElementById("changeColor")) {
        document.getElementById("changeColor").onclick = function () {
            document.getElementById("styleBox").style.backgroundColor =
                "lightgreen";
        };

        document.getElementById("changeSize").onclick = function () {
            document.getElementById("styleBox").style.fontSize = "24px";
        };
    }

    if (document.getElementById("addItem")) {
        document.getElementById("addItem").onclick = function () {
            let item = document.createElement("li");
            item.textContent = "New item";
            document.getElementById("itemList").appendChild(item);
        };

        document.getElementById("removeItem").onclick = function () {
            let list = document.getElementById("itemList");
            if (list.lastElementChild) {
                list.removeChild(list.lastElementChild);
            }
        };
    }

    if (document.getElementById("hoverBox")) {
        let box = document.getElementById("hoverBox");

        box.addEventListener("mouseover", function () {
            box.style.backgroundColor = "orange";
        });

        box.addEventListener("mouseout", function () {
            box.style.backgroundColor = "lightblue";
        });
    }

    if (document.getElementById("liveInput")) {
        document.getElementById("liveInput").addEventListener("keyup", function () {
            document.getElementById("liveOutput").textContent =
                this.value;
        });
    }

    if (document.getElementById("calculate")) {
        document.getElementById("calculate").onclick = function () {
            let a = Number(document.getElementById("num1").value);
            let b = Number(document.getElementById("num2").value);
            let operation = document.getElementById("operation").value;
            let result;

            if (operation === "+") result = a + b;
            else if (operation === "-") result = a - b;
            else if (operation === "*") result = a * b;
            else if (operation === "/") {
                result = b === 0 ? "Cannot divide by zero" : a / b;
            }

            document.getElementById("calcResult").textContent =
                "Result: " + result;
        };
    }

    if (document.getElementById("addTask")) {
        let tasks = [];

        function renderTasks() {
            let list = document.getElementById("todoList");
            list.innerHTML = "";

            tasks.forEach(function (task, index) {
                let item = document.createElement("li");
                let text = document.createElement("span");
                text.textContent = task.text;

                if (task.completed) {
                    text.classList.add("completed");
                }

                text.onclick = function () {
                    task.completed = !task.completed;
                    renderTasks();
                };

                let deleteButton = document.createElement("button");
                deleteButton.textContent = "Delete";

                deleteButton.onclick = function () {
                    tasks.splice(index, 1);
                    renderTasks();
                };

                item.appendChild(text);
                item.appendChild(deleteButton);
                list.appendChild(item);
            });
        }

        document.getElementById("addTask").onclick = function () {
            let input = document.getElementById("taskInput");
            let taskText = input.value.trim();

            if (taskText !== "") {
                tasks.push({
                    text: taskText,
                    completed: false
                });

                input.value = "";
                renderTasks();
            }
        };
    }
});
