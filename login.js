function check(){
    var name = document.getElementById("name").value;
    var pwd = document.getElementById("pwd").value;
    if(name.toUpperCase() === "ADMIN" && pwd.toUpperCase() === "ADMIN")
        alert("Welcome my liege!!");
    else
        alert("Cease your actions peasant!");

}