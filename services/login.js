
var msg = document.getElementById("msg-alert");
msg.style.display = "none"
function sendSubmit(e){
    e.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if(username == null || password == null){
        alert("all filds are required")
    }

    var http = new XMLHttpRequest();
    var url = '';
    var params = new Object();
    params.username = username;
    params.password = password;
    http.open('POST', url, true);

    //Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            window.location.replace("/admin/admin.html");
        }else{
            alert("Incorrect Username/Password Combination")
        }
    }
    http.send(params);
}


