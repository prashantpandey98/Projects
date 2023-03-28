
let form=document.getElementById("myForm");
let amount=document.getElementById("amount");
let description=document.getElementById("description");
let options=document.getElementById("options");
let btn=document.getElementById("add");
let list=document.getElementById("list");

form.addEventListener("submit", addExpenses);

function addExpenses(e){
    e.preventDefault();

    //adding the data to li
    let li=document.createElement("li");
    li.className="expenses";
    var userData=document.createTextNode(`${amount.value}-${options.value}-${description.value}`);
    li.appendChild(userData);

    //adding buttons
    let dltBtn=document.createElement("button");
    dltBtn.className="deleteData";
    dltBtn.appendChild(document.createTextNode("Delete Exepenses"));
    li.appendChild(dltBtn);
    let editBtn=document.createElement("button");
    editBtn.className="editData";
    editBtn.appendChild(document.createTextNode("Edit Expenses"));
    li.appendChild(editBtn);

    //append li to ul
    list.appendChild(li);

    //Storing info in local storage making the description as unique key
let expenseAmount=amount.value;
let expenseCategory=options.value;
let expenseDescription=description.value;
    let input={
        expenseAmount,
        expenseCategory,
        expenseDescription
    }
localStorage.setItem(input.expenseDescription, JSON.stringify(input));

//to delete data from screen and local storage
var parentEle=document.getElementById("list");
dltBtn.onclick=()=>{
    localStorage.removeItem(input.expenseDescription);
    parentEle.removeChild(li);
}

//to edit data 
var parentEle=document.getElementById("list");
editBtn.onclick=()=>{
    amount.value=input.expenseAmount;
    description.value=input.expenseDescription;
    options.value=input.expenseCategory;
    localStorage.removeItem(input.expenseDescription);
    parentEle.removeChild(li);
}

//to empty the fields again after data has been submitted
amount.value="";
description.value="";
}