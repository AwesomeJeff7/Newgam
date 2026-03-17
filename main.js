document.addEventListener("DOMContentLoaded", function() {
    const title = document.getElementById("title");
    const skins = document.getElementById("Skins");
    const versionText = document.getElementById("versionText");
    const playButton = document.getElementById("playButton");
    const player = document.getElementById("player");
    const upgrade = document.getElementbyId("button");
    
    player.hidden = true;

    let clicks = 0;
    let clicksmulti = 1
    let cost = 20
    let movingUp = false;
    let movingDown = false;
    let movingLeft = false;
    let movingRight = false;
    let gameStarted = false;

    function startGame() {
        title.hidden = true;
        skins.hidden = true;
        versionText.hidden = true;
        playButton.hidden = true;

        player.hidden = false;
        player.style.position = "absolute";
        player.style.left = "100px";
        player.style.top = "100px";

        gameStarted = true;
    }

    playButton.addEventListener("click", startGame);

    document.addEventListener("keydown", function(event) {
        if(event.code === "Space") {
            event.preventDefault();
            if(!gameStarted) {
                startGame();
            } else {
                clicks = clicks + clicksmulti;
                Score.textContent = "Clicks: " + clicks;
                console.log(clicks);
            }
        }

        if(!gameStarted) return;

        if(event.code === "KeyW") movingUp = true;
        if(event.code === "KeyS") movingDown = true;
        if(event.code === "KeyA") movingLeft = true;
        if(event.code === "KeyD") movingRight = true;
    });

    document.addEventListener("keyup", function(event) {
        if(event.code === "KeyW") movingUp = false;
        if(event.code === "KeyS") movingDown = false;
        if(event.code === "KeyA") movingLeft = false;
        if(event.code === "KeyD") movingRight = false;
    });

    setInterval(function() {
        if(!gameStarted) return;

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
    upgrade.addEventListener("click", function(){
        if(clicks>=cost){
        clicks = clicks - cost;
        clicksmulti = clicksmulti +1;
        cost = cost*2
        }else{
            alert("you need" + (clicks-cost) + "more clicks");
        }
    });
    player.addEventListener("click", function() {
        if(gameStarted) {
            clicks = clicks + clicksmulti;
            Score.textContent = "clicks: " + clicks;
            console.log(clicks);
        }
    });
});
