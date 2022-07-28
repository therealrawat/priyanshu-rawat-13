var preloader = document.getElementById('loading');
        function letgo() {
            preloader.style.display = 'none';
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
