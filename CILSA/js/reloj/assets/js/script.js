(function(){
    var refreshTime = function(){

// Toma los valores para generar la fecha

        var date = new Date(),
            hours = date.getHours(),
            amPm,
            minutes = date.getMinutes(),
            seconds = date.getSeconds(),
            dayWeek = date.getDay(),
            day = date.getDate(),
            month = date.getMonth(),
            year = date.getFullYear();

// Generamos las variables de cada dato a mostrar en el reloj

        var pHour = document.getElementById('hours'),
        pAmPm = document.getElementById('amPm'),
        pMinutes = document.getElementById('minutes'),
        pSeconds = document.getElementById('seconds'),
        pDayWeek = document.getElementById('dayWeek'),
        pDay = document.getElementById('day'),
        pMonth = document.getElementById('month'),
        pYear = document.getElementById('year');

// Creamos el array con todos los días de la semana y luego el array con los meses del año

        var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        pDayWeek.textContent = week[dayWeek];

        pDay.textContent = day;

        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        pMonth.textContent = months[month];

        pYear.textContent = year;

// Generamos un condicional que mantiene las horas en formato 12 HRS para el uso de AM/PM

        if (hours >= 12) {
            hours = hours - 12;
            amPm = 'PM';
        } else {
            amPm = 'AM';
        }

// Creamos un condicional que iguala la hora 00 a 12, respetando el formato 12 HRS

        if (hours == 0) {
            hours = 12
        };

// Generamos un condicional que le agrega un 0 a la izquierda a las horas, minutos y segundos, respectivamente, si éstas son de 1 sólo dígito, manteniendo el formato esperado

        if (hours < 10){
            hours = "0" + hours;
        }

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

// La siguiente variable hace que corran los segundos en el reloj

    refreshTime();
    var interval = setInterval(refreshTime, 1000);
}())

// El siguiente evento se encarga de la función de light/dark mode, mediante un click se realiza el cambio de un modo a otro

const buttonSwitch = document.querySelector('#switch');

buttonSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    buttonSwitch.classList.toggle('active');
})