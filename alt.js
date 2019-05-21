var playerScore = 0;
var compScore = 0;

const userScore_span = document.getElementById("player-score");
const compScore_span = document.getElementById("comp-score");

var playerRoster = 18;
var compRoster = 18;

const roster_div = document.getElementById("choose-roster");

const grassRoster_div = document.getElementById("grass-roster");

const playerRoster_div = document.getElementById("player-roster");
const compRoster_div = document.getElementById("comp-roster");

const playHealth_span = document.getElementById("playHealth");
const compHealth_span = document.getElementById("compHealth");

const endCompScore_span = document.getElementById("end-comp");
const endPlayScore_span = document.getElementById("end-play");
const battleEnd_div = document.getElementById("battle-end");
const endText_id = document.getElementById("end-text");

const showChoices_div = document.getElementById("show-choices");
const inPlay_div = document.getElementById("in-play");
const startMenu_div = document.getElementById("start-menu");

const grass_div = document.getElementById("grass");
const fire_div = document.getElementById("fire");
const water_div = document.getElementById("water");
const normal_div = document.getElementById("normal");
const flying_div = document.getElementById("flying");
const rock_div = document.getElementById("rock");
const ground_div = document.getElementById("ground");
const psychic_div = document.getElementById("psychic");
const ghost_div = document.getElementById("ghost");
const bug_div = document.getElementById("bug");
const electric_div = document.getElementById("electric");
const poison_div = document.getElementById("poison");
const fighting_div = document.getElementById("fighting");
const fairy_div = document.getElementById("fairy");
const ice_div = document.getElementById("ice");
const dragon_div = document.getElementById("dragon");
const dark_div = document.getElementById("dark");
const steel_div = document.getElementById("steel");

const grhp_span = document.getElementById("grhp");
const fihp_span = document.getElementById("fihp");
const wahp_span = document.getElementById("wahp");
const nohp_span = document.getElementById("nohp");
const flhp_span = document.getElementById("flhp");
const rohp_span = document.getElementById("rohp");
const gdhp_span = document.getElementById("gdhp");
const pshp_span = document.getElementById("pshp");
const ghhp_span = document.getElementById("ghhp");
const buhp_span = document.getElementById("buhp");
const elhp_span = document.getElementById("elhp");
const pohp_span = document.getElementById("pohp");
const fthp_span = document.getElementById("fthp");
const fahp_span = document.getElementById("fahp");
const ichp_span = document.getElementById("ichp");
const drhp_span = document.getElementById("drhp");
const dahp_span = document.getElementById("dahp");
const sthp_span = document.getElementById("sthp");

const playerOne_div = document.getElementById("player-one");
const playerTwo_div = document.getElementById("player-two");

const result_div = document.getElementById("result");
const cresult_div = document.getElementById("cresult");

var playerdex = [
  { id: 1, name: "Skiddo", type: "Grass", health: 2 },
  { id: 2, name: "Cyndaquil", type: "Fire", health: 2 },
  { id: 3, name: "Poliwag", type: "Water", health: 2 },
  { id: 4, name: "Ratatta", type: "Normal", health: 2 },
  { id: 5, name: "Pidgey", type: "Flying", health: 2 },
  { id: 6, name: "Sudowoodo", type: "Rock", health: 2 },
  { id: 7, name: "Sandshrew", type: "Ground", health: 2 },
  { id: 8, name: "Abra", type: "Psychic", health: 2 },
  { id: 9, name: "Misdreavus", type: "Ghost", health: 2 },
  { id: 10, name: "Caterpie", type: "Bug", health: 2 },
  { id: 11, name: "Pikachu", type: "Electric", health: 2 },
  { id: 12, name: "Nidoran", type: "Poison", health: 2 },
  { id: 13, name: "Machop", type: "Fighting", health: 2 },
  { id: 14, name: "Togepi", type: "Fairy", health: 2 },
  { id: 15, name: "Snorunt", type: "Ice", health: 2 },
  { id: 16, name: "Dratini", type: "Dragon", health: 2 },
  { id: 17, name: "Umbreon", type: "Dark", health: 2 },
  { id: 18, name: "Klink", type: "Steel", health: 2 }
];

