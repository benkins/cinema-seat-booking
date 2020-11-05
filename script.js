const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const filmSelect = document.getElementById('film');

populateUI();

let ticketPrice = +filmSelect.value;

container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
})

filmSelect.addEventListener('change', e => {
    ticketPrice = e.target.value;
    setFilmData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
})

function setFilmData(filmIndex, filmPrice) {
    localStorage.setItem('selectedFilmIndex', filmIndex);
    localStorage.setItem('selectedFilmPrice', filmPrice);
}

function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        });
    }

    const selectedFilmIndex = localStorage.getItem('selectedFilmIndex');
    if (selectedFilmIndex != null) {
        filmSelect.selectedIndex = selectedFilmIndex;
    }
}

updateSelectedCount();