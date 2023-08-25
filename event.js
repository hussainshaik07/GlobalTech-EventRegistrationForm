let formEl = document.getElementById("myForm")
formEl.addEventListener("submit", function(event) {
    event.preventDefault()
})

let nameEl = document.getElementById("name")
let nameErrEl = document.getElementById("nameErr")
nameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nameErrEl.textContent = "*Required"
    } else {
        nameErrEl.textContent = ""
    }
})
let collegeNameEl = document.getElementById("collegeName")
let collegeNameErrEl = document.getElementById("collegeNameErr")
collegeNameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        collegeNameErrEl.textContent = "*Required"
    } else {
        collegeNameErrEl.textContent = ""
    }
})
let emailIdEl = document.getElementById("emailId")
let emailIdErrEl = document.getElementById("emailIdErr")
emailIdEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailIdErrEl.textContent = "*Required"
    } else {
        emailIdErrEl.textContent = ""
    }
})
let phoneNumberEl = document.getElementById("phoneNumber")
let phoneNumberErrEl = document.getElementById("phoneNumberErr")
phoneNumberEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        phoneNumberErrEl.textContent = "*Required"
    } else {
        phoneNumberErrEl.textContent = ""
    }
})