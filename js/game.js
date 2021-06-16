class Game{
    constructor(){}
    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
            gameState=data.val();
        })
    }
    updateState(state){
        database.ref('/').update({
            gameState : state
        })
    }

    async start(){
        if(gameState === 0){
            player= new Player();
            var playerCountRef=await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
                playerCount=playerCountRef.val();
                player.getCount();
            }

            form=new Form();
            form.display();
        }
        car1=createSprite(200, 200);
        car1.addImage(cars1);
        car2=createSprite(400, 200);
        car2.addImage(cars2);
        car3=createSprite(600, 200);
        car3.addImage(cars3);
        car4=createSprite(800, 200);
        car4.addImage(cars4);
        cars=[car1, car2, car3, car4];
    }
    
    play(){

        form.hide();
        /*textSize(30);
        fill(0);
        text("GAME STARTS !!",displayWidth/2-100,displayHeight/2);*/

        Player.getPlayerInfo();

        //console.log(allPlayers);

        if(allPlayers !== undefined){
           // var pos=250;
           background(117, 1, 5);
           image(track,0,-6*displayHeight, displayWidth, displayHeight*7)
            var index=0;
             var x=200;
             var y;
            for(var plr in allPlayers){
                index = index+1;
                x= x+200;
                y=displayHeight-allPlayers[plr].distance;
                if(plr === "player" + player.index){
                    fill("red");
                    stroke(0);
                    ellipse(x, y, 100, 100);
                    textSize(15);
                    fill(blue);
                    text(allPlayers[plr].name, x-10, y+75)
                    
                    //cars[index-1].shapeColor="red";
                    camera.position.x=displayWidth/2;
                    camera.position.y=cars[index-1].y;
                }/*else{
                    fill(0)
                }*/
                cars[index-1].x=x
                cars[index-1].y=y
                //textSize(30);
                //text(allPlayers[plr].name + ":" + allPlayers[plr].distance, 200, pos);
                //pos+=100;
            }
        }
        if(keyIsDown(UP_ARROW) && player.index!==null){
            player.distance+=200;
            player.update();
        }
        if(player.distance === 3800){
            gameState=2;
        }

        drawSprites();
    }
    end(){
        console.log("game has ended");
        
    }
}