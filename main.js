const playButton = document.getElementById("playButton");
const skins = document.getElementById("Skins");
const versionText = document.getElementById("versionText");
const title = document.getElementById("title");
playButton.addEventListener("click", function() {
    skins.hidden = true;
    versionText.hidden = true;
    playButton.hidden = true;
    title.hidden = true;
});