var compdex = [
  { id: 1, name: "Chikorita", type: "Grass", health: 2 },
  { id: 2, name: "Charmander", type: "Fire", health: 2 },
  { id: 3, name: "Squirtle", type: "Water", health: 2 },
  { id: 4, name: "Ratatta", type: "Normal", health: 2 },
  { id: 5, name: "Pidgey", type: "Flying", health: 2 },
  { id: 6, name: "Sudowoodo", type: "Rock", health: 2 },
  { id: 7, name: "Sandshrew", type: "Ground", health: 2 },
  { id: 8, name: "Abra", type: "Psychic", health: 2 },
  { id: 9, name: "Misdreavus", type: "Ghost", health: 2 },
  { id: 10, name: "Caterpie", type: "Bug", health: 2 },
  { id: 11, name: "Pikachu", type: "Electric", health: 2 },
  { id: 12, name: "Ekans", type: "Poison", health: 2 },
  { id: 13, name: "Mankey", type: "Fighting", health: 2 },
  { id: 14, name: "Clefairy", type: "Fairy", health: 2 },
  { id: 15, name: "Snorunt", type: "Ice", health: 2 },
  { id: 16, name: "Dratini", type: "Dragon", health: 2 },
  { id: 17, name: "Umbreon", type: "Dark", health: 2 },
  { id: 18, name: "Klink", type: "Steel", health: 2 }
];

var onePool = playerdex.length;
var twoPool = compdex.length;

var playerPokemon = "";
var compPokemon = "";

var comp_choice = 0;

function getCompChoice() {
  comp_choice = Math.floor(Math.random() * twoPool);
  return compdex[comp_choice];
}

