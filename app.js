var myInput = document.getElementsByTagName("input")[0];

var addBtn = document.getElementById("addBtn");

var myTable = document.getElementsByTagName("table")[0];

addBtn.addEventListener("click",addBtnFn);

var tableRows = document.getElementsByTagName("table")[0].getElementsByTagName("tr");

var checkBoxes = document.getElementsByClassName("checkbox-class");

//checkBoxes.length is same as tableRows.length






function addBtnFn(){
    addToList(myInput);
    myInput.value=""; //reset input value to empty
    return;
}

function addToList(text){
    //now make a new <tr> in <table> 
    //make 2 <td> in <tr>, one for text other for delete button
    var myNewTableRow = document.createElement("tr");
    //created a <tr> just in random space, it is not linked to my table yet
    var myTask = document.createElement("td");
    // var editBtn = document.createElement("td");
    var delBtn = document.createElement("td");
    var myCheckbox = document.createElement("td");
    //now i'm gonna link these table elements in table
    //first add both td in tr then add tr in table
    myNewTableRow.appendChild(myCheckbox);
    myNewTableRow.appendChild(myTask);
    // myNewTableRow.appendChild(editBtn);
    myNewTableRow.appendChild(delBtn);
    myTable.appendChild(myNewTableRow);
    myTask.innerText = myInput.value;
    myTask.id="task";
    // editBtn.innerHTML = "<button onclick='editFn(event)'>Edit</button>";
    delBtn.innerHTML = "<button onclick=deleteFn(this)>delete</button>"; //this parameter will return the this button element like- <button>.....</button>
    myCheckbox.innerHTML = '<input class="checkbox-class" type="checkbox" onclick="boxClickHandler()">';
}

function boxClickHandler(){
    for(let i=0; i<checkBoxes.length; i++){
        if(checkBoxes[i].checked == true){
            tableRows[i].getElementsByTagName("td")[1].id="task-done"; //I wanted to apply multiple styles so I assiged a ID to it and will apply on that id in css, here i can apply oly one style in a line like in place of .id it would be .style.color:"red"; like this
        }
        else{ //if box is unchecked then assign the original id of task
            tableRows[i].getElementsByTagName("td")[1].id="task";
        }
    }
}

function deleteFn(buttonElement){
    buttonElement.parentNode.parentNode.remove();
    console.log(a.parentNode.parentNode); 
    //parent of <button> element(node) is <td> and td's parent is <tr>, and we have to remove the tr - table row.
    //there is a lil difference bw node nd elements, read
    //all elements are nodes

}