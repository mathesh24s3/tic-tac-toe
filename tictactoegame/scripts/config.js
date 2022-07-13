function openPlayerConfigOverlay(event) {
  editedPlayer = +event.target.dataset.playerid;
  configOverlayElement.style.display = "block";
  backdropELement.style.display = "block";
}

function closePlayerConfigOverlay() {
  configOverlayElement.style.display = "none";
  backdropELement.style.display = "none";
  formELement.firstElementChild.classList.remove('error');
  errorOutputELement.textContent = '';
  formELement.firstElementChild.lastElementChild.value = ' ' ;
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("playerName").trim();
  if(!enteredPlayerName) {
    event.target.firstElementChild.classList.add('error')
    errorOutputELement.textContent = 'Please enter a valid name!';
    return;
  }
  const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
  updatedPlayerDataElement.children[1].textContent = enteredPlayerName;
  players[editedPlayer-1].name =  enteredPlayerName;
  console.log(players);
  closePlayerConfigOverlay();
}

