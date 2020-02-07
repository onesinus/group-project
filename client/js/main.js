$(document).ready(function () {
    clearPage();
    checkLogin();
    getFavorites()

    $('#btn-search-event').click(function(e) {
        e.preventDefault()
        searchNBAEvent()
    })

    $("#btnRegister").on('click', function() {
        const {email, password} = getFormInput($(this));
        register(email, password);
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
            data: {email, password}
        })
        .then(res => {
            let dataLogin = JSON.stringify({email, token: 'ini harusnya token'});
            localStorage.setItem('data-login', dataLogin);
            clearForm();
            displayNotification({
                type: 'success',
                msg: 'User has been logged in!'
            });
            display('.calendar-page');
            display('.nba-event-page');
        })
        .catch(err => {
            console.log(err);
            displayNotification({
                type: 'danger',
                msg: err.responseJSON || 'something went wrong'
            });
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

    function searchNBAEvent() {
        const dateEvent = $('#date-event').val()
    
        $.ajax({
            url: `${BACKEND_URL}/api-nba/searchNBAEvent?dateEvent=${dateEvent}`,
            type: 'GET',
            success: function(data) {
                $('#search-NBA-event-list').empty()
                if(!data) {
                    $('#search-NBA-event-list').append(`
                    <div class="card w-50 mt-3">
                    <div class="card-body">
                      <h5 class="card-title">No EVENT</h5>
                      <p class="card-text">Date : null</p>
                      <p class="card-text">Time : null</p>
                      <a href="#" class="btn btn-primary">Button</a>
                    </div>
                    </div>
                    `)
                } else {
                let arrTeam = [];
                
                for(let i=0; i<data.event.length; i++) {
                    let element = data.event
    
                    var imgHomeTeam = $.ajax({
                        url: `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${element[i].strHomeTeam}`,
                        type: 'GET',
                        success: function(result) {
                        },
                    })
    
                    var imgAwayTeam = $.ajax({
                        url: `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${element[i].strAwayTeam}`,
                        type: 'GET',
                        success: function(result) {
                        },
                    })
    
                    $.when( imgHomeTeam, imgAwayTeam )
                    .done(function( dataHome, dataAway ) {
                        let timeMili = Date.parse(element[i].dateEvent + ' ' + element[i].strTime.substr(0, 8))
                        let timeStamp = String(new Date(timeMili)).substr(16, 17)
    
                        $('#search-NBA-event-list').append(`
                        <div class="card mt-2 mr-2 col-3" style="width: 18rem;">
                        <div class="row">
                            <img src="${dataHome[2].responseJSON.teams[0].strTeamLogo}" width="50" class="col-6">
                            <img src="${dataAway[2].responseJSON.teams[0].strTeamLogo}" width="50" class="col-6">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${element[i].strHomeTeam} vs ${element[i].strAwayTeam}</h5>
                            <p class="card-text">Date : ${element[i].dateEvent}</p>
                            <p class="card-text">Time : ${timeStamp} WIB</p>
                        </div>
                        <div class="card-footer bg-transparent">
                            <a href="#" class="btn btn-success">{ favorite }</a>
                        </div>
                        </div>
                        `)
                    })
                }
                }
            },
            error: function(error) {
                console.log('searchNBAEvent error :', error)
            }
        })
    }    
});
