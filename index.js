let musicList =[
  {
      name: "Bên trái",
      artist: "Kiên Trịnh",
      src: "Music-list/Ben Trai - Kien.mp3"
  },
  {
      name: "Comethru",
      artist: "Jeremy",
      src:"Music-list/Comethru - Jeremy Zucker.mp3",
  },
  {
      name: "Nghe nhạc anh mỗi khi buồn",
      artist: "Kiên",
      src:"Music-list/NgheNhacAnhMoiKhiBuon-KienTrinh-6938038.mp3",
  },
  {
      name: "Quán cơm ngày mưa",
      artist: "Kiên",
      src: "Music-list/Quan Com Ngay Mua The First CAM_ - 8 the.mp3",
  },
  {
      name: "Just The Two Of Us",
      artist: "Bill Withers",
      src: "Music-list/Just The Two Of Us - Bill Withers_ Grove.mp3"
  },
  {
      name: "Perfect",
      artist: "Ed Sheeran",
      src:"Music-list/Perfect - Ed Sheeran.mp3",
  }
]
let nameEl = document.querySelector("#name")
let passEl = document.querySelector("#password")
let delEl = document.querySelector("#del")
let mainContainEl = document.querySelector(".main-container")
let name
let pass
let date
let age
function submit(){
    name = nameEl.value
    pass = passEl.value
    date = pass.split('/')
    age = 2023-parseInt(date[2])
    delEl.remove()
    mainContainEl.style.display = "block"
    alert(`Vậy là bạn ${name} đã được ${age} nồi bánh chưng rồi đó. Chúc bạn và người yêu hạnh phúc bên ngày valentine, nếu chưa có thì xin tặng bạn list nhạc nghe cho đỡ buồn----- Enjoy your music (from MTL with love) <3 `)
    alert("Nghe hết list nhạc để nhận bất ngờ")
}
    
const container = document.querySelector(".music-container")
const musicName = container.querySelector(".song-details .name")
const musicArtist = container.querySelector(".song-details .artist")
const mainAudio = container.querySelector(".main-audio")
const playPauseBtn = container.querySelector(".play-pause")
const prevBtn = container.querySelector(".prev")
const nextBtn = container.querySelector(".next")
const progressArea = container.querySelector(".progress-area")
const progressBar = progressArea.querySelector(".progress-bar")
let playedSongCount = 0
let musicPaused = false
function getRandomInt(min, max){
    return Math.floor(Math.random()*(max-min)) +min;
}
let musicIndex = getRandomInt(0, musicList.length-1)
window.addEventListener("load" , ()=> {
    loadMusic(musicIndex)
 }
)
function nextMusic(){
    if(musicIndex == musicList.length-1){
        musicIndex = 0;
    }else{
        musicIndex++;
    }
    loadMusic(musicIndex)
    playMusic()
}
function prevMusic(){
    if(musicIndex ==0){
        musicIndex = musicList.length -1
    }else{
        musicIndex--
    }
    loadMusic(musicIndex)
    playMusic()
}

function loadMusic(indexNumber){
    musicName.innerText = "--"+ musicList[indexNumber].name + "--"
    musicArtist.innerText = musicList[indexNumber].artist
    mainAudio.src = `${musicList[musicIndex].src}`
    playedSongCount++
    if(playedSongCount == musicList.length+1){
        window.open("heart.html","_blank")
    }
}
function playMusic(){
    musicPaused = false
    playPauseBtn.querySelector("i").innerText = "pause"
    mainAudio.play()
}

function pauseMusic(){
    musicPaused = true
    playPauseBtn.querySelector("i").innerText = "play_arrow"
    mainAudio.pause()
}

playPauseBtn.addEventListener("click", ()=>{
    musicPaused ? playMusic() : pauseMusic()
})
nextBtn.addEventListener("click",()=>{
    nextMusic()
})
prevBtn.addEventListener("click", ()=>{
    prevMusic()
})
mainAudio.addEventListener("timeupdate", (e)=>{
    const currentTime = e.target.currentTime
    const duration = e.target.duration
    let progressWidth = currentTime/duration*100
    progressBar.style.width = `${progressWidth}%`
    let musicCurrentTime = container.querySelector(".current")
    let musicDuration = container.querySelector(".duration")
    mainAudio.addEventListener("loadeddata", ()=>{
        let audioDuration = mainAudio.duration
        let totalMin = Math.floor(audioDuration/60)
        let totalSec=Math.floor(audioDuration  % 60)
        totalSec = totalSec < 10 ? `0${totalSec}` : totalSec
        musicDuration.innerText = `${totalMin}: ${totalSec}`
    })
    let currentMin = Math.floor(currentTime / 60)
    let currentSec = Math.floor(currentTime % 60)
    currentSec = currentSec < 10 ? `0${currentSec}` : currentSec
    musicCurrentTime.innerText = `${currentMin}: ${currentSec}`
    if(currentTime >= duration){
        nextMusic()
    }
})
// A list of all possible colors
const COLORS = ["pink","red","purple","orange"];

function createParticle(x, y) {
  const element = document.createElement("div");
  element.style.width = "10px";
  element.style.height = "10px";
  element.style.border = "1px solid black";
  element.style.borderRadius ="50%"
  // The elements are in absolute position
  element.style.position = "absolute";
  element.style.top = `${y}px`;
  element.style.left = `${x}px`;
  // We want our cursor to be centered in the square
  element.style.transform = "translate(-50%, -50%)";
  // Get a color randomly
  element.style.backgroundColor =
    COLORS[Math.floor(Math.random() * COLORS.length)];

  const animation = element.animate(
    [
      {
        // Math.random() - 0.5 returns integer between -0.5 and 0.5
        transform: `translate(${(Math.random() - 0.5) * 100}px, ${
          (Math.random() - 0.5) * 200
        }px) rotate(${Math.random() * 520}deg)`,
        // We want to reduce the opacity until 0
        opacity: 0
      }
    ],
    1000
  );

  // Remove the particle at the end of animation
  animation.finished.then(() => element.remove());

  document.body.appendChild(element);
}

document.addEventListener("click", (e) => {
  // Get the position of the cursor in the document
  const { clientX: x, clientY: y } = e;

  // Create multiple particles
  for (let i = 0; i <5 ; i++) {
    createParticle(x, y);
  }
});



