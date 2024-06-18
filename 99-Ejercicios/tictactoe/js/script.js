// Espere a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  const gameContainer = document.getElementById('game');
  const statusDisplay = document.getElementById('status');
  const resetButton = document.getElementById('reset');

  let gameActive = true; // Estado del juego para rastrear si el juego está en curso
  let currentPlayer = 'X'; // Rastrear al jugador actual
  let gameState = ["", "", "", "", "", "", "", "", ""]; // Almacenar el estado actual de la placa.

  const winningMessage = () => `Jugador ${currentPlayer} ganó!`; // Mensaje a l ganador
  const drawMessage = () => `¡El juego terminó en empate!`; // Mensaje para un empate
  const currentPlayerTurn = () => `Es el turno de ${currentPlayer}`; // Mensaje para el turno del jugador actual.

  statusDisplay.innerHTML = currentPlayerTurn(); // Mostrar el turno del jugador inicial.

  // Posibles combinaciones ganadoras
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  // Manejar una celda que se está reproduciendo
  function handleCellPlayed(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPlayer; // Actualizar el estado del juego
    clickedCell.innerHTML = currentPlayer; // Mostrar la marca del jugador actual
  }

  // Cambiar al otro jugador
  function handlePlayerChange() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusDisplay.innerHTML = currentPlayerTurn(); // Actualizar la pantalla de estado
  }

  // Comprueba si el juego ha sido ganado o si es un empate
  function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
      const winCondition = winningConditions[i];
      let a = gameState[winCondition[0]];
      let b = gameState[winCondition[1]];
      let c = gameState[winCondition[2]];
      if (a === '' || b === '' || c === '') {
        continue;
      }
      if (a === b && b === c) {
        roundWon = true;
        break;
      }
    }

    if (roundWon) {
      statusDisplay.innerHTML = winningMessage();
      gameActive = false;
      return;
    }

    let roundDraw = !gameState.includes("");
    if (roundDraw) {
      statusDisplay.innerHTML = drawMessage();
      gameActive = false;
      return;
    }

    handlePlayerChange();

    if (currentPlayer === 'O') {
      setTimeout(handleComputerMove, 500); // Retraso para turno la computadora
    }
  }

  // Manejar evento de clic en celda
  function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(
      clickedCell.getAttribute('data-cell-index')
    );

    if (gameState[clickedCellIndex] !== "" || !gameActive || currentPlayer !== 'X') {
      return;
    }

    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
  }

  // Restablecer el juego a su estado inicial.
  function handleRestartGame() {
    gameActive = true;
    currentPlayer = 'X';
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.square').forEach(cell => cell.innerHTML = "");
  }

  // Crea el tablero de juego
  function createBoard() {
    gameContainer.innerHTML = '';
    for (let i = 0; i < 9; i++) {
      const cell = document.createElement('div');
      cell.classList.add('square');
      cell.setAttribute('data-cell-index', i);
      cell.addEventListener('click', handleCellClick);
      gameContainer.appendChild(cell);
    }
  }

  // Manejar el movimiento de la computadora
  function handleComputerMove() {
    if (!gameActive) return;

    // Encuentra una celda vacía para que la computadora juegue
    let availableCells = gameState.map((cell, index) => cell === "" ? index : null).filter(index => index !== null);
    if (availableCells.length === 0) return;

    // IA simple: seleccione aleatoriamente una celda vacía
    const randomCellIndex = availableCells[Math.floor(Math.random() * availableCells.length)];
    const cell = document.querySelector(`[data-cell-index='${randomCellIndex}']`);
    handleCellPlayed(cell, randomCellIndex);
    handleResultValidation();
  }

  resetButton.addEventListener('click', handleRestartGame); // Agregar detector de eventos al botón de reinicio

  createBoard(); // Crear el tablero en la carga inicial
});
