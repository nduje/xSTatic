let goBackArrow = document.querySelector('.back_link');

goBackArrow.addEventListener('click', () => {
    history.back();
});


let warningMessage = document.querySelector('.warning_message');
let loginInputs = document.querySelectorAll('input');

let loginButton = document.querySelector('.login_button');

if (window.location.href.includes("login.php")) {
    loginButton.addEventListener('click', async function(e) {
        let username = loginInputs[0].value;
        warningMessage.classList.remove('selected');

        if (!username) {
            warningMessage.classList.add('selected');
            return;
        }

        let password = loginInputs[1].value;
        if (!password) { 
            warningMessage.classList.add('selected');
            return; 
        }

        let response = await fetch(
            `php/API.php?action=loginUser&username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
        );
        
        let responseData = await response.json();

        console.log(responseData);
        
        if (!responseData.success) {
            warningMessage.classList.add('selected');

            if (responseData.reason == "Incorrect username or password")
                warningMessage.innerHTML = "Incorrect username or password";

            else
                warningMessage.innerHTML = "Unknown error";
                
            return;
        }

        else {
            warningMessage.classList.remove('selected');
            warningMessage.innerHTML = "Some fields are empty";

            for (let loginInput of loginInputs) {
                loginInput.value = "";
            }

            setCookie('logged', username, 1);

            history.back();
        }
    });
}

let signupButton = document.querySelector('.signup_button');

if (window.location.href.includes("signup.php")) {
    signupButton.addEventListener('click', async function(e) {
        warningMessage.classList.remove('selected');
        warningMessage.innerHTML = "Some fields are empty";

        let username = loginInputs[0].value;
        if (!username) {
            warningMessage.classList.add('selected');
            return;
        }

        let password = loginInputs[1].value;
        if (!password) { 
            warningMessage.classList.add('selected');
            return; 
        }

        let repeatedPassword = loginInputs[2].value;
        if (!repeatedPassword) { 
            warningMessage.classList.add('selected');
            return; 
        }

        let response = await fetch(
            `php/API.php?action=signupUser&username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&repeated_password=${encodeURIComponent(repeatedPassword)}`
        );
        
        let responseData = await response.json();
        
        if (!responseData.success) {
            warningMessage.classList.add('selected');
            
            if (responseData.reason == "Passwords aren't matching")
                warningMessage.innerHTML = "Passwords aren't matching";

            else if (responseData.reason == "User already exists")
                warningMessage.innerHTML = "User already exists";

            else
                warningMessage.innerHTML = "Some fields are empty";

            return;
        }

        else {
            warningMessage.classList.remove('selected');
            warningMessage.innerHTML = "Some fields are empty";

            for (let loginInput of loginInputs) {
                loginInput.value = "";
            }

            history.back();
        }
    });
}

function setCookie(name, value, days) {
    let expires = "";

    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }

    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}