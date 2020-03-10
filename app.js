const DB_USER = [
	{
		username: "SA",
		password: "12345"
	}
]


const inputUsername = document.querySelector("#username");
const inputPassword = document.querySelector("#password");
const buttonSubmit = document.querySelector("#submitForm");



buttonSubmit.addEventListener('click', () =>{
	const valueInputPassword = inputPassword.value;
	const valueInputUsername = inputUsername.value;
	//console.log(inputUsername);
	//console.log(inputUsername);

	let flag = 0;
	DB_USER.map((data) => {
		if(data.username === valueInputUsername && data.password === valueInputPassword){
			flag = 1;
		}

	})

	if(flag === 0){
		console.log("Password & Username Salah!");
	}else{
		console.log("Password Benar");
	}

	const warningMsg = document.querySelector(".Warning");

	if(flag === 0){
		warningMsg.className = "txt-danger";
	}else{
		alert("Selamat Datang Tuan/Nyonya");
	}


})

