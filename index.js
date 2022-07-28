
var bgmusic = document.getElementById("myAudio");

        function playAudio() {
            if (bgmusic.paused) {
                bgmusic.play();
            }
            else {
                bgmusic.pause();

            }
        }
