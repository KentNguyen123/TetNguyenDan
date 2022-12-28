const form=document.getElementById("formlogin");
form.onsubmit=function(e) {
    e.preventDefault();
    let a= document.getElementById("Email").value;
    let b =document.getElementById("Pass").value;

    if (a!="912khangnguyen@gmail.com") {
        document.getElementById("validate-text").innerHTML="Email hiện không tồn tại"
    } else {
        document.getElementById("validate-text").innerHTML="Email chính xác"

        if (b=="1234567") {
            document.getElementById("validate-text").innerHTML="Password chính xác"
            window.location.href="./home.html"
        } else {
            document.getElementById("validate-text").innerHTML="Vui lòng nhập lại password"
        }
    }
}
