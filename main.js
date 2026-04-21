document.addEventListener("DOMContentLoaded",function(){
    const title=document.getElementById("title");
    const skins=document.getElementById("Skins");
    const versionText=document.getElementById("versionText");
    const playButton=document.getElementById("playButton");
    const player=document.getElementById("player");
    const upgrade=document.getElementById("button");
    const Score=document.getElementById("Score");
    player.hidden=true;
    let clicks=0;
    let clicksmulti=1;
    let cost=20;
    let movingUp=false;
    let movingDown=false;
    let movingLeft=false;
    let movingRight=false;
    let gameStarted=false;
    let bullets=[];
    function updateScore(){
        if(Score){
            Score.textContent="Clicks: "+clicks;
        }
    }
    function startGame(){
        title.hidden=true;
        skins.hidden=true;
        versionText.hidden=true;
        playButton.hidden=true;
        player.hidden=false;
        player.style.position="absolute";
        player.style.left="100px";
        player.style.top="100px";
        gameStarted=true;
        updateScore();
    }
    if(playButton){
        playButton.addEventListener("click",startGame);
    }
    document.addEventListener("keydown",function(event){
        if(event.code==="Space"){
            event.preventDefault();
            if(!gameStarted){
                startGame();
            }else{
                let bullet=document.createElement("div");
                bullet.style.width="10px";
                bullet.style.height="10px";
                bullet.style.background="red";
                bullet.style.position="absolute";
                let x=parseInt(player.style.left);
                let y=parseInt(player.style.top);
                bullet.style.left=x+"px";
                bullet.style.top=y+"px";
                document.body.appendChild(bullet);
                bullets.push({el:bullet,x:x,y:y,speed:8});
                clicks+=clicksmulti;
                updateScore();
            }
        }
        if(!gameStarted)return;
        if(event.code==="KeyW")movingUp=true;
        if(event.code==="KeyS")movingDown=true;
        if(event.code==="KeyA")movingLeft=true;
        if(event.code==="KeyD")movingRight=true;
    });
    document.addEventListener("keyup",function(event){
        if(event.code==="KeyW")movingUp=false;
        if(event.code==="KeyS")movingDown=false;
        if(event.code==="KeyA")movingLeft=false;
        if(event.code==="KeyD")movingRight=false;
    });
    setInterval(function(){
        if(!gameStarted)return;
        let speed=5;
        let top=parseInt(player.style.top);
        let left=parseInt(player.style.left);
        if(movingUp)top-=speed;
        if(movingDown)top+=speed;
        if(movingLeft)left-=speed;
        if(movingRight)left+=speed;
        player.style.top=top+"px";
        player.style.left=left+"px";
        for(let i=0;i<bullets.length;i++){
            bullets[i].x+=bullets[i].speed;
            bullets[i].el.style.left=bullets[i].x+"px";
            if(bullets[i].x>window.innerWidth){
                bullets[i].el.remove();
                bullets.splice(i,1);
                i--;
            }
        }
    },20);
    if(upgrade){
        upgrade.addEventListener("click",function(){
            if(clicks>=cost){
                clicks-=cost;
                clicksmulti++;
                cost*=2;
                updateScore();
            }else{
                alert("you need "+(cost-clicks)+" more clicks");
            }
        });
    }
    if(player){
        player.addEventListener("click",function(){
            if(gameStarted){
                clicks+=clicksmulti;
                updateScore();
            }
        });
    }
});
