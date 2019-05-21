/*
 * This code is all a mess
 * But it technically works
 * So when I get the prototype finished
 * Maybe I'll refactor and clean this up
 * But this is a learning experience for me
 * And I'm having a lot of fun
 * On my big cool computer
 * Making Pokemon games
 */

var playerScore = 0;
var compScore = 0;

const userScore_span = document.getElementById("player-score");
const compScore_span = document.getElementById("comp-score");

var playerRoster = 18;
var compRoster = 18;

const playerRoster_div = document.getElementById("player-roster");
const compRoster_div = document.getElementById("comp-roster");

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

var playerdex = [
  { id: 1, name: "Bulbasaur", type: "Grass", health: 2 },
  { id: 2, name: "Charmander", type: "Fire", health: 2 },
  { id: 3, name: "Squirtle", type: "Water", health: 2 },
  { id: 4, name: "Ratatta", type: "Normal", health: 2 },
  { id: 5, name: "Spearow", type: "Flying", health: 2 },
  { id: 6, name: "Onix", type: "Rock", health: 2 },
  { id: 7, name: "Diglett", type: "Ground", health: 2 },
  { id: 8, name: "Abra", type: "Psychic", health: 2 },
  { id: 9, name: "Gastly", type: "Ghost", health: 2 },
  { id: 10, name: "Caterpie", type: "Bug", health: 2 },
  { id: 11, name: "Pikachu", type: "Electric", health: 2 },
  { id: 12, name: "Nidoran", type: "Poison", health: 2 },
  { id: 13, name: "Machop", type: "Fighting", health: 2 },
  { id: 14, name: "Jigglypuff", type: "Fairy", health: 2 },
  { id: 15, name: "Seel", type: "Ice", health: 2 },
  { id: 16, name: "Dratini", type: "Dragon", health: 2 },
  { id: 17, name: "Poochyena", type: "Dark", health: 2 },
  { id: 18, name: "Steelix", type: "Steel", health: 2 }
];

var compdex = [
  { id: 1, name: "Bulbasaur", type: "Grass", health: 2 },
  { id: 2, name: "Charmander", type: "Fire", health: 2 },
  { id: 3, name: "Squirtle", type: "Water", health: 2 },
  { id: 4, name: "Ratatta", type: "Normal", health: 2 },
  { id: 5, name: "Spearow", type: "Flying", health: 2 },
  { id: 6, name: "Onix", type: "Rock", health: 2 },
  { id: 7, name: "Diglett", type: "Ground", health: 2 },
  { id: 8, name: "Abra", type: "Psychic", health: 2 },
  { id: 9, name: "Gastly", type: "Ghost", health: 2 },
  { id: 10, name: "Caterpie", type: "Bug", health: 2 },
  { id: 11, name: "Pikachu", type: "Electric", health: 2 },
  { id: 12, name: "Nidoran", type: "Poison", health: 2 },
  { id: 13, name: "Machop", type: "Fighting", health: 2 },
  { id: 14, name: "Jigglypuff", type: "Fairy", health: 2 },
  { id: 15, name: "Seel", type: "Ice", health: 2 },
  { id: 16, name: "Dratini", type: "Dragon", health: 2 },
  { id: 17, name: "Poochyena", type: "Dark", health: 2 },
  { id: 18, name: "Steelix", type: "Steel", health: 2 }
];

var onePool = playerdex.length;
var twoPool = compdex.length;

var playerPokemon = "";
var compPokemon = "";

var comp_choice = 0;

function getCompChoice() {
  comp_choice = Math.floor(Math.random() * twoPool);
  console.log(comp_choice);
  return compdex[comp_choice];
}

//ADD NOT VERY EFFECTIVE OPTION

function win(typeChoice, compChoice, playPoke, compPoke) {
  var c = compPoke.health;
  var p = playPoke.health;
  switch (typeChoice + compChoice) {
    case "GroundElectric":
      result_div.innerHTML =
        compChoice + " doesn't even touch " + typeChoice + "! You win!";
      c = c - 3;
      break;
    default:
      result_div.innerHTML = typeChoice + " beats " + compChoice + ". You win!";
      c = c - 3;
      p = p - 2;
      break;
  }

  fight(p, c, playPoke, compPoke);
  playerScore++;
  userScore_span.innerHTML = playerScore;
}

