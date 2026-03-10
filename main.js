const playButton = document.getElementById("playButton");
const Skins = document.getElementById("Skins");
const versionText = document.getElementById("versionText");
const title = document.getElementById("title");
playButton.addEventListener("click", function() {
    Skins.hidden = true;
    versionText.hidden = true;
    playButton.hidden = true;
    title.hidden = true;
});
document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        Skins.hidden = true;
        versionText.hidden = true;
        playButton.hidden = true;
        title.hidden = true;
    }
});
