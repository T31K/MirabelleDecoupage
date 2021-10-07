const spinContainer = document.getElementById('container');
const spinBtn = document.getElementById('spin');
const spinWheel = document.getElementById('wheel');

const first_spin = window.localStorage.getItem('first_spin')
const second_spin = window.localStorage.getItem('second_spin')

const items = ['MYR 20', '60ml Decoupage Basic Set', '110 Background Colors', '110 ml Decoupage Glue', '110ml Background Colors', 'TO-DO Decoupage Paint',
               'Mini Soft Paper', 'MYR 10', '110ml Background Colors', '60ml Decoupage Basic Set', 'Mini Soft Paper', 'TO-DO Decoupage Paint',  ]

var random = Math.floor(Math.random()*items.length)
var random_index = random <= 1 ? 1 : random -1
var random_item = items[random_index]
$('h1#promo').text(random_item)
$('div#others').hide()
$('button#spin_again').hide()

if (first_spin && second_spin) {
  $('span#spins_left').text('0 spin')
  spinBtn.style.display = "none"
  $('#claimed').modal('toggle')
  $('.spinner').hide()
  $('div#others').show()
  $('div#main').hide()

} else {
  spinBtn.addEventListener('click', async (e) => {
    const lengthOfSpin = getComputedStyle(spinWheel).getPropertyValue('--spin-time');
    const startingDeg = Number(spinWheel.dataset.currDeg) || 500;
    const randDeg = startingDeg + Math.round(Math.random() * (3000 - 360) + 360);

    spinContainer.classList.add('is-spinning');
    spinWheel.style.transform = `rotate(-${30 * random_index + 360}deg)`;
    spinWheel.dataset.currDeg = randDeg;

    if (first_spin) {
      window.localStorage.setItem('second_spin', "claimed")
      spinBtn.style.display = "none"
      $('span#spins_left').text('0 spin')
      $('p#spin_again').hide()

    } else {
      window.localStorage.setItem('first_spin', "claimed")
      spinBtn.style.display = "none"
    }

    setTimeout(() => {
      spinContainer.classList.remove('is-spinning');
    }, lengthOfSpin);

    await sleep(lengthOfSpin)
    $('#luckydraw').modal('toggle')
    if (first_spin) {
      $('.spinner').hide()
      $('div#others').show()
      $('div#main').hide()
    } else {
      $('span#spins_left').text('1 spin')
      $('button#spin_again').show()
    }
  });

}

$('p#spin_again').on('click', function() {
  window.location.reload()
})

$(document).ready(function() {
  if (first_spin) {
    if (!second_spin) {
      $('span#spins_left').text('1 spin')
    }
  }
})

$('button#spin_again').on('click', function() {
  window.location.reload()
})

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var hide = function (elem) {
	elem.style.display = 'none';
};