function pokeFight(playChoice) {
  const compPoke = getCompChoice();
  const compChoice = compPoke.type;
  const playPoke = playerdex[playChoice];
  const typeChoice = playPoke.type;

  playerPokemon = playPoke.name;
  compPokemon = compPoke.name;

  playerOne_div.innerHTML = playerPokemon;
  playerTwo_div.innerHTML = compPokemon;

  //Determines How much damage is assigned to each side of the fight.
  switch (typeChoice + compChoice) {
    //not very/normal -1/-2
    case "NormalRock":
    case "NormalSteel":
    case "FightingPoison":
    case "FlyingSteel":
    case "PoisonRock":
    case "PoisonGhost":
    case "BugPoison":
    case "GroundBug":
    case "BugGhost":
    case "BugSteel":
    case "BugFairy":
    case "SteelWater":
    case "GrassSteel":
    case "SteelElectric":
    case "PsychicSteel":
    case "SteelDragon":
    case "FireDragon":
    case "FairyFire":
    case "IceWater":
    case "WaterDragon":
    case "ElectricGrass":
    case "GrassDragon":
      compPoke.health -= 1;
      playPoke.health -= 2;
      result_div.innerHTML =
        typeChoice + " is not very effective against " + compChoice + "! -1";
      cresult_div.innerHTML = compChoice + " hits " + typeChoice + "! -2";
      break;

    //not very/super -1/-3
    case "FightingFlying":
    case "FightingPsychic":
    case "FlyingRock":
    case "FlyingElectric":
    case "PoisonGround":
    case "RockFighting":
    case "DarkFighting":
    case "FightingFairy":
    case "BugFlying":
    case "GrassFlying":
    case "GrassPoison":
    case "FairyPoison":
    case "RockGround":
    case "WaterGrass":
    case "FireWater":
    case "GrassFire":
    case "GroundGrass":
    case "RockSteel":
    case "FireRock":
    case "BugFire":
    case "GrassBug":
    case "GhostDark":
    case "SteelFire":
    case "IceSteel":
    case "FairySteel":
    case "IceFire":
    case "DarkFairy":
      compPoke.health -= 1;
      playPoke.health -= 3;
      result_div.innerHTML =
        typeChoice + " is not very effective against " + compChoice + "! -1";
      cresult_div.innerHTML =
        compChoice + " is super effective against " + typeChoice + "! -3";
      break;

    //not very/not very -1/-1
    case "FightingBug":
    case "PoisonPoison":
    case "BugFighting":
    case "SteelSteel":
    case "FireFire":
    case "WaterWater":
    case "GrassGrass":
    case "ElectricElectric":
    case "PsychicPsychic":
    case "IceIce":
    case "DarkDark":
      compPoke.health -= 1;
      playPoke.health -= 1;
      result_div.innerHTML =
        typeChoice + " is not very effective against " + compChoice + "! -1";
      cresult_div.innerHTML =
        compChoice + " is not very effective against " + typeChoice + "! -1";
      break;

    //not very/none -1/0

    //none/none 0/0
    case "NormalGhost":
    case "GhostNormal":
      result_div.innerHTML =
        typeChoice + " and " + compChoice + "don't effect each other! 0";
      break;

    //none/not very 0/-1

    //none/normal 0/-2
    case "GroundFlying":
    case "FightingGhost":
    case "PoisonSteel":
      playPoke.health -= 2;
      result_div.innerHTML =
        typeChoice + " does not effect " + compChoice + "! 0";
      cresult_div.innerHTML = compChoice + " hits " + typeChoice + "! -2";
      break;

    //none/super 0/-3
    case "ElectricGround":
    case "PsychicDark":
    case "DragonFairy":
      playPoke.health -= 3;
      result_div.innerHTML =
        typeChoice + " does not effect " + compChoice + "! 0";
      cresult_div.innerHTML =
        compChoice + " is super effective against " + typeChoice + "! -3";
      break;

    //normal/not very -2/-1
    case "RockNormal":
    case "PoisonFighting":
    case "SteelFlying":
    case "PoisonBug":
    case "GhostPoison":
    case "BugGround":
    case "RockPoison":
    case "GhostBug":
    case "SteelBug":
    case "FairyBug":
    case "WaterSteel":
    case "SteelGrass":
    case "ElectricSteel":
    case "SteelPsychic":
    case "SteelDragon":
    case "DragonFire":
    case "FireFairy":
    case "WaterIce":
    case "DragonWater":
    case "GrassElectric":
    case "DragonGrass":
      compPoke.health -= 2;
      playPoke.health -= 1;
      result_div.innerHTML = typeChoice + " hits " + compChoice + "! -2";
      cresult_div.innerHTML =
        compChoice + " is not very effective against " + typeChoice + "! -1";
      break;

    //normal/super -2/-3
    case "NormalFighting":
    case "SteelFighting":
    case "IceFighting":
    case "FlyingIce":
    case "PoisonPsychic":
    case "SteelGround":
    case "FireGround":
    case "GroundWater":
    case "GroundIce":
    case "BugRock":
    case "RockWater":
    case "RockGrass":
    case "IceRock":
    case "PsychicBug":
    case "DarkBug":
    case "PsychicGhost":
    case "WaterElectric":
    case "GrassIce":
      compPoke.health -= 2;
      playPoke.health -= 3;
      result_div.innerHTML = typeChoice + " hits " + compChoice + "! -2";
      cresult_div.innerHTML =
        compChoice + " is super effective against " + typeChoice + "! -3";
      break;

    //normal/none -2/0
    case "FlyingGround":
    case "GhostFighting":
    case "SteelPoison":
      compPoke.health -= 2;
      result_div.innerHTML = typeChoice + " hits " + compChoice + "! -2";
      cresult_div.innerHTML =
        compChoice + " does not effect " + typeChoice + "! 0";
      break;

    //super/none -3/0
    case "GroundElectric":
    case "DarkPsychic":
    case "FairyDragon":
      compPoke.health -= 3;
      result_div.innerHTML =
        typeChoice + " is super effective against " + compChoice + "! -3";
      cresult_div.innerHTML =
        compChoice + " does not effect " + typeChoice + "! 0";
      break;

    //super/not very -3/-1
    case "FlyingFighting":
    case "FightingRock":
    case "PsychicFighting":
    case "FightingDark":
    case "FairyFighting":
    case "RockFlying":
    case "FlyingBug":
    case "FlyingGrass":
    case "ElectricFlying":
    case "GroundPoison":
    case "PoisonGrass":
    case "PoisonFairy":
    case "GroundRock":
    case "FireGrass":
    case "WaterFire":
    case "GrassWater":
    case "GrassGround":
    case "SteelRock":
    case "RockFire":
    case "FireBug":
    case "BugGrass":
    case "DarkGhost":
    case "FireSteel":
    case "SteelIce":
    case "SteelFairy":
    case "FireIce":
    case "FairyDark":
      compPoke.health -= 3;
      playPoke.health -= 1;
      result_div.innerHTML =
        typeChoice + " is super effective against " + compChoice + "! -3";
      cresult_div.innerHTML =
        compChoice + " is not very effective against " + typeChoice + "! -1";
      break;

    //super/normal -3/-2
    case "FightingNormal":
    case "FightingSteel":
    case "FightingIce":
    case "IceFlying":
    case "PsychicPoison":
    case "GroundSteel":
    case "GroundFire":
    case "WaterGround":
    case "IceGround":
    case "RockBug":
    case "WaterRock":
    case "GrassRock":
    case "RockIce":
    case "BugPsychic":
    case "BugDark":
    case "GhostPsychic":
    case "ElectricWater":
    case "IceGrass":
      compPoke.health -= 3;
      playPoke.health -= 2;
      result_div.innerHTML =
        typeChoice + " is super effective against " + compChoice + "! -3";
      cresult_div.innerHTML = compChoice + " hits " + typeChoice + "! -2";
      break;

    //super/super -3/-3
    case "DragonDragon":
    case "GhostGhost":
      compPoke.health -= 3;
      playPoke.health -= 3;
      result_div.innerHTML =
        typeChoice + " is super effective against " + compChoice + "! -3";
      cresult_div.innerHTML =
        compChoice + " is super effective against " + typeChoice + "! -3";
      break;

    //normal/normal -2/-2
    default:
      compPoke.health -= 2;
      playPoke.health -= 2;
      result_div.innerHTML = typeChoice + " hits " + compChoice + "! -2";
      cresult_div.innerHTML = compChoice + " hits " + typeChoice + "! -2";
      break;
  }

  var pHealth = playPoke.health;
  var cHealth = compPoke.health;

  switch (typeChoice) {
    case "Grass":
      grhp_span.innerHTML = pHealth;
      break;
    case "Fire":
      fihp_span.innerHTML = pHealth;
      break;
    case "Water":
      wahp_span.innerHTML = pHealth;
      break;
    case "Normal":
      nohp_span.innerHTML = pHealth;
      break;
    case "Flying":
      flhp_span.innerHTML = pHealth;
      break;
    case "Rock":
      rohp_span.innerHTML = pHealth;
      break;
    case "Ground":
      gdhp_span.innerHTML = pHealth;
      break;
    case "Psychic":
      pshp_span.innerHTML = pHealth;
      break;
    case "Ghost":
      ghhp_span.innerHTML = pHealth;
      break;
    case "Bug":
      buhp_span.innerHTML = pHealth;
      break;
    case "Electric":
      elhp_span.innerHTML = pHealth;
      break;
    case "Poison":
      pohp_span.innerHTML = pHealth;
      break;
    case "Fighting":
      fthp_span.innerHTML = pHealth;
      break;
    case "Fairy":
      fahp_span.innerHTML = pHealth;
      break;
    case "Ice":
      ichp_span.innerHTML = pHealth;
      break;
    case "Dragon":
      drhp_span.innerHTML = pHealth;
      break;
    case "Dark":
      dahp_span.innerHTML = pHealth;
      break;
    case "Steel":
      sthp_span.innerHTML = pHealth;
      break;
  }

  //Checks if the player pokemon faints
  if (pHealth <= 0) {
    switch (typeChoice) {
      case "Grass":
        grass_div.style.display = "none";
        grhp_span.style.display = "none";
        break;
      case "Fire":
        fire_div.style.display = "none";
        fihp_span.style.display = "none";
        break;
      case "Water":
        water_div.style.display = "none";
        wahp_span.style.display = "none";
        break;
      case "Normal":
        normal_div.style.display = "none";
        nohp_span.style.display = "none";
        break;
      case "Flying":
        flying_div.style.display = "none";
        flhp_span.style.display = "none";
        break;
      case "Rock":
        rock_div.style.display = "none";
        rohp_span.style.display = "none";
        break;
      case "Ground":
        ground_div.style.display = "none";
        gdhp_span.style.display = "none";
        break;
      case "Psychic":
        psychic_div.style.display = "none";
        pshp_span.style.display = "none";
        break;
      case "Ghost":
        ghost_div.style.display = "none";
        ghhp_span.style.display = "none";
        break;
      case "Bug":
        bug_div.style.display = "none";
        buhp_span.style.display = "none";
        break;
      case "Electric":
        electric_div.style.display = "none";
        elhp_span.style.display = "none";
        break;
      case "Poison":
        poison_div.style.display = "none";
        pohp_span.style.display = "none";
        break;
      case "Fighting":
        fighting_div.style.display = "none";
        fthp_span.style.display = "none";
        break;
      case "Fairy":
        fairy_div.style.display = "none";
        fahp_span.style.display = "none";
        break;
      case "Ice":
        ice_div.style.display = "none";
        ichp_span.style.display = "none";
        break;
      case "Dragon":
        dragon_div.style.display = "none";
        drhp_span.style.display = "none";
        break;
      case "Dark":
        dark_div.style.display = "none";
        dahp_span.style.display = "none";
        break;
      case "Steel":
        steel_div.style.display = "none";
        sthp_span.style.display = "none";
        break;
    }
    playerRoster--;
    playerRoster_div.innerHTML = playerRoster;
    compScore += Math.abs(pHealth);
    compScore_span.innerHTML = compScore;
  }

  //checks if the computer's pokemon faints
  if (cHealth <= 0) {
    compdex.splice(comp_choice, 1);
    twoPool--;
    compRoster--;
    compRoster_div.innerHTML = compRoster;
    playerScore += Math.abs(cHealth);
    userScore_span.innerHTML = playerScore;
  }

  //This could eventually be used both for a 2nd human player, and for a hypothetical
  //mode where you can see your opponant's pokemon health
  /*switch (compChoice){
      case "Normal":
        break;
  }*/

  battleResult(pHealth, cHealth);
}

