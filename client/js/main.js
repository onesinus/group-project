const url ="http://localhost:3000"

$(document).ready(function() {
    $('#btn-search-event').click(function(e) {
        e.preventDefault()
        searchNBAEvent()
    })
})

function searchNBAEvent() {
    const dateEvent = $('#date-event').val()

    $.ajax({
        url: `${url}/api-nba/searchNBAEvent?dateEvent=${dateEvent}`,
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