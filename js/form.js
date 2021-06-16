class Form{
    constructor(){
        this.title=createElement('h2');
        this.input=createInput('name');
        this.button=createButton("play");
        this.greeting=createElement('h3');
        this.reset=createButton("RESET");
    }
    display(){
        this.title.html("CAR RACING GAME");
        this.title.position(displayWidth/2-100,displayHeight/2-75);

        this.input.position(displayWidth/2-100,displayHeight/2);
        this.button.position(displayWidth/2-100,displayHeight/2+50);
       
        this.reset.position(displayWidth-100, 100);
        
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name=this.input.value();
            playerCount += 1;
            player.updateCount(playerCount);
            player.index= playerCount;
            player.update();

            this.greeting.html("HELLO " + player.name + "!!");
            this.greeting.position(displayWidth/2,displayHeight/2);
        })
        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.updateState(0);
            database.ref('players').remove();
        })
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        this.title.hide();
    }
}