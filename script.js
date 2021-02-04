const video = document.getElementById('video'); //* it is HTML5 video so there are lots of properties and methods we can use to add functionalities
const play = document.getElementById('play'); 
const stop = document.getElementById('stop'); 
const progress = document.getElementById('progress'); 
const timestamp = document.getElementById('timestamp'); 

// Play & Pause Video
//* the video element is connected to HTML5 tag, we have an API that we can use on it, with the paused property
function toggleVideoStatus () {
  if (video.paused) {  //* check to see if the video is paused
    video.play();     //* if it is currently paused, click on it will play
  } else {            //* if is is not paused when clicking on it (i.e. it is playing)
    video.pause();    //* then pause the video
  }
}


// Update Play/Pause Icon
function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'  //* pause button is set in style.css, not in html
  }
}

// Update Progress & Timestamp
function updateProgress() {
  return true;
}

// Set Video Time to Progress
function setVideoProgress() {
  return true;
}

// Stop Video
function stopVideo() {
  video.currentTime = 0;  //* The HTML video API doesn't have .stop method. This will reset the video to the beginning
  video.pause();          //* Once back to the beginning, we pause it
}

// Event Listeners - for calling specific functions
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);