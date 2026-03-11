const playButton = document.getElementById("playButton");
const skins = document.getElementById("Skins");
const versionText = document.getElementById("versionText");
const title = document.getElementById("title");

playButton.addEventListener("click", function() {
    skins.style.display = "none";
    versionText.style.display = "none";
    playButton.style.display = "none";
    title.style.display = "none";
});
