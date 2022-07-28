var loaderr = document.getElementById("loadeer");

        function letgo() {
            loaderr.style.display = 'none';
        }

var bgmusic = document.getElementById("myAudio");

        function playAudio() {
            if (bgmusic.paused) {
                bgmusic.play();
            }
            else {
                bgmusic.pause();

            }
        }
