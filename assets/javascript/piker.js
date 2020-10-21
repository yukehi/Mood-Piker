const redBtn = document.getElementById('red');
const orangeBtn = document.getElementById('orange');
const yellowBtn = document.getElementById('yellow');
const greenBtn = document.getElementById('green');
const darkGreenBtn = document.getElementById('dark-green');
const blueBtn = document.getElementById('blue');
const seaBtn = document.getElementById('sea');
const pinkBtn = document.getElementById('pink');

const emtionDescription = document.getElementById('emtion');
const emtionState = document.getElementById('curret-text');
function changingOuput (emtion,info,bg){
    emtionState.innerHTML = emtion;
    emtionDescription.innerHTML = info;
    document.getElementById('bg').style.backgroundColor = bg;

}

function rage() {
    changingOuput('You Are in Rage','Rage','#fb2424' );
}    

function interest() {
    changingOuput('You Are in Interest','Interest','#ff9933' );
}

function joy() {
    changingOuput(' You Are in Joy','Joy','#ffff33' );
}

function trust() {
    changingOuput(' You Are in Trust','Trust','#66ff33' );
}

function fear() {
    changingOuput('You Are in Fear','Fear','#33ff76')
}

function suprise() {
    changingOuput('You Are in suprise','suprise','#33ccff')
}

function sad() {
    changingOuput('You Are in Sad','Sad','#3333ff')
}

function bored() {
    changingOuput('You Are in Bored','Bored','#ff33ff')
}






redBtn.addEventListener('click', rage);
orangeBtn.addEventListener('click',interest);
yellowBtn.addEventListener('click',joy);
greenBtn.addEventListener('click',trust);
darkGreenBtn.addEventListener('click',fear);
blueBtn.addEventListener('click',suprise);
seaBtn.addEventListener('click',sad);
pinkBtn.addEventListener('click',interest);