const TaskBox = document.getElementById("taskbox");
const AddButton = document.getElementById("AddButton");
const taskList = document.getElementById("tasklist");

function addTask(){
    if (TaskBox.value===''){
        alert("Enter a task first!");
    }
    else{
        let newTask = document.createElement("li");
        newTask.innerHTML=TaskBox.value;
        taskList.appendChild(newTask);
        let deleteCross = document.createElement("span");
        deleteCross.innerHTML = "\u00d7";
        newTask.appendChild(deleteCross);
    }
    TaskBox.value="";
    setData();
};

taskList.addEventListener("click",function(e){
    if (e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        setData();
    }
    else if (e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        setData();
    }
},false);

function setData(){
    localStorage.setItem("data",taskList.innerHTML);
}
(function getData(){
    taskList.innerHTML=localStorage.getItem("data");
}());

TaskBox.addEventListener("keydown",function(e){
    if (e.key=="Enter"){
        AddButton.click();
    }
})