function login() {
	let user = document.getElementById("username").value;
	let pass = document.getElementById("password").value;
	if (user === "admin" && pass === "1234") {
		document.getElementById("error").textContent = "";
		
		document.getElementById("username").style.display = "none";
		document.getElementById("password").style.display = "none";
		document.getElementById("loginBtn").style.display = "none";
		
		
		document.getElementById("content").style.display = "block";
	}
	else {
		document.getElementById("error").textContent = "password or name are not true";
	}
	}
function addtask() {
	let id = document.getElementById('id').value;
	if (id != "") {
		let li = document.createElement("li");
		li.textContent = id;
		let btn = document.createElement("button");
		btn.textContent = "delete";
		btn.onclick = function () {
		li.remove();
		};
		li.appendChild(btn);
		document.getElementById("mylist").appendChild(li);
		document.getElementById("id").value = "";
		}
		}