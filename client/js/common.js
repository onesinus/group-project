function clearForm() {
    $('.email').val("");
    $('.password').val("");
    setTimeout(() => {
        $('.alert').hide();
    }, 3000);
}

function getFormInput(elem) {
    let $form = $(elem).parent().parent();
    let email = $form.find('.email').val();
    let password = $form.find('.password').val();
    return { email, password };
}

function checkLogin() {
    if (localStorage.getItem("data-login")) {
        // display('.calendar-page');
        display('#football')
    } else {
        display('.register');
    }
}