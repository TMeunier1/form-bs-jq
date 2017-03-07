$(document).ready(function() {
    var form = $("#formulaire");
    var input = $("input");
    var password = $("#password");
    var confirm = $("#confirm");
    var checkPassword = $(".pw");
    var sending = $("#send");
    var clear = $("#clear")

    input.keyup(function() {
        var min = 5;
        var max = 16;
        var len = $(this).val().length;

        if (len < min || len > max) {
            $(this).css("border", "1px solid red");
        } else {
            $(this).css("border", "1px solid green");
        }
    })

    checkPassword.keyup(function() {
        var min = 5;
        var len = $(this).val().length;

        if (password.val() != confirm.val() || len < min) {
            checkPassword.css("border", "1px solid red");
        } else {
            checkPassword.css("border", "1px solid green");
        }
    })

    sending.click(function() {
        input.each(function() {
            if ($(this).val() == "") {
                $(this).css("border", "1px solid red");
            }
        })
        if (input.val() == "") {
            alert("Il manque des champs");
        }
        return false;
    })

    clear.click(function() {
        input.each(function() {
            $(this).css("border", "none");
        })
    })
});
