function verifyCaptcha() {
    var userInput = prompt("Please solve the following math problem: " + generateCaptchaCode());

    if (userInput !== null && userInput !== "") {
        if (validateCaptcha(userInput)) {
            alert("Captcha verification successful! The download will start.");
            startDownload();
        } else {
            alert("Captcha verification failed. Please try again.");
        }
    } else {
        alert("Captcha verification failed. Please try again.");
    }
}

function generateCaptchaCode() {
    var num1 = Math.floor(Math.random() * 10);
    var num2 = Math.floor(Math.random() * 10);
    var operator = Math.random() < 0.5 ? "+" : "-";
    var result;

    if (operator === "+") {
        result = num1 + num2;
    } else {
        result = num1 - num2;
    }

    return num1 + " " + operator + " " + num2 + " = ?";
}

function validateCaptcha(userInput) {
    var captchaCode = generateCaptchaCode();
    var expectedAnswer = eval(captchaCode.replace("?", ""));

    return userInput == expectedAnswer;
}

function startDownload() {
    // Paste the appropriate code here to start the download
    window.location.href = "./ebook/Reading_Example.pdf";
}
