const playButton = document.getElementById("playButton");
const Skins = document.getElementById("Skins");
const versionText = document.getElementById("versionText");
const title = document.getElementById("title");
playButton.addEventListener("click", function() {
    hidescreen()
});
document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        hidescreen()
    }
});
function hidescreen () {
    skins.hidden = true;
    versionText.hidden = true;
    playButton.hidden = true;
    title.hidden = true;
}
