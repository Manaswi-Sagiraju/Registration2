function submitForm() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let grade = document.getElementById("grade").value;
    let parent = document.getElementById("parent").value;
    let contact = document.getElementById("contact").value;
    
    if (name && age && grade && parent && contact) {
        document.getElementById("r_name").innerText = name;
        document.getElementById("r_age").innerText = age;
        document.getElementById("r_grade").innerText = grade;
        document.getElementById("r_parent").innerText = parent;
        document.getElementById("r_contact").innerText = contact;
        document.getElementById("receipt").style.display = "block";
    } else {
        alert("Please fill out all fields before registering.");
    }
}
