const playButton = document.getElementById("playButton");
const Skins = document.getElementById("Skins");
const versionText = document.getElementById("versionText");

playButton.addEventListener("click", function() {
    Skins.hidden = true;
    versionText.hidden = true;
});