function battleResult(pHealth, cHealth) {
  if (compRoster === 0 || playerRoster === 0) {
    gameEnd();
  }

  playHealth_span.innerHTML = pHealth + " /2";
  compHealth_span.innerHTML = cHealth + " /2";
}

function gameEnd() {
  //This ends the game, then resets everything.

  playerScore += playerRoster;
  compScore += compRoster;

  inPlay_div.style.display = "none";
  battleEnd_div.style.display = "block";
  endPlayScore_span.innerHTML = playerScore;
  endCompScore_span.innerHTML = compScore;

  if (playerScore > compScore) {
    //player wins
    endText_id.innerHTML = "You Win!";
  } else if (compScore > playerScore) {
    //comp wins
    endText_id.innerHTML = "You Lose!";
  } else {
    endText_id.innerHTML = "You Tied!";
  }
}

//fills the roster according to whatever is loaded into the pokedex
function fillRoster() {
  inPlay_div.style.display = "block";
  roster_div.style.display = "none";

  grass_div.innerHTML = playerdex[0].name;
  fire_div.innerHTML = playerdex[1].name;
  water_div.innerHTML = playerdex[2].name;
  normal_div.innerHTML = playerdex[3].name;
  flying_div.innerHTML = playerdex[4].name;
  rock_div.innerHTML = playerdex[5].name;
  ground_div.innerHTML = playerdex[6].name;
  psychic_div.innerHTML = playerdex[7].name;
  ghost_div.innerHTML = playerdex[8].name;
  bug_div.innerHTML = playerdex[9].name;
  electric_div.innerHTML = playerdex[10].name;
  poison_div.innerHTML = playerdex[11].name;
  fighting_div.innerHTML = playerdex[12].name;
  fairy_div.innerHTML = playerdex[13].name;
  ice_div.innerHTML = playerdex[14].name;
  dragon_div.innerHTML = playerdex[15].name;
  dark_div.innerHTML = playerdex[16].name;
  steel_div.innerHTML = playerdex[17].name;

  fight();
  //inPlay_div.style.display = "block";
}

function fight() {
  //roster_div.style.display = "none";
  //inPlay_div.style.direction = "block";

  grass_div.addEventListener("click", () => pokeFight(0)); //grass
  fire_div.addEventListener("click", () => pokeFight(1)); //fire
  water_div.addEventListener("click", () => pokeFight(2)); //water
  normal_div.addEventListener("click", () => pokeFight(3)); //normal
  flying_div.addEventListener("click", () => pokeFight(4)); //flying
  rock_div.addEventListener("click", () => pokeFight(5)); //rock
  ground_div.addEventListener("click", () => pokeFight(6)); //ground
  psychic_div.addEventListener("click", () => pokeFight(7)); //psychic
  ghost_div.addEventListener("click", () => pokeFight(8)); //ghost
  bug_div.addEventListener("click", () => pokeFight(9)); //bug
  electric_div.addEventListener("click", () => pokeFight(10)); //electric
  poison_div.addEventListener("click", () => pokeFight(11)); //poison
  fighting_div.addEventListener("click", () => pokeFight(12)); //fighting
  fairy_div.addEventListener("click", () => pokeFight(13)); //fairy
  ice_div.addEventListener("click", () => pokeFight(14)); //ice
  dragon_div.addEventListener("click", () => pokeFight(15)); //dragon
  dark_div.addEventListener("click", () => pokeFight(16)); //dark
  steel_div.addEventListener("click", () => pokeFight(17)); //steel
}

