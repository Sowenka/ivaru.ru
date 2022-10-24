$(document).ready(function () {
    $("#form").on("submit", function (event) {
        event.preventDefault();
        let captcha = grecaptcha.getResponse();

        if (!captcha.length) {
            $("#recaptchaError").text("* Вы не прошли проверку капчей");
        } else {
            $("#recaptchaError").text("");

            let dataForm = $(this).serialize();

            $.ajax({
                url: "form.php",
                method: "post",
                dataType: "html",
                data: dataForm,
                success: function (data) {
                    // console.log(data);
                    alert("Ваша заявка отправлена.")
                    grecaptcha.reset();
                    location.reload();
                },
            });
        }
    });




});