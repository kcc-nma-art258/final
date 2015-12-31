// Create a variable for the array (list) of pads
var pads = document.querySelectorAll('.pad');
//console.log(pads);

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

// Create function to add audio samples to listener
function addSamplesToListener(i){

  // Create listener for pad button click event
  function padListener(){
    var audioSampleString = path + samples[i];
    //console.log('Button #' + (i+1) + ': ' + audioSampleString);
    var audio = new Audio(audioSampleString);
    audio.play();
  }

  pads[i].addEventListener('click', padListener);
}

// Loop over pads and add samples to each handler
for (var i = 0; i < pads.length; i++){
  addSamplesToListener(i);
}

// Create an array with
// Unicode keycode values
var keyCode = [ 113, 119, 101, 114, 97, 115, 100, 102, 117, 105, 111, 112, 104, 106, 107, 108 ];


// Keypress listener to find keycode values
function keyPressListener(event) {
	for (var i = 0; i < pads.length; i++){
	  if (event.keyCode === keyCode[i]){
  		pads[i].focus();
  		pads[i].click();
	  }
	}
}

window.addEventListener('keypress', keyPressListener);
