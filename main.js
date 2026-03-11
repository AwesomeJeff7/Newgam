const title = document.getElementById("title");
const skins = document.getElementById("skins");
const versionText = document.getElementById("versionText");
const playButton = document.getElementById("play");
playButton.addEventListener("click", function() {
    Skins.hidden = true;
    versionText.hidden = true;
    playButton.hidden = true;
    title.hidden = true;
});
