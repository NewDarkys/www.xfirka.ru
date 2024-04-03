var video_container = document.querySelector("#video_container");
var video_tag = document.querySelector("#video");
var scene_name = document.querySelector("#scene_name");
var scene = document.querySelector("#scene");
var audio = document.getElementById("audio");

let oldTitle = document.title;
document.title = "Press any button/mouse button to continue";

let playing = false
let isVideoReady = false

function launchIntro() {
  if (!playing) {
    playing = true;
    document.title = oldTitle;
    video.play();
    video_container.classList.remove("hidden");
    video.play();
    audio.play();
    setTimeout(() => {
      scene_name.classList.remove("hidden");
      setTimeout(() => {
        scene.classList.add("hidden");
        setTimeout(() => {
          scene.classList.add("display-none");
        }, 3000);
      }, 3000);
    }, 10000);
  }
}


document.addEventListener("click", function(){
  launchIntro()
})

document.addEventListener("keypress", function(){
  launchIntro()
})

let interval = setInterval(() => {
  if (video_tag.readyState === 4) {
    isVideoReady = true
    clearInterval(interval)
  }
}, 100);



$('#migration-alert').modal('show');
