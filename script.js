const inputTextElement = document.getElementById("inptText");
const AddBtnElement = document.getElementById("AddBtn");
const ListItemsElement = document.getElementById("list");
const DeletBtnElement = document.getElementById("DeletAll");

function AddTask(){
    if(inputTextElement.value === ""){
        alert("You Must Add Something")
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputTextElement.value;

        let span = document.createElement("span");
        span.innerHTML = '<img src="XWaves.png" class="delete-icon" alt="Delete">';
        li.appendChild(span);

        ListItemsElement.appendChild(li);
    }
    inputTextElement.value = "";
    SaveData();
} 

ListItemsElement.addEventListener("click" ,function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        SaveData();
    }else if (e.target.tagName === "IMG"){
        e.target.closest('li').remove();
        SaveData();
    }
},false)

function SaveData() {
    localStorage.setItem("tasks", ListItemsElement.innerHTML);
}

function ShowTasks() {
    ListItemsElement.innerHTML = localStorage.getItem("tasks") || "";
}
ShowTasks();

DeletBtnElement.addEventListener("click" , DeltALL)

function DeltALL(){
    while (ListItemsElement.firstChild) {
        ListItemsElement.removeChild(ListItemsElement.firstChild);
    }
    localStorage.removeItem("tasks");
}
