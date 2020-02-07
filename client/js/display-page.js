function display(page) {
    clearPage();
    $(page).show();
}

function clearPage() {
    $('.register').hide();
    $('[class^=-page]').hide();    
}