//this is where the user will choose their own pokemon, one for each type (initially)
function chooseRoster() {
  var grassChoice = document.getElementById("grass-roster").value;
  playerdex[0].name = grassChoice;
  var fireChoice = document.getElementById("fire-roster").value;
  playerdex[1].name = fireChoice;
  var waterChoice = document.getElementById("water-roster").value;
  playerdex[2].name = waterChoice;
  var normalChoice = document.getElementById("normal-roster").value;
  playerdex[3].name = normalChoice;
  var flyingChoice = document.getElementById("flying-roster").value;
  playerdex[4].name = flyingChoice;
  var rockChoice = document.getElementById("rock-roster").value;
  playerdex[5].name = rockChoice;
  var groundChoice = document.getElementById("ground-roster").value;
  playerdex[6].name = groundChoice;
  var psychicChoice = document.getElementById("psychic-roster").value;
  playerdex[7].name = psychicChoice;
  var ghostChoice = document.getElementById("ghost-roster").value;
  playerdex[8].name = ghostChoice;
  var bugChoice = document.getElementById("bug-roster").value;
  playerdex[9].name = bugChoice;
  var electricChoice = document.getElementById("electric-roster").value;
  playerdex[10].name = electricChoice;
  var poisonChoice = document.getElementById("poison-roster").value;
  playerdex[11].name = poisonChoice;
  var fightingChoice = document.getElementById("fighting-roster").value;
  playerdex[12].name = fightingChoice;
  var fairyChoice = document.getElementById("fairy-roster").value;
  playerdex[13].name = fairyChoice;
  var iceChoice = document.getElementById("ice-roster").value;
  playerdex[14].name = iceChoice;
  var dragonChoice = document.getElementById("dragon-roster").value;
  playerdex[15].name = dragonChoice;
  var darkChoice = document.getElementById("dark-roster").value;
  playerdex[16].name = darkChoice;
  var steelChoice = document.getElementById("steel-roster").value;
  playerdex[17].name = steelChoice;

  fillRoster();
}

function start() {
  roster_div.style.display = "block";
  startMenu_div.style.display = "none";
}

function main() {
  battleEnd_div.style.display = "none";
  inPlay_div.style.display = "none";
  roster_div.style.display = "none";
  startMenu_div.style.display = "block";

  //chooseRoster();
}

main();
