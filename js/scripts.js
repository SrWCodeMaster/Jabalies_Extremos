document.addEventListener('DOMContentLoaded', function() {
    function updateCountdown() {
        const eventDate = new Date();
        eventDate.setDate(eventDate.getDate() + 9); 

        const now = new Date();
        const timeDifference = eventDate - now;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById('days').innerHTML = `<span>Días</span>${days}`;
        document.getElementById('hours').innerHTML = `<span>Horas</span>${hours}`;
        document.getElementById('minutes').innerHTML = `<span>Minutos</span>${minutes}`;
        document.getElementById('seconds').innerHTML = `<span>Segundos</span>${seconds}`;

        if (timeDifference < 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').innerHTML = "¡El evento ha comenzado!";
        }
    }

    updateCountdown(); 
    const countdownInterval = setInterval(updateCountdown, 1000); 
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

  
        alert('Formulario enviado con éxito');


        form.reset();
    });
});
