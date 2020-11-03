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
    updateSelectedCount();
})

function updateSelectedCount() {
    const selectedSeatsCount = document.querySelectorAll('.row .seat.selected').length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}