/* variables */

const todoBtn = document.getElementById(`todo-btn`);
const todoText = document.getElementById(`todo-text`);
const todoDate = document.getElementById(`todo-date`);
const todoTime = document.getElementById(`todo-time`);
const noTask = document.getElementById(`noTask`);
const todoListApp = document.getElementById(`todo-list`); 

//todo lists
let todoList = [];

const makeTudoList = () => {
    let todoHtnl = ``;
    todoList.forEach((data, i) => {
        let val1 = data[0];
        let val2 = data[1];
        let val3 = data[2];

        let val = `
                     <div class="box">
                        <div class="con">
                            <h2>Task : <span id="task">${val1}</span></h2>
                            <h2>Date : <span  id="date">${val2}</span></h2>
                            <h2>Time : <span id="time">${val3}</span></h2>
                        </div>
    
                        <div class="con2">
                            <button class="done" title="done with the task"><img src="assets/icons/check-solid.svg" alt="done"></button>
                        <button class="del" onclick="
                            todoList.splice(${i}, 1);
                            makeTudoList();
                        " title="delete the task"><img src="assets/icons/trash-solid.svg" alt="delete button"></button>
                    </div>
                    <h3 id="completed-task"></h3>
                </div>
        `;

        todoHtnl += val;
        
    })
    todoListApp.innerHTML = todoHtnl;

};

const todo = (e) => {
    let todoTextVal = todoText.value;
    let todoDateVal = todoDate.value;
    let todoTimeVal = todoTime.value;
    todoTextVal = String(todoTextVal);
    todoDateVal = String(todoDateVal);
    todoTimeVal = String(todoTimeVal);

    if (todoTextVal === '') {
        noTask.textContent = `Add a Task above!`;
    } else {
        noTask.textContent = ``;
        let newDate = new Date();
        //getting the month day and year
        let month = newDate.getMonth();
        let day = newDate.getDate();
        let year = newDate.getFullYear();
        let mdy = `${month + 1}/${day}/${year}`;
        //validating the date functions
        let doDate = ``;
        if (todoDateVal == 0) {
            doDate = mdy;
        } else {
            doDate = todoDateVal;
        }
        //validating the time
        let doTime = ``;
        if (todoTimeVal == 0) {
            doTime = `No time selected`;
        } else {
            doTime = todoTimeVal;
        }
        
        todoList.push([todoTextVal, doDate, doTime]);
        console.log(todoList);
        
        
        todoText.value = ``;
        todoDate.value = ``;
        todoTime.value = ``;
        makeTudoList();
    }

}

todoBtn.addEventListener("click", (e) => {
    e.preventDefault();
    todo();
})

/* 
//make tudo
const makeTudo = () => {
    let todolistHtml = ``;

    todoList.forEach((val, i) => {
        let val2 = `
        <div>
            <h2>${val[0]}</h2>
            <h3>${val[1]}</h3>
            <button onclick="
                todoList.splice(${i}, 1);
                makeTudo();
            ">Delete</button>
        </div>`;

        todolistHtml += val2;
    });
    
    todolistDiv.innerHTML = todolistHtml;
};
makeTudo();

//get todo details

const tudo = () => {

    if (todo_title.value <= 0 || todo_title.value == ``) {
        console.log('add a title');
    } else {
        let title = todo_title.value;
        let date = todo_date.value;
        title = String(title);
/*         if (date == 0) {
            date = new Date();
            date = String(date);
            todoList.push([title, date]);
        } else {
            date = String(date);
            todoList.push([title, date]);
        } 
        date = String(date);
        todoList.push([title, date]);
        console.log(todoList);
        todo_title.value = ``;    
        todo_date.value = ``;
    }
    makeTudo();
};
 */