const spinContainer = document.getElementById('container');
const spinBtn = document.getElementById('spin');
const spinWheel = document.getElementById('wheel');


const token = window.localStorage.getItem('spinner')
if (!token) {
  spinBtn.addEventListener('click', async (e) => {
    const lengthOfSpin = getComputedStyle(spinWheel).getPropertyValue('--spin-time');
    const startingDeg = Number(spinWheel.dataset.currDeg) || 500;
    const randDeg = startingDeg + Math.round(Math.random() * (3000 - 360) + 360);
    spinContainer.classList.add('is-spinning');
    spinWheel.style.transform = `rotate(${randDeg}deg)`;

    spinWheel.dataset.currDeg = randDeg;
    spinBtn.style.display = "none"
    window.localStorage.setItem('spinner', "claimed")
    setTimeout(() => {
      spinContainer.classList.remove('is-spinning');
    }, lengthOfSpin);

    $('h4#code').text(generateID(6))
    await sleep(lengthOfSpin)
    $('#luckydraw').modal('toggle')
  });
} else {
  spinBtn.style.display = "none"
  $('#claimed').modal('toggle')
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var hide = function (elem) {
	elem.style.display = 'none';
};

function generateID(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() *
 charactersLength));
      if (i === 2) {
        result += " - "
      }
   }
   return result
}
