
$("#formSearchFootball").on('click', function () {
    const due_date = $('#football_date').val()
    getFixtures(due_date)
});

function getFixtures(due_date) {
    $('#getFixtures').empty()
    $.ajax({
        method: 'post',
        url: `${BACKEND_URL}/footballs/fixtures`,
        headers: {
            token: localStorage.getItem('token')
        },
        data: {
            league_id: 524,
            date: due_date
        }
    })
        .done(data => {
            console.log(data)
            if (data.api.fixtures.length > 0) {
                data.api.fixtures.forEach(element => {

                    $('#getFixtures').append(`
            <div class="col-6 mt-4" style="border: 1px solid grey;">
                <div class="row">
                    <div class="col d-flex flex-column" >
                        <div class="row">
                            <div class="col">
                            <img src="${element.awayTeam.logo}" alt="..." class="img-thumbnail">
                            </div>
                            <div class="col">
                                ${element.awayTeam.team_name}
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                            <img src="${element.homeTeam.logo}" alt="..." class="img-thumbnail">
                            </div>
                            <div class="col">
                            ${element.homeTeam.team_name}
                            </div>
                        </div>
                    </div>
                    <div class="col d-flex flex-column">
                        <div>
                            <p>${moment(element.event_date).format('MMMM Do YYYY, h:mm:ss a')}</p>
                        </div>
                        <div>
                        <button type="button" onclick = "addFavorite('${element.awayTeam.team_name}', '${element.homeTeam.team_name}', '${element.awayTeam.logo}', '${element.homeTeam.logo}', '${element.event_date}')"
                        class="btn btn-danger">Favorite</button>
                        </div>
                    </div>
                </div>
            </div>
            `)
                });
            } else {
                $('#getFixtures').append(
                    `
                    <h2>no matches were held</h2>
                    `
                )
            }
        })
        .fail(err => {
            console.log(err.responseJSON)
        })
}

// 
function addFavorite(teamAway, teamHome, awayLogo, homeLogo, due_date) {
    console.log('ok')
    $.ajax({
        method: 'post',
        url: `${BACKEND_URL}/footballs/addFavorites`,
        headers: {
            token: localStorage.getItem('token')
        },
        data: {
            teamAway,
            teamHome,
            awayLogo,
            homeLogo,
            due_date
        }
    })
        .done(data => {
            console.log(data)
            getFavorites()
        })
        .fail(err => {
            console.log(err.responseJSON)
        })
}

function getFavorites() {
    $('#getFavorites').empty()
    $.ajax({
        method: 'get',
        url: `${BACKEND_URL}/favorites`,
        headers: {
            token: localStorage.getItem('token')
        }
    })
        .done(datas => {
            console.log(datas)
            // let date = el.due_date.split('T')
            datas.forEach(el => {
                $('#getFavorites').append(`
        <div class="col-6" style="border: 1px solid grey;">
            <div class="row">
                <div class="col d-flex flex-column">
                    <div class="row mt-2">
                        <div class="col">
                        <img src="${el.footbalTeamAwayLogo}" alt="..." class="img-thumbnail">
                        </div>
                        <div class="col">
                            ${el.footbalTeamHome}
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col">
                        <img src="${el.footballTeamHomeLogo}" alt="..." class="img-thumbnail">
                        </div>
                        <div class="col">
                        ${el.footballTeamAway}
                        </div>
                    </div>
                </div>
                <div class="col d-flex flex-column mt-4 justify-content-center" style="border-left: 1px solid black">
                    <div>
                        <p class="text-center">${moment(el.due_date).format('MMMM Do YYYY, h:mm:ss a')}</p>
                    </div>
                    <div class="mt-2">
                    <button onclick="deleteFavorites('${el.id}')" type="button" class="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        </div>
        `)
            })

        })
        .fail(err => {
            console.log(err.responseJSON)
        })
}

function deleteFavorites(id) {
    $.ajax({
        method: 'delete',
        url: `${BACKEND_URL}/favorites/${id}`,
        headers: {
            token: localStorage.getItem('token')
        }
    })
        .done(data => {
            getFavorites()
        })
        .fail(err => {
            console.log(err.responseJSON)
        })
}
