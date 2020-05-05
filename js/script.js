let typeText = document.querySelector(".container-wrap__form__input");
let addTask = document.querySelector(".container-wrap__form__btn");
let listSecttion = document.querySelector(".container-wrap__list");

function createTask(text){
    let taskItem = document.createElement("li");
    let deleleItem = document.createElement("span");
    taskItem.className ="container-wrap__list__item";
    deleleItem.className = "container-wrap__list__delete";
    taskItem.textContent = text;
    taskItem.appendChild(deleleItem);
    deleleItem.addEventListener("click", () =>{
        listSecttion.removeChild(taskItem);
    });
    listSecttion.appendChild(taskItem);
}

addTask.addEventListener( "click" , (e) => {
    e.preventDefault();
    if (!(typeText.value === '')){  
        createTask(typeText.value);
        typeText.value = "";
    }
});