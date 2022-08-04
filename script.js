console.log("this is script js file");
let btns = document.querySelectorAll(".btns");
let audio;

// press key 
window.addEventListener("keydown",function(event) {
    event.preventDefault();
    playAudio(event.key);
    animationfun(event.key);  
});

// addEventListener to click on a perticular key 
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(event) {
        let key = this.innerHTML;
        playAudio(key);
        animationfun(key);
    })
}

// function to play audio on press key 
function playAudio(key) {
    if (key=="a" || key == "A") {
        audio = new Audio("sounds/drum1.mp3")
        audio.play();
    }
    else if (key == "s" || key == "S") {
        audio = new Audio("sounds/drum2.mp3")
        audio.play();
    }
    else if (key == "d" || key == "D") {
        audio = new Audio("sounds/drum3.mp3")
        audio.play();
    }
    else if (key == "f" || key == "F") {
        audio = new Audio("sounds/drum4.mp3")
        audio.play();
    }
    else if (key == "j" || key == "J") {
        audio = new Audio("sounds/drum5.mp3")
        audio.play();
    }
    else if (key == "k" || key == "K") {
        audio = new Audio("sounds/drum6.mp3")
        audio.play();
    }
    else if (key == "l" || key == "L") {
        audio = new Audio("sounds/drum7.mp3")
        audio.play();
    }
}


function animationfun(currentKey) {
    currentKey = currentKey.toLowerCase();
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("animation");
    
    setTimeout(function() {
      activeButton.classList.remove("animation");
    }, 100);
  }