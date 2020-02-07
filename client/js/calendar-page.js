$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: `${URL_CALENDAR}&country=ID&year=2020`
    })
    .then(holidays => {
        let arrHolidays = holidays.response.holidays;
        console.log(arrHolidays);
        let trTemplate  = '';
        arrHolidays.forEach((rowHoliday, index) => {
            trTemplate += `
            <tr>
                <th scope="row">${index+1}</th>
                <td>${rowHoliday.name}</td>
                <td>${rowHoliday.description}</td>
                <td>${rowHoliday.date.iso}</td>
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