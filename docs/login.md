<div class="login">
    <h1>Login</h1>
    <form name="login" onsubmit="return submitForm()">
        <label for="email">Email:</label>
        <input type="text" id="email" name="email" required>
        <span id="email-warning" style="display:none; color:red;">Неверный email адрес.</span>
        <input type="submit" value="Login">
    </form>
</div>

<script>
function submitForm() {
    const email = document.forms["login"]["email"].value;
    if (tryLogin(email)) {
        window.location.pathname = homePath;
        return false;
    } else {
        emailWarning = document.getElementById("email-warning");
        emailWarning.style.display = "inline";
        // Add click event listener to document to hide warning message
        document.addEventListener("click", function hideWarning() {
          emailWarning.style.display = "none";
          document.removeEventListener("click", hideWarning);
        });
        return false
  }
}
</script>

<style>
.login {
	margin: 10% auto;
	padding: 20px;
	max-width: 400px;
	border-radius: 5px;
	box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
}

h1 {
	text-align: center;
	margin-bottom: 20px;
}

form {
	display: flex;
	flex-direction: column;
}

label {
	font-weight: bold;
	margin-bottom: 5px;
}

input[type="text"],
input[type="password"] {
color: #222;
	padding: 10px;
	border-radius: 5px;
	margin-bottom: 20px;
	border: 1px solid hsl(229 16% 21% / 1);
}

input[type="submit"] {
	background-color: #4CAF50;
	border: none;
	padding: 10px;
	border-radius: 5px;
	cursor: pointer;
}

input[type="submit"]:hover {
	background-color: #3e8e41;
}

</style>
