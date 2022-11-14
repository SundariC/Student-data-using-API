var selectedRow = null;

//show Alerts 
function showAlert(message, className){
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector(".alert").remove(), 3000);
}

//clear all fields
function clearFields(){
    document.querySelector("#StudentName").value = "";
    document.querySelector("#StudentAge").value = "";
    document.querySelector("#StudentRollno").value = "";
    document.querySelector("#Destination").value = "";
}

//Add data
document.querySelector("#student-form").addEventListener("submit", (e) => {
     e.preventDefault();

     //Get form values
     const StudentName = document.querySelector("#StudentName").value;
     const StudentAge = document.querySelector("#StudentAge").value;
     const StudentRollno = document.querySelector("#StudentRollno").value;
     const Destination = document.querySelector("#Destination").value;

     //validate
     if(StudentName == "" || StudentAge == "" || StudentRollno == "" || Destination == ""){
     alert("Please fill in all fields", "danger");
     }
     else{
        if(selectedRow == null){
        const list = document.querySelector("#student-list");
        const row = document.createElement("tr");

        row.innerHTML = `
        <td>${StudentName}</td>
        <td>${StudentAge}</td>
        <td>${StudentRollno}</td>
        <td>${Destination}</td>
        <td>
        <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
        <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
        </td>
        `;
        list.appendChild(row);
        selectedRow = null;
        alert("Student Added", "success");
        }
        else{
            selectedRow.children[0].textContent = StudentName;
            selectedRow.children[1].textContent = StudentAge;
            selectedRow.children[2].textContent = StudentRollno;
            selectedRow.children[3].textContent = Destination;
            selectedRow = null;
            alert("Student Info Edited", "info");
        }
        clearFields();
     }
});

//Edit Data
   document.querySelector("#student-list").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("edit")){
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#StudentName").value = selectedRow.children[0].textContent;
        document.querySelector("#StudentAge").value = selectedRow.children[1].textContent;
        document.querySelector("#StudentRollno").value = selectedRow.children[2].textContent;
        document.querySelector("#Destination").value = selectedRow.children[3].textContent;
    }

   });

//Delete data

document.querySelector("#student-list").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        alert("Student data deleted", "danger");
    }
});