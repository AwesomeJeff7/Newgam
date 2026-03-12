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

    let movingUp = false;
    let movingDown = false;
    let movingLeft = false;
    let movingRight = false;

    document.addEventListener("keydown", function(event) {
        if(event.code === "KeyW") movingUp = true;
        if(event.code === "KeyS") movingDown = true;
        if(event.code === "KeyA") movingLeft = true;
        if(event.code === "KeyD") movingRight = true;
        if(event.code === "Space") {
            event.preventDefault();
            hideMenu();
        }
    });

    document.addEventListener("keyup", function(event) {
        if(event.code === "KeyW") movingUp = false;
        if(event.code === "KeyS") movingDown = false;
        if(event.code === "KeyA") movingLeft = false;
        if(event.code === "KeyD") movingRight = false;
    });

    setInterval(function() {
        const speed = 5;
        let top = parseInt(player.style.top) || 0;
        let left = parseInt(player.style.left) || 0;
        if(movingUp) top -= speed;
        if(movingDown) top += speed;
        if(movingLeft) left -= speed;
        if(movingRight) left += speed;
        player.style.top = top + "px";
        player.style.left = left + "px";
    }, 20);
});
