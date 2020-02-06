function displayNotification({type, msg}) {
    $('.alert').prop('class', `alert alert-${type}`);
    $('.alert').text(msg);
    $(".alert").show();
}

function hideNotification() {
    $(".alert").hide();
}