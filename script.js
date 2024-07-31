// this code is to alert the user to confirm that the form was sent.
document.getElementById("contactForm").addEventListener("submit", function(event){
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var message = document.getElementById("message").value;
	
	if (name != "" && email != "" && message != "") {
		alert("Form submited successfully!");
	}
});