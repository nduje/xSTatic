<!DOCTYPE html>

<html>
    <head>
        <meta charset="utf-8">
        <title>xSTatic</title>
        <meta name="viewport" content="width=device-width initial-scale=1">
        <link rel="stylesheet" href="styles/style.css">
        <link rel="stylesheet" href="styles/style_login.css">
    </head>

    <body>
        <a class="back_link"><img src="images/arrow.png" alt="back_arrow" class="back_arrow"></a>
    
        <div class="main">
    	    <div class="login_window">
                <div class="login_content">
                    <label class="login_title">LOGIN</label>
                    <label class="warning_message">Some fields are empty</label>
                    <label for="username" class="input_label">Username:</label>
                    <input type="text" id="username" name="username">
                    <label for="password" class="input_label">Password:</label>
                    <input type="password" id="password" name="password">
                    <input type="button" class="login_button" value="LOG IN">
                    <a href="signup.php" class="signup_link">SIGN UP</a>
                </div>
            </div>
        </div>

        <script src="scripts/login.js"></script>
    </body>
</html>