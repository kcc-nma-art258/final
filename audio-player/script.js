// Create a variable for the array (list) of pads
var pads = document.querySelectorAll('.pad');

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
  'snare_3.mp3'
];


window.addEventListener('keypress', keyPressListener);

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

//Create an object with keyboard keys as properties and unicode keycode values//


var keyCode = {
      q: 113,
      w: 119,
      e: 101,
      r: 114,
      a: 97,
      s: 115,
      d: 100,
      f: 102,
      z: 122,
      x: 120,
      c: 99,
      v: 118
};






function keyPressListener(event) {
  console.log(event.keyCode);

  if (event.keyCode === keyCode.q){
    console.log('Pressed q key');
        pads[0].focus();
        pads[0].click();
  } else if(event.keyCode === keyCode.w) {
    console.log('Pressed w key');
        pads[1].focus();
        pads[1].click();
  } else if(event.keyCode === keyCode.e) {
    console.log('Pressed e key');
        pads[2].focus();
        pads[2].click();
  } else if(event.keyCode === keyCode.r) {
        console.log('Pressed r key');
        pads[3].focus();
        pads[3].click();
  } else if(event.keyCode === keyCode.a) {
        console.log('Pressed a key');
          pads[4].focus();
          pads[4].click();
  } else if(event.keyCode === keyCode.s) {
        console.log('Pressed s key');
          pads[5].focus();
          pads[5].click();
  } else if(event.keyCode === keyCode.d) {
        console.log('Pressed d key');
          pads[6].focus();
          pads[6].click();
  } else if(event.keyCode === keyCode.f) {
        console.log('Pressed f key');
          pads[7].focus();
          pads[7].click();
  } else if(event.keyCode === keyCode.z) {
        console.log('Pressed z key');
          pads[8].focus();
          pads[8].click();
  } else if(event.keyCode === keyCode.x) {
        console.log('Pressed x key');
          pads[9].focus();
          pads[9].click();
  } else if(event.keyCode === keyCode.c) {
              console.log('Pressed c key');
                pads[9].focus();
                pads[9].click();
  } else if(event.keyCode === keyCode.v) {
              console.log('Pressed v key');
                pads[10].focus();
                pads[10].click();
  }

}
