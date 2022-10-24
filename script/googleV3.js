grecaptcha.ready(function () {
        grecaptcha
                .execute("6LcjtYgiAAAAAKIjGyzLGpBD5_PAj9IRK1iPWLRZ", {
                        action: "homepage",
                })
                .then(function (token) {
                        var recaptchaResponse = document.getElementById("recaptchaResponse");
                        recaptchaResponse.value = token;
                        console.log(token);
                });
});
