const ImageNom = [
    {image: "/img/SpongeBob.png", nom :"Bob l'éponge"},
    {image: "/img/NicoRobinFigurine.png", nom :"Nico Robin"},
    {image: "/img/SSBUGame.png", nom :"SuperSmashBros Ultimate"},
    {image: "/img/ManetteGameCube.png", nom :"Manette GameCube"},
    {image: "/img/TomeBatmanDamned.jpg", nom :"Tome Batman Damned"},
];
let commencer = document.getElementById("startButton");
let remainingAttempts = document.getElementById("remainingAttempts");
let guessInput = document.getElementById("guessInput");
let guessButton = document.getElementById("guessButton");
let result = document.getElementById("result");
let selectedPrice= Math.floor(Math.random() * 101);
let numberOfAttempts = 10;
let restart = document.getElementById("restart");
let gameContainer = document.getElementById('gameContainer');


  // Se montre quand la page se charge
  window.onload = function () {
    let popup = document.querySelector('.popup');
    popup.style.display = 'block';
    //masque la card jusqu'a cliquer sur "Commencer"
    gameContainer.style.visibility ='hidden';
}


function getRandomItem() {
    return ImageNom[Math.floor(Math.random() * ImageNom.length)];
}
function displayRandomItem() {
    const ImageNom = getRandomItem();
    document.getElementById("image-item").src = ImageNom.image;
    document.getElementById("name-item").innerText = ImageNom.nom;
}
function startGame() {
    // permet l'utilisation de l'input field et du "guess" bouton
    guessInput.disabled = false;
    guessButton.disabled = false;
    guessInput.value = "";
    restart.style.visibility = "hidden";
    // Selectionne un item aleatoirement
    randomIndex = Math.floor(Math.random() * ImageNom.length);
    
    // Affiche la card après avoir cliquer sur "Commencer"
    gameContainer.style.visibility = "visible";
}

function checkGuess() {
    let playerGuess = Number(guessInput.value);

    if (playerGuess === selectedPrice) {
        result.textContent = "Félicitations!";
        restart.style.visibility = 'visible';
    } else {
        remainingAttempts.textContent = "Vous avez " + numberOfAttempts + " chances pour deviner le prix exact.";

        if (numberOfAttempts === 0) {
            result.textContent = "Dommage, le prix était de : " + selectedPrice +" €.";
            guessInput.disabled = true;
            guessButton.disabled = true;
            restart.style.visibility = 'visible';
            numberOfAttempts = 10;
        } else if(playerGuess > selectedPrice) {
                numberOfAttempts--;
                result.textContent = "Moins Cher!";
              } else if (playerGuess < selectedPrice) {
                numberOfAttempts--;
                result.textContent= "Plus cher!";
              }
              else{
            result.textContent = "Faux! Veuillez réesayer.";
        }
    }
    // Remettre à 0 
    document.getElementById("guessInput").value = "";
}


commencer.addEventListener("click", startGame);
guessButton.addEventListener("click", checkGuess);
restart.addEventListener("click", startGame);
restart.addEventListener("click", displayRandomItem);
displayRandomItem();


// Fermeture du popup quand on clique sur la croix ou sur BonChan :D
let closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click', function () {
    let popup = document.querySelector('.popup');
    popup.style.display = 'none';
});
let BonChan = document.querySelector('.BonChan');
    BonChan.addEventListener('click', function () {
    let popup = document.querySelector('.popup');
    popup.style.display = 'none';
});