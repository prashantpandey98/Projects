let form = document.querySelector("form");
form.addEventListener("submit", sub);

function sub(e) {
    e.preventDefault();
    let price = e.target.price.value;
    let dish = e.target.dish.value;
    let tables = e.target.tables.value;
    const obj = {
        price,
        dish,
        tables
    }
    if (price === "" || dish === "" || tables === "") {
        alert("Fill all the fields.");
    }
    else {
        axios.post("https://crudcrud.com/api/90593114b9024eefa3a77f4243081342/Orders", obj)
            .then((res) => {
                console.log(res.data);
                alert("Order has been placed!");
                window.location.reload()
            }).catch((err) => {
                alert("Re-enter your order");
            })
    }
}

function showOrder(data) {
    let price = document.getElementById("price").value;
    let dish = document.getElementById("dish").value;
    let tables = document.getElementById("tables").value;
    let ul1 = document.getElementById("table1");
    let ul2 = document.getElementById("table2");
    let ul3 = document.getElementById("table3");

    let li = document.createElement("li");
    li.innerHTML = `${data.price}-${data.tables}-${data.dish}`;
    let del = document.createElement("button");
    del.onclick = (id) => {
        deleteOrder(data._id);
    }
    del.innerText = "Delete Order";
    li.append(del);

    if (data.tables === "Table1") {
        ul1.appendChild(li);
    }
    else if (data.tables === "Table2") {
        ul2.appendChild(li);
    }
    else if (data.tables === "Table3") {
        ul3.appendChild(li);
    }
}

window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/90593114b9024eefa3a77f4243081342/Orders")
        .then((response) => {
            for (let i = 0; i < response.data.length; i++) {
                showOrder(response.data[i]);
                console.log(response.data[i])
            }
        }).catch((err) => {
            console.log("Error:", err);
        })
})

function deleteOrder(id){
console.log(id);
axios.delete(`https://crudcrud.com/api/90593114b9024eefa3a77f4243081342/Orders/${id}`)
.then(()=>{
    confirm("Delete Order?");
    window.location.reload()
}).catch((err)=>{
    console,log("Error", err)
})
}
