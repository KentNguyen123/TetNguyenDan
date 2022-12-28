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

function Dangnhap() {
    let a= document.getElementById("Email").value;
    let b =document.getElementById("Pass").value;

    if (a!="912khangnguyen@gmail.com") {
        document.getElementById("result").innerHTML="Email hiện không tồn tại"
    } else {
        document.getElementById("result").innerHTML="Email chính xác"

        if (b=="1234567") {
            document.getElementById("result").innerHTML="Password chính xác"
        } else {
            document.getElementById("result").innerHTML="Vui lòng nhập lại password"
            return;
        }
    }
}