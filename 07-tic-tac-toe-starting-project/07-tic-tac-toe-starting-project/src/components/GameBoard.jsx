
export default function GameBoard({ onSelectSquare,  board }) {
 
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);
  // function handleGameBoard(rowIndex,colIndex){
  //     setGameBoard((prevGameBoard) => {
  //        const upDatedBoard = [...prevGameBoard.map(innerArray=>[...innerArray])];
  //        upDatedBoard [rowIndex][colIndex]=activePlayerSymbol;
  //        return upDatedBoard;
  //     });
  //     onSelectSquare();
  // }
  return (
    <ol id="game-board">
      { board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol != null}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
