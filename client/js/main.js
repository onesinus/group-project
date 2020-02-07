$(document).ready(function () {
    clearPage();
    checkLogin();
    getFavorites()

    $("#btnRegister").on('click', function () {
        const { email, password } = getFormInput($(this));
        register(email, passwordWarning);
    });

    $("#btnLogin").on('click', function () {
        const { email, password } = getFormInput($(this));
        login(email, password);
    });


    function register(email, password) {
        $.ajax({
            type: 'POST',
            url: `${BACKEND_URL}/users/register`,
            data: { email, password }
        })
            .then(res => {
                clearForm();
                displayNotification({
                    type: 'success',
                    msg: 'User has been registered!'
                });
            })
            .catch(err => {
                displayNotification({
                    type: 'danger',
                    msg: err.responseJSON
                });
            })
    }

    function login(email, password) {
        $.ajax({
            type: 'POST',
            url: `${BACKEND_URL}/users/login`,
            data: { email, password }
        })
            .then(res => {
                let dataLogin = JSON.stringify({ email, token: 'ini harusnya token' });
                localStorage.setItem('data-login', dataLogin);
                clearForm()
                displayNotification({
                    type: 'success',
                    msg: 'User has been logged in!'
                });
                // display('.calendar-page');
                display('#football')
            })
            .catch(err => {
                console.log(err);
                displayNotification({
                    type: 'danger',
                    msg: err.responseJSON || 'something went wrong'
                });
            })
    }
});
