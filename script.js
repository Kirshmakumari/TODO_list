// *****add btn*****
function addItem() {
    var input = document.getElementById("todoInput");
    var list = document.getElementById("list");
    var li = document.createElement("li");
    var liText = document.createTextNode(input.value);
    li.setAttribute("class", "listItem")
    li.appendChild(liText);
    list.appendChild(li);
    console.log(li);
    document.getElementById("todoInput").value = "";

    // *****Delete btn*****
    var delBtn = document.createElement("button");
    delBtn.setAttribute("onclick", "delItem(this)");
    delBtn.setAttribute("class", "fa-solid fa-trash-can");
    li.appendChild(delBtn);
    // *****Edit btn*****
    var editBtn = document.createElement("button");
    editBtn.setAttribute("onclick", "editItem(this)");
    editBtn.setAttribute("class", "fa-solid fa-pen-to-square");
    li.appendChild(editBtn);
}

// *****delete all btn*****
function deleteAll() {
    var list = document.getElementById("list");
    list.innerHTML="";     
    // list.remove();    //*****"another way to remove"*****
}

// *****delItem Function onclick Delete btn*****
function delItem(currentItem) {
    currentItem.parentNode.remove();
    console.log(currentItem.parentNode, "is deleted by you");
}

// *****editItem Function onclick Edit btn*****
function editItem(currentLi) {
    var priviousValue = currentLi.parentNode.firstChild.nodeValue;
    var inputUpdatedValue = prompt("Enter Updated Value", priviousValue);
    currentLi.parentNode.firstChild.nodeValue = inputUpdatedValue;
    console.log(
        "priviousValue = " + priviousValue,
        "| UpdatedValue = " + inputUpdatedValue
    );
}
