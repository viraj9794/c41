class Player{
    constructor(){
        this.name=null;
        this.index=null;
        this.distance=0;
    }
    getCount(){
        var playerCountRef=database.ref('playerCount');
        playerCountRef.on("value", (data)=>{
            playerCount=data.val();
        })
    }
    updateCount(count){
    database.ref('/').update({
        playerCount : count
    })

    }

    update(){
        var playersIndex = "players/player" + player.index;
        database.ref(playersIndex).set({
            name : this.name,
            distance : this.distance
        })
    }
    static getPlayerInfo(){
        var readPlayerInfo = database.ref('players');
        readPlayerInfo.on("value", (data)=>{
            allPlayers=data.val();
        })
    }
}