function test() {
    var username = document.getElementById("user").value;
    var password = document.getElementById("password").value;
    if (username=="wdwcmc"&&password=="wdwcmc"){
        location.href="demo.html";
    }
    else{
        alert("用户名或密码错误");
    }
}