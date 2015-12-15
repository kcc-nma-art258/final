// Create a variable for the array (list) of pads
var pads = document.querySelectorAll('.pad-1, .pad-2, .pad-3, .pad-4, .pad-5, .pad-6, .pad-7, .pad-8, .pad-9, .pad-10, .pad-11, .pad-12, .pad-13, .pad-14, .pad-15, .pad-16');

// Create a variable with the string path of
// the folder containing the audio files
var path = 'audio/';

// Create an array of audio file samples
var samples = [
  'clap_1.mp3',
  'clap_2.mp3',
  'crash_1.mp3',
  'crash_2.mp3',
  'fx_1.mp3',
  'hat_1.mp3',
  'hat_2.mp3',
  'kick_1.mp3',
  'kick_2.mp3',
  'kick_3.mp3',
  'perc_1.mp3',
  'perc_2.mp3',
  'perc_3.mp3',
  'snare_1.mp3',
  'snare_2.mp3',
  'snare_3.mp3',
];

// Create function to add audio samples to listener
function addSamplesToListener(i){

  // Create listener for pad button click event
  function padListener(){
    var audio = new Audio(path + samples[i]);
    audio.play();
  }

  pads[i].addEventListener('click', padListener);
}

// Loop over pads and add samples to each handler
for (var i = 0; i < pads.length; i++){
  addSamplesToListener(i);
}

// Create a object with
// keyboard keys as properties
// and Unicode keycode values
var keyCode = {
  q: 113,
  w: 119,
  e: 101,
  r: 114,
  a: 97,
  s: 115,
  d: 100,
  f: 102,
  u: 117,
  i: 105,
  o: 111,
  p: 112,
  h: 104,
  j: 106,
  k: 107,
  l: 108,
}

window.addEventListener('keypress', keyPressListener);

// keypress listener to find keycode values
function keyPressListener(event) {
  console.log(event.keyCode);

  if (event.keyCode === keyCode.q){
      console.log ('Pressed Q key');
      pads[0].focus();
      pads[0].click();
  } else if (event.keyCode === keyCode.w){
      console.log ('Pressed W key');
      pads[1].focus();
      pads[1].click();
  } else if (event.keyCode === keyCode.e){
      console.log ('Pressed E key');
      pads[2].focus();
      pads[2].click();
  } else if (event.keyCode === keyCode.r){
      console.log ('Pressed R key');
      pads[3].focus();
      pads[3].click();
  } else if (event.keyCode === keyCode.a){
      console.log ('Pressed A key');
      pads[4].focus();
      pads[4].click();
  } else if (event.keyCode === keyCode.s){
      console.log ('Pressed S key');
      pads[5].focus();
      pads[5].click();
  } else if (event.keyCode === keyCode.d){
      console.log ('Pressed D key');
      pads[6].focus();
      pads[6].click();
  } else if (event.keyCode === keyCode.f){
      console.log ('Pressed F key');
      pads[7].focus();
      pads[7].click();
  } else if (event.keyCode === keyCode.u){
      console.log ('Pressed U key');
      pads[8].focus();
      pads[8].click();
  } else if (event.keyCode === keyCode.i){
      console.log ('Pressed I key');
      pads[9].focus();
      pads[9].click();
  } else if (event.keyCode === keyCode.o){
      console.log ('Pressed O key');
      pads[10].focus();
      pads[10].click();
  } else if (event.keyCode === keyCode.p){
      console.log ('Pressed P key');
      pads[11].focus();
      pads[11].click();
  } else if (event.keyCode === keyCode.h){
      console.log ('Pressed H key');
      pads[12].focus();
      pads[12].click();
  } else if (event.keyCode === keyCode.j){
      console.log ('Pressed J key');
      pads[13].focus();
      pads[13].click();
  } else if (event.keyCode === keyCode.k){
      console.log ('Pressed K key');
      pads[14].focus();
      pads[14].click();
  } else if (event.keyCode === keyCode.l){
      console.log ('Pressed L key');
      pads[15].focus();
      pads[15].click();
  }

}
