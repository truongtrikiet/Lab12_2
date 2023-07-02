function login() {
    var username = document.getElementById('inputEmail').value;
    var password = document.getElementById('inputPassword').value;

    if (username == 'inputEmail' && password == 'inputPassword') {
        alert("Login Successful!");
    } else {
        alert("Login Failed! Please try again.");
    }
}


function register() {
    var username = document.getElementById('inputEmail').value;
    var password = document.getElementById('inputPassword').value;
    var re_password = document.getElementById('re_Password').value;

    //check email is valid
    if (!isValidEmail(username)) {
        alert('Please enter a valid email address!');
        return;
    }

    //check the passwords matching
    if (password != re_password) {
        alert('The passwords dont match. Please try again!');
        return;
    }

    //Registration successful
    alert('Registration successful');
}