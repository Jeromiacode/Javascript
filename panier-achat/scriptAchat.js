chaise_btn.addEventListener("click", ajoutChaise);
table_btn.addEventListener("click", ajoutTable);
meuble_btn.addEventListener("click", ajoutMeuble);

function ajoutChaise() {
    const chaise = parseInt(document.getElementById("chaise").value);
    const list = document.createTextNode(chaise);
    const li = document.createElement("li")
    li.appendChild(list);
    li.setAttribute("class", "chaise");
    document.querySelector("#list").appendChild(li);
    let newValue = parseInt(document.getElementById("total").value);
    document.getElementById("total").value = newValue + chaise*1;
}
function ajoutTable() {
    const table = document.getElementById("table").value;
    const list = document.createTextNode(table);
    const li = document.createElement("li");
    li.setAttribute("class", "table");
    li.appendChild(list);
    document.querySelector("#list").appendChild(li);
    let newValue = parseInt(document.getElementById("total").value);
    document.getElementById("total").value = newValue + table*1;
}
function ajoutMeuble() {
    const li = document.createElement("li")
    const meuble = document.getElementById("meuble").value;
    const list = document.createTextNode(meuble);
    li.setAttribute("class", "meuble");
    li.appendChild(list);
    document.querySelector("#list").appendChild(li);
    let newValue = parseInt(document.getElementById("total").value);
    document.getElementById("total").value = newValue + meuble*1;
}
