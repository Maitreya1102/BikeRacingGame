class Player {
  constructor(){
    this.index = null;
    this.rank = null;
    this.distance = 0;
    this.name = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
  playerRemove(){
    var refer = database.ref("/");
    refer.child("players").remove();
}

getCarsRank(){
  database.ref("carsrank").on("value",(data)=>{
    this.rank = data.val()
  })
}

static updateCarsRank(rank){
  database.ref("/").update({
    carsrank:rank
  })
}

}
