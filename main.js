document.addEventListener("DOMContentLoaded", function() {
    const title = document.getElementById("title");
    const skins = document.getElementById("Skins");
    const versionText = document.getElementById("versionText");
    const playButton = document.getElementById("playButton");
    const player = document.getElementById("player");
    player.hidden = true;
    function hideMenu() {
        skins.hidden = true;
        player.hidden = false;
        versionText.hidden = true;
        playButton.hidden = true;
        title.hidden = true;
    }

    playButton.addEventListener("click", hideMenu);
    document.addEventListener("keydown", function(event) {
        if(event.code === "w") {
            player.y = player.y + 5;
        }
    });
    document.addEventListener("keydown", function(event) {
        if(event.code === "Space") {
            event.preventDefault();
            hideMenu();
        }
    });
});
