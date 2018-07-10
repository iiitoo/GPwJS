var player1 = {
    name: "Kandra",
    place: "TheDangeonofDoom",
    health: 50
};

var player2 = {
    name: "Dax",
    place: "TheOldLibrary",
    health: 40
};

var player;
function showPlayerInfo() {
    console.log(player.name + " is in " + player.place);
    console.log(player.name + "has health " + player.health);
    console.log("\n \n");
}

player = player1;
showPlayerInfo();