
var msg = document.getElementById("msg-alert");
msg.style.display = "none"
function sendSubmit(e){
    e.preventDefault();
    var name = document.getElementById("name").value;
    var emailaddress = document.getElementById("emailaddress").value;
    var phone = document.getElementById("phone").value;
    var tourselection = document.getElementById("tourselection").value;
    var quantity = document.getElementById("quantity").value;
    var dateselection = document.getElementById("dateselection").value;
    var timeselect = document.getElementById("timeselect").value;
    
    if(name == null || emailaddress == null || tourselection == null || phone == null || quantity == null || dateselection == null || timeselect == null){
        msg.style.display = "block";
    }

    var http = new XMLHttpRequest();
    var url = '';
    var params = new Object();
    params.name = name;
    params.emailaddress = emailaddress;
    params.tourselection = tourselection;
    params.quantity = quantity;
    params.dateselection = dateselection;
    params.phone = phone;
    params.timeselect = timeselect;
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