function lose(typeChoice, compChoice, playPoke, compPoke) {
  var c = compPoke.health;
  var p = playPoke.health;
  switch (typeChoice + compChoice) {
    case "ElectricGround":
      result_div.innerHTML =
        typeChoice + " doesn't even touch " + compChoice + "! You lose!";
      p = p - 3;
      break;
    default:
      result_div.innerHTML =
        compChoice + " beats " + typeChoice + ". You lose!";
      p = p - 3;
      c = c - 2;
      break;
  }

  fight(p, c, playPoke, compPoke);
  compScore++;
  compScore_span.innerHTML = compScore;
}

function draw(typeChoice, compChoice, playPoke, compPoke) {
  var c = compPoke.health;
  var p = playPoke.health;

  p = p - 2;
  c = c - 2;

  fight(p, c, playPoke, compPoke);
  result_div.innerHTML =
    typeChoice + " and " + compChoice + " tie! Nothing happens.";
}

function doubleElim(typeChoice, compChoice, playPoke, compPoke) {
  //dragon and ghost
  var c = compPoke.health;
  var p = playPoke.health;
  result_div.innerHTML =
    typeChoice +
    " and " +
    compChoice +
    " knock each other out! Double Elimination!";

  p = p - 3;
  c = c - 3;

  fight(p, c, playPoke, compPoke);
  playerScore++;
  compScore++;
  userScore_span.innerHTML = playerScore;
  compScore_span.innerHTML = compScore;
}

function ethereal(typeChoice, compChoice, playPoke, compPoke) {
  //any ghost/fighting or ghost/normal combo
  result_div.innerHTML =
    typeChoice +
    " and " +
    compChoice +
    " just pass right through each other! Nothing happens.";
}

//something about poison not effecting steel, though steel isn't super effective against poison?

function fight(p, c, playPoke, compPoke) {
  //deals with pokemon health

  var tempType = playPoke.type;

  compPoke.health = c;
  playPoke.health = p;

  switch (c) {
    case c === 0:
      break;
    case c < 0:
      break;
    default:
      break;
  }

  switch (p) {
    case p === 0:
      removePoke(tempType);
      break;
    case p < 0:
      removePoke(tempType);
      break;
    default:
      break;
  }

  compScore = compScore + Math.abs(x);
  console.log(compScore);
}

