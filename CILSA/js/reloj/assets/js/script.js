(function(){
    var refreshTime = function(){
        var date = new Date(),
            hours = date.getHours(),
            amPm,
            minutes = date.getMinutes(),
            seconds = date.getSeconds(),
            dayWeek = date.getDay(),
            day = date.getDate(),
            month = date.getMonth(),
            year = date.getFullYear();

        var pHour = document.getElementById('hours'),
        pAmPm = document.getElementById('amPm'),
        pMinutes = document.getElementById('minutes'),
        pSeconds = document.getElementById('seconds'),
        pDayWeek = document.getElementById('dayWeek'),
        pDay = document.getElementById('day'),
        pMonth = document.getElementById('month'),
        pYear = document.getElementById('year');

        var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        pDayWeek.textContent = week[dayWeek];

        pDay.textContent = day;

        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        pMonth.textContent = months[month];

        pYear.textContent = year;

        if (hours >= 12) {
            hours = hours - 12;
            amPm = 'PM';
        } else {
            amPm = 'AM';
        }

        if (hours < 10){
            hours = "0" + hours;
        }

        if (hours == 0) {
            hours = 12
        };

        pHour.textContent = hours;
        pAmPm.textContent = amPm;


        if (minutes < 10){
            minutes = "0" + minutes;
        }

        if (seconds < 10){
            seconds = "0" + seconds;
        }

        pMinutes.textContent = minutes;
        pSeconds.textContent = seconds;

    };

    refreshTime();
    var interval = setInterval(refreshTime, 1000);
}())


const buttonSwitch = document.querySelector('#switch');

buttonSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    buttonSwitch.classList.toggle('active');
})