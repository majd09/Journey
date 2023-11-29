
var msg = document.getElementById("msg-alert");
msg.style.display = "none"
function sendSubmit(e){
    e.preventDefault();
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var messg = document.getElementById("message").value;
    alert(fname)
    if(fname == null || lname == null || email == null || phone == null || messg == null){
        msg.style.display = "block";
    }

    var http = new XMLHttpRequest();
    var url = '';
    var params = new Object();
    params.fname = fname;
    params.lname = lname;
    params.email = email;
    params.phone = phone;
    params.messg = messg;
    http.open('POST', url, true);

    //Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            alert("Message Sent ");
        }
    }
    http.send(params);
}


