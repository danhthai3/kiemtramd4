function getAll() {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
        },
        url: "http://localhost:8080/api/students",
        success: function (data) {
            show(data);
        },
        error: function (err) {
            console.log(err)
        }
    });

}

function displayIndex() {
    getAll()
}


function show(arr) {
    let str = "";
    let count = 0;
    for (const h of arr) {
        str += ` <tr>
              <td>${++count}</td>
              <td>${h.name}</td>
              <td>${h.dateOfBirth}</td>
              <td>${h.address}</td>
              <td>${h.phoneNumber}</td>
              <td>${h.email}</td>   
              <td>${h.classroom.name}</td>
              <td><button type="button" class="btn btn-warning" onclick="updateDisplayStudent(${h.id})" data-toggle="modal" data-target="#modalEdit" >Edit</button></td>
              <td><button type="button" class="btn btn-danger"  onclick="deleteStudent(${h.id})">Delete</button></td>
             </tr>`

    }
    document.getElementById("show").innerHTML = str;
}

function showClass() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/classrooms",
        success: function (data) {
            let content = "";
            for (let i = 0; i < data.length; i++) {
                content += `<option value=${data[i].id}>${data[i].name}</option>`;
            }
            document.getElementById("showClass").innerHTML = content;
        }
    })
}

function save() {
    let newStudent;
    let name = $("#name").val()
    let dateOfBirth = $("#dateOfBirth").val()
    let address = $("#address").val()
    let phoneNumber = $("#phoneNumber").val()
    let email = $("#email").val()
    let classroom = $("#showClass").val()
    let id = +localStorage.getItem("idUpdate")
    if (id !== -1) {
        newStudent = {
            id: id,
            name: name,
            dateOfBirth: dateOfBirth,
            address: address,
            phoneNumber: phoneNumber,
            email: email,
            classroom: {
                id: classroom
            }
        };

    } else {
        newStudent = {
            name: name,
            dateOfBirth: dateOfBirth,
            address: address,
            phoneNumber: phoneNumber,
            email: email,
            classroom: {
                id: classroom
            }
        }

    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        url: "http://localhost:8080/api/students",
        data: JSON.stringify(newStudent),
        success: function () {
            alert("ok")
            localStorage.setItem("idUpdate", "-1")
        }

    });
    document.getElementById("form").reset()
//chặn sự kiện mặc định của thẻ
    event.preventDefault();
}


function deleteStudent(id) {
    if (confirm("Are you sure?")) {
        $.ajax({
            type: "DELETE",
            url: `http://localhost:8080/api/students/${id}`,
            success: function () {
                alert("delete ok")
                window.location.href = "index.html";
            }
        });
    }
}


function updateDisplayStudent(id) {
    localStorage.setItem("idUpdate", id)
    window.location.href = "edit.html"
}
function updateDisplay(){
    let id = localStorage.getItem("idUpdate");
        $.ajax({
            type: "GET",
            url: `http://localhost:8080/api/students/${id}`,
            success: function (student) {
                $("#name").val(`${student.name}`)
                $("#dateOfBirth").val(`${student.dateOfBirth}`)
                $("#address").val(`${student.address}`)
                $("#phoneNumber").val(`${student.phoneNumber}`)
                $("#email").val(`${student.email}`)
                $("#showClass").val(`${student.classroom}`)
            }
        })
}

function search() {
    let search = $("#search").val()
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/students/search/" + search,
        success: function (data) {
            show(data)

        }
    })
    //chặn sự kiện mặc định của thẻ
    event.preventDefault();
}