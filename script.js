const bg_video = document.getElementById("background-video");
const header_1 = document.getElementById("header-1");
const header_2 = document.getElementById("header-2");

function toggle(background, color1, color2, word) {
    bg_video.src = background;
   
    header_1.style.background = `linear-gradient(135deg, ${color1}, ${color2})`;
    header_2.style.background = `linear-gradient(135deg, ${color1}, ${color2})`;
    header_2.textContent = word;
}