function removePoke(tempType) {
  switch (tempType) {
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
}

function pokeChoice(playerChoice) {
  const compPoke = getCompChoice();
  const compChoice = compPoke.type;
  const playPoke = playerdex[playerChoice];
  const typeChoice = playPoke.type;

  playerPokemon = playPoke.name;
  compPokemon = compPoke.name;

  compdex.splice(comp_choice, 1);
  twoPool--;
  compRoster--;
  compRoster_div.innerHTML = compRoster;

  console.log(compdex);

  playerOne_div.innerHTML = playerPokemon;
  playerTwo_div.innerHTML = compPokemon;

  //checks the playerone/playertwo matchup and deals accordingly
  switch (typeChoice + compChoice) {
    case "GrassWater":
    case "GrassGround":
    case "GrassRock":
      win(typeChoice, compChoice);
      break;
    case "FireGrass":
    case "FireBug":
    case "FireIce":
    case "FireSteel":
      win(typeChoice, compChoice);
      break;
    case "WaterFire":
    case "WaterGround":
    case "WaterRock":
      win(typeChoice, compChoice);
      break;
    case "FlyingGrass":
    case "FlyingFighting":
    case "FlyingBug":
      win(typeChoice, compChoice);
      break;
    case "RockFire":
    case "RockIce":
    case "RockFlying":
    case "RockBug":
      win(typeChoice, compChoice);
      break;
    case "GroundFire":
    case "GroundElectric":
    case "GroundPoison":
    case "GroundRock":
    case "GroundSteel":
      win(typeChoice, compChoice);
      break;
    case "PsychicFighting":
    case "PsychicPoison":
      win(typeChoice, compChoice);
      break;
    case "GhostPsychic":
      win(typeChoice, compChoice);
      break;
    case "BugGrass":
    case "BugPsychic":
    case "BugDark":
      win(typeChoice, compChoice);
      break;
    case "ElectricWater":
    case "ElectricFlying":
      win(typeChoice, compChoice);
      break;
    case "PoisonGrass":
    case "PoisonFairy":
      win(typeChoice, compChoice);
      break;
    case "FightingNormal":
    case "FightingIce":
    case "FightingRock":
    case "FightingDark":
    case "FightingSteel":
      win(typeChoice, compChoice);
      break;
    case "FairyFighting":
    case "FairyDragon":
    case "FairyDark":
      win(typeChoice, compChoice);
      break;
    case "IceGrass":
    case "IceGround":
    case "IceFlying":
    case "IceDragon":
      win(typeChoice, compChoice);
      break;
    case "DarkPsychic":
    case "DarkGhost":
      win(typeChoice, compChoice);
      break;
    case "SteelIce":
    case "SteelRock":
    case "SteelFairy":
      win(typeChoice, compChoice);
      break;

    case "GrassFire":
    case "GrassIce":
    case "GrassPoison":
    case "GrassFlying":
    case "GrassBug":
      lose(typeChoice, compChoice);
      break;
    case "FireWater":
    case "FireGround":
    case "FireRock":
      lose(typeChoice, compChoice);
      break;
    case "WaterGrass":
    case "WaterElectric":
      lose(typeChoice, compChoice);
      break;
    case "NormalFighting":
      lose(typeChoice, compChoice);
      break;
    case "FlyingElectric":
    case "FlyingIce":
    case "FlyingRock":
      lose(typeChoice, compChoice);
      break;
    case "RockWater":
    case "RockGrass":
    case "RockFighting":
    case "RockGround":
      lose(typeChoice, compChoice);
      break;
    case "GroundWater":
    case "GroundGrass":
    case "GroundIce":
      lose(typeChoice, compChoice);
      break;
    case "PsychicBug":
    case "PsychicGhost":
    case "PsychicDark":
      lose(typeChoice, compChoice);
      break;
    case "GhostDark":
      lose(typeChoice, compChoice);
      break;
    case "BugFire":
    case "BugFlying":
    case "BugRock":
      lose(typeChoice, compChoice);
      break;
    case "ElectricGround":
      lose(typeChoice, compChoice);
      break;
    case "PoisonGround":
    case "PoisonPsychic":
      lose(typeChoice, compChoice);
      break;
    case "FightingFlying":
    case "FightingPsychic":
    case "FightingFairy":
      lose(typeChoice, compChoice);
      break;
    case "FairyPoison":
    case "FairySteel":
      lose(typeChoice, compChoice);
      break;
    case "IceFire":
    case "IceFighting":
    case "IceRock":
    case "IceSteel":
      lose(typeChoice, compChoice);
      break;
    case "DragonIce":
    case "DragonFairy":
      lose(typeChoice, compChoice);
      break;
    case "DarkFighting":
    case "DarkBug":
    case "DarkFairy":
      lose(typeChoice, compChoice);
      break;
    case "SteelFire":
    case "SteelFighting":
    case "SteelGround":
      lose(typeChoice, compChoice);
      break;

    case "GhostGhost":
    case "DragonDragon":
      doubleElim(typeChoice, compChoice);
      break;

    case "FightingGhost":
    case "NormalGhost":
    case "GhostFighting":
    case "GhostNormal":
      ethereal(typeChoice, compChoice);
      break;

    default:
      draw(typeChoice, compChoice);
      break;
  }

  //current system where you can only use each pokemon once
  //will be modified when the hp system is implemented properly
  //only represents the player's choices, not the computer's
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
}

function main() {
  //returns a click-based number that corresponds with an index

  grass_div.addEventListener("click", () => pokeChoice(0)); //grass
  fire_div.addEventListener("click", () => pokeChoice(1)); //fire
  water_div.addEventListener("click", () => pokeChoice(2)); //water
  normal_div.addEventListener("click", () => pokeChoice(3)); //normal
  flying_div.addEventListener("click", () => pokeChoice(4)); //flying
  rock_div.addEventListener("click", () => pokeChoice(5)); //rock
  ground_div.addEventListener("click", () => pokeChoice(6)); //ground
  psychic_div.addEventListener("click", () => pokeChoice(7)); //psychic
  ghost_div.addEventListener("click", () => pokeChoice(8)); //ghost
  bug_div.addEventListener("click", () => pokeChoice(9)); //bug
  electric_div.addEventListener("click", () => pokeChoice(10)); //electric
  poison_div.addEventListener("click", () => pokeChoice(11)); //poison
  fighting_div.addEventListener("click", () => pokeChoice(12)); //fighting
  fairy_div.addEventListener("click", () => pokeChoice(13)); //fairy
  ice_div.addEventListener("click", () => pokeChoice(14)); //ice
  dragon_div.addEventListener("click", () => pokeChoice(15)); //dragon
  dark_div.addEventListener("click", () => pokeChoice(16)); //dark
  steel_div.addEventListener("click", () => pokeChoice(17)); //steel

  console.log("Gotta Catch 'em All!");
}

main();
