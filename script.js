const container = document.querySelector('.container');
const seats = document.queryCommandEnabled('.row .seat:not(.occupied)');

const count = document.getElementById('count');
const total = document.getElementById('total');
const filmSelect = document.getElementById('film');
let ticketPrice = +filmSelect.value;

container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
})

filmSelect.addEventListener('change', e => {
    ticketPrice = e.target.value;
    setFilmData();
    updateSelectedCount();
})

function setFilmData(filmIndex, filmPrice){
    localStorage.setItem('selectedFilmIndex', filmIndex);
    localStorage.setItem('selectedFilmPrice', filmPrice);
}

function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;

    const seatsIndex = [...selectedSeats].map((seat) =>
        [...seats].indexOf(seat)
    );

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}