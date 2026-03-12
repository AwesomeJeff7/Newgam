const title = document.getElementById("title");
const skins = document.getElementById("Skins");
const versionText = document.getElementById("versionText");
const playButton = document.getElementById("playButton");

function hideMenu() {
    skins.hidden = true;
    versionText.hidden = true;
    playButton.hidden = true;
    title.hidden = true;
}
playButton.addEventListener("click", hideMenu);

document.addEventListener("keydown", function(event) {
    if(event.code === "Space") {
        event.preventDefault();
        hideMenu();
    }
});
