		function valida() {
				email = document.login.email.value;
				senha = document.login.senha.value;

				erro = false;
				if (email == "") {
					erro=true;
					document.getElementById("erroEmail").innerHTML = "\nPreencha o email!";
					document.getElementById('email').style.backgroundColor = '#FAA8A8';
					document.getElementById('email').style.border = '1px solid red';
				} else {
					document.getElementById('email').style.backgroundColor = '#d8d8d8';
					document.getElementById('email').style.border = '1px solid #789d9b';
					document.getElementById("erroEmail").innerHTML = "";
				}
				if (senha == "") {
					erro=true;
					document.getElementById("erroSenha").innerHTML = "\nPreencha a senha!";
					document.getElementById('senha').style.backgroundColor = '#FAA8A8';
					document.getElementById('senha').style.border = '1px solid red';
				} else {
					document.getElementById('senha').style.backgroundColor = '#d8d8d8';
					document.getElementById('senha').style.border = '1px solid #789d9b';
					document.getElementById("erroSenha").innerHTML = "";
				}
				if (!erro) {
					return true;
				} else {
					return false;
				}
		}