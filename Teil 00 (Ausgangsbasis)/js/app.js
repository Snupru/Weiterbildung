'use strict';

document.addEventListener("DOMContentLoaded", () => {
    const newTodo = document.getElementById("newToDo");
    const toDos = document.getElementById("toDos");
    const toggleAll = document.getElementById("toggle-all");
    const clearAll = document.getElementById("clearAll");

    toDos.style.display = "none";
        
    InitCurrentTodos(toDos);
    RefreshCounter(toDos);  

    newTodo.addEventListener("keyup", (event) => {
        AddToDo(newTodo, toDos, event);
    });

    toggleAll.addEventListener("change", () => {
        if(toggleAll.checked){
            toDos.style.display = "none";
        }
        else{
            toDos.style.display = "block";
        }
    })

    clearAll.addEventListener("click", () => {
        const allLi = toDos.children;

        for(let item of allLi){
            toDos.removeChild(item);
        }
        
        RefreshCounter(toDos);
    });
});

function RefreshCounter(count){    
    const addStudentButton = document.getElementById("toDoCounter");
    addStudentButton.innerText = count.getElementsByTagName('li').length;
}

function InitCurrentTodos(toDos){    
    const currentToDos = toDos.querySelectorAll(".toggle");
    const currentDestroyBtns = toDos.querySelectorAll(".destroy");

    for(let item of currentToDos){
        item.addEventListener("change", () => {
            let parentLi = item.parentNode.parentNode;
            if(item.checked){
                parentLi.classList = "completed";
            }
            else{
                parentLi.classList = "";
            }
        });
    }

    for(let item of currentDestroyBtns){
        item.addEventListener("click", () => {
            let parentLi = item.parentNode.parentNode;
            toDos.removeChild(parentLi);
            RefreshCounter(toDos);
        });
    }
}

function AddToDo(newTodo, currentToDos, event){
    if(newTodo.value === ''){
        return;
    }

    if(event.key !== 'Enter'){            
        return;
    }
    
    let liElement = document.createElement("li");

    let divELement = document.createElement("div");
    divELement.classList.add("view");

    let inputElement = document.createElement("input");
    inputElement.classList.add("toggle");
    inputElement.type = "checkbox";
    inputElement.addEventListener("change", () => {
        let parentLi = inputElement.parentNode.parentNode;
        if(inputElement.checked){
            parentLi.classList = "completed";
        }
        else{
            parentLi.classList = "";
        }
    });

    divELement.appendChild(inputElement);

    let labelElement = document.createElement("label");
    labelElement.innerText = newTodo.value;
    divELement.appendChild(labelElement);

    let btnELement = document.createElement("button");
    btnELement.classList.add("destroy");
    btnELement.addEventListener("click", () => {
        let parentLi = btnELement.parentNode.parentNode;
        toDos.removeChild(parentLi);
        RefreshCounter(toDos);
    });
    divELement.appendChild(btnELement);
    
    liElement.appendChild(divELement);

    let labelElement2 = document.createElement("label");
    labelElement2.value = newTodo.value;
    labelElement2.classList.add("edit");
    liElement.appendChild(labelElement2);

    currentToDos.appendChild(liElement);
    newTodo.value = '';
    RefreshCounter(currentToDos);
}