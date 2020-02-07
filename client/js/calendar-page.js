$(document).ready(function() {
    
    // let trTemplate = `
    //         <tr>
    //             <th scope="row">1</th>
    //             <td>Libur khusus cogan</td>
    //             <td>Cogan gaboleh kecapean harus tidur</td>
    //             <td id="dateDisplay">02/07/2020</td>
    //             <td>
    //                 <button type="button" class="btn btn-primary btnBasketBall">BasketBall</button>
    //                 <button type="button" class="btn btn-success btnFootBall">FootBall</button>
    //             </td>
    //         </tr>
    // `;

    // $("#tableHoliday > tbody").append(trTemplate);

    $.ajax({
        type: "GET",
        url: `${URL_CALENDAR}&country=ID&year=2020`
    })
    .then(holidays => {
        let arrHolidays = holidays.response.holidays;
        console.log(arrHolidays);
        let trTemplate  = '';
        arrHolidays.forEach((rowHoliday, index) => {
            let {year,month,day}    = rowHoliday.date.datetime;
            day    = day < 9 ? "0"+day:day;
            month = month < 9 ? "0"+month:month;
            let formatDate            = `${year}-${month}-${day}`;
            trTemplate += `
            <tr>
                <th scope="row">${index+1}</th>
                <td>${rowHoliday.name}</td>
                <td>${rowHoliday.description}</td>
                <td>${formatDate}</td>
                <td>
                    <button type="button" class="btn btn-primary btnBasketBall" date='${formatDate}'>BasketBall</button>
                    <button type="button" class="btn btn-success btnFootBall">FootBall</button>
                </td>            
            </tr>
            `
        });
        $("#tableHoliday > tbody").append(trTemplate);
        console.log();
    })
    .catch(err => {
        displayNotification({
            type: 'danger',
            msg: err.responseJSON.meta.error_detail || 'Error load data holidays'
        });        
    });
});