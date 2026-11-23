
const gameFrame = document.getElementById("reefGame");

// Double-click the game to enter fullscreen.
gameFrame.addEventListener("dblclick", () => {
    if (gameFrame.requestFullscreen) {
        gameFrame.requestFullscreen();
    }
});
