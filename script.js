//your JS code here. If required.
function validateform() {
	
var firstname=document.getElementById("fname").value;
var lastname=document.getElementById("lname").value;
var phonenum=document.getElementById("phone").value;
var emailid=document.getElementById("email").value;

var alertMsg="First Name: "+firstname+"Last Name: "+lastname+"Phone Number: "+phonenum+"Email Id: "+emailid;
alert(alertMsg);
}

