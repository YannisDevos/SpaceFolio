const bgList = ["earth", "earth2", "jupiter", "mars", "system", "milky"]
const rand = Math.floor(Math.random() * bgList.length);
const video = document.querySelector(".videobg");
const txt = "/img/background/video/" + bgList[rand] + ".mp4"

video.setAttribute("src", txt)