function validateForm() {
    let x = document.form["RegisterForm"]["fname"].value;
    if (x=="") {
        document.getElementById("validate").innerHTML = "Họ và tên không được để trống";
        return;
    }
}

var form=document.getElementById("RegisterForm");
function handleForm(event) {
    
}