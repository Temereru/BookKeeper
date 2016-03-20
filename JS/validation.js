document.getElementById('submit').onclick = function(e){
	document.getElementById('msg').innerHTML = "";
	e.preventDefault()
	if(/\s/.test(document.getElementById('fName').value) || document.getElementById('fName').value === "") {
		var div = document.createElement("DIV");
 		var t = document.createTextNode("Enter only your first name in the first name slot");
 		div.appendChild(t);
 		div.style.backgroundColor = 'red';
    document.getElementById('msg').appendChild(div);
	}
	if(/\s/.test(document.getElementById('lName').value) || document.getElementById('lName').value === "") {
		var div = document.createElement("DIV");
 		var t = document.createTextNode("Enter only your last name in the last name slot");
 		div.appendChild(t);
 		div.style.backgroundColor = 'red';
    document.getElementById('msg').appendChild(div);
	}
	if(/\s/.test(document.getElementById('mName').value) || document.getElementById('mName').value === "") {
		var div = document.createElement("DIV");
 		var t = document.createTextNode("Enter only your middle name in the middle name slot");
 		div.appendChild(t);
 		div.style.backgroundColor = 'red';
    document.getElementById('msg').appendChild(div);
	}
	if(document.getElementById('pass').value.length < 6) {
		var div = document.createElement("DIV");
 		var t = document.createTextNode("The Password is too short");
 		div.appendChild(t);
 		div.style.backgroundColor = 'red';
    document.getElementById('msg').appendChild(div);
	}
	if(document.getElementById('pass').value !== document.getElementById('rePass').value) {
		var div = document.createElement("DIV");
 		var t = document.createTextNode("The Passwords doesn't match");
 		div.appendChild(t);
 		div.style.backgroundColor = 'red';
    document.getElementById('msg').appendChild(div);
	}
	if(document.getElementById('phone').value.length > 15) {
		var div = document.createElement("DIV");
 		var t = document.createTextNode("Enter a valid phone number");
 		div.appendChild(t);
 		div.style.backgroundColor = 'red';
    document.getElementById('msg').appendChild(div);
	}
	if(document.getElementById('country').value !== 'USA' && document.getElementById('country').value !== 'Israel') {
		var div = document.createElement("DIV");
 		var t = document.createTextNode("Forbidden country(only Israel or the USA are allowed)");
 		div.appendChild(t);
 		div.style.backgroundColor = 'red';
    document.getElementById('msg').appendChild(div);
	}
}