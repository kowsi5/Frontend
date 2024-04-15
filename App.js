
//import React, { useState } from 'react';
//import axios from 'axios';
//
//function App() {
//    const [player1Choice, setPlayer1Choice] = useState('');
//    const [player2Choice, setPlayer2Choice] = useState('');
//    const [result, setResult] = useState('');
//    const [rounds, setRounds] = useState(0);
//    const [player1Score, setPlayer1Score] = useState(0);
//    const [player2Score, setPlayer2Score] = useState(0);
//
//    const playRound = async () => {
//        try {
//            const response = await axios.post('http://localhost:3001/play', { player1Choice, player2Choice });
//            setResult(response.data.result);
//            setRounds(response.data.rounds);
//            setPlayer1Score(response.data.player1Score);
//            setPlayer2Score(response.data.player2Score);
//        } catch (error) {
//            console.error(error);
//        }
//    };
//
//    return (
//        <div>
//            <h1>Stone Paper Scissors </h1>
//            <div>
//                <label>Player 1 choice: </label>
//                <select value={player1Choice} onChange={e => setPlayer1Choice(e.target.value)}>
//                    <option value="">Select</option>
//                    <option value="stone">Stone</option>
//                    <option value="paper">Paper</option>
//                    <option value="scissors">Scissors</option>
//                </select>
//            </div>
//            <div>
//                <label>Player 2 choice: </label>
//                <select value={player2Choice} onChange={e => setPlayer2Choice(e.target.value)}>
//                    <option value="">Select</option>
//                    <option value="stone">Stone</option>
//                    <option value="paper">Paper</option>
//                    <option value="scissors">Scissors</option>
//                </select>
//            </div>
//            <button onClick={playRound}>Play Round</button>
//            <div>
//                <p>{result}</p>
//                <p>Player 1 Score: {player1Score}</p>
//                <p>Player 2 Score: {player2Score}</p>
//                <p>Rounds played: {rounds}</p>
//            </div>
//        </div>
//    );
//}
//
//export default App;
//=======================================================
//import React, { useState } from 'react';
//import axios from 'axios';
//
//function App() {
//    const [player1Name, setPlayer1Name] = useState('');
//    const [player2Name, setPlayer2Name] = useState('');
//    const [player1Choice, setPlayer1Choice] = useState('');
//    const [player2Choice, setPlayer2Choice] = useState('');
//    const [result, setResult] = useState('');
//    const [rounds, setRounds] = useState(0);
//    const [player1Score, setPlayer1Score] = useState(0);
//    const [player2Score, setPlayer2Score] = useState(0);
//
//    const playRound = async () => {
//        try {
//            const response = await axios.post('http://localhost:3001/play', { player1Name, player2Name, player1Choice, player2Choice });
//            // Handle the response
//        } catch (error) {
//            console.error(error);
//        }
//    };
//
//    return (
//        <div>
//            {/* Add input fields for player names */}
//            <input type="text" value={player1Name} onChange={e => setPlayer1Name(e.target.value)} placeholder="Player 1 Name" />
//            <input type="text" value={player2Name} onChange={e => setPlayer2Name(e.target.value)} placeholder="Player 2 Name" />
//            {/* Rest of your UI */}
//        </div>
//    );
//}
//
//export default App;

//================================
//import React, { useState, useEffect } from 'react';
//import axios from 'axios';
//
//function App() {
//    const [player1Name, setPlayer1Name] = useState('');
//    const [player2Name, setPlayer2Name] = useState('');
//    const [player1Choice, setPlayer1Choice] = useState('');
//    const [player2Choice, setPlayer2Choice] = useState('');
//    const [result, setResult] = useState('');
//    const [rounds, setRounds] = useState(0);
//    const [player1Score, setPlayer1Score] = useState(0);
//    const [player2Score, setPlayer2Score] = useState(0);
//    const [gameData, setGameData] = useState([]);
//
//    useEffect(() => {
//        axios.get('http://localhost:3001/game-data')
//            .then(response => {
//                setGameData(response.data);
//            })
//            .catch(error => {
//                console.error(error);
//            });
//    }, []);
//
//    const playRound = async () => {
//        try {
//            const response = await axios.post('http://localhost:3001/play', { player1Name, player2Name, player1Choice, player2Choice });
//            setResult(response.data.result);
//            setPlayer1Score(response.data.player1Score);
//            setPlayer2Score(response.data.player2Score);
//            setRounds(response.data.rounds);
//        } catch (error) {
//            console.error(error);
//        }
//    };
//
//    return (
//        <div>
//            {/* Add input fields for player names */}
//            <input type="text" value={player1Name} onChange={e => setPlayer1Name(e.target.value)} placeholder="Player 1 Name" />
//            <input type="text" value={player2Name} onChange={e => setPlayer2Name(e.target.value)} placeholder="Player 2 Name" />
//            {/* Rest of your UI */}
//            <button onClick={playRound}>Play Round</button>
//            <div>Result: {result}</div>
//            <div>Player 1 Score: {player1Score}</div>
//            <div>Player 2 Score: {player2Score}</div>
//            <div>Total Rounds: {rounds}</div>
//            <hr />
//            <h2>All Game Data</h2>
//            <ul>
//                {gameData.map((game, index) => (
//                    <li key={index}>
//                        {game.player1Name} vs {game.player2Name}: {game.result}
//                    </li>
//                ))}
//            </ul>
//        </div>
//    );
//}
//
//export default App;
//-------------------------------------------------------------
//---------------------------------------------------------------

//
//import React, { useState, useEffect } from 'react';
//import axios from 'axios';
//
//function App() {
//    const [player1Name, setPlayer1Name] = useState('');
//    const [player2Name, setPlayer2Name] = useState('');
//    const [player1Choice, setPlayer1Choice] = useState('');
//    const [player2Choice, setPlayer2Choice] = useState('');
//    const [result, setResult] = useState('');
//    const [rounds, setRounds] = useState(0);
//    const [player1Score, setPlayer1Score] = useState(0);
//    const [player2Score, setPlayer2Score] = useState(0);
//    const [gameData, setGameData] = useState([]);
//
//    useEffect(() => {
//        axios.get('http://localhost:3001/game-data')
//            .then(response => {
//                setGameData(response.data);
//            })
//            .catch(error => {
//                console.error(error);
//            });
//    }, []);
//
//    const playRound = async () => {
//        try {
//            const response = await axios.post('http://localhost:3001/play', { player1Name, player2Name, player1Choice, player2Choice });
//            setResult(response.data.result);
//            setPlayer1Score(response.data.player1Score);
//            setPlayer2Score(response.data.player2Score);
//            setRounds(response.data.rounds);
//        } catch (error) {
//            console.error(error);
//        }
//    };
//
//    return (
//        <div className="container">
//            <div className="game-container">
//                <h1>Stone Paper Scissors</h1>
//                <div className="players">
//                    <input type="text" value={player1Name} onChange={e => setPlayer1Name(e.target.value)} placeholder="Player 1 Name" />
//                    <input type="text" value={player2Name} onChange={e => setPlayer2Name(e.target.value)} placeholder="Player 2 Name" />
//                </div>
//                <div className="choices">
//                    <input type="text" value={player1Choice} onChange={e => setPlayer1Choice(e.target.value)} placeholder="Player 1 Choice" />
//                    <input type="text" value={player2Choice} onChange={e => setPlayer2Choice(e.target.value)} placeholder="Player 2 Choice" />
//                </div>
//                <button onClick={playRound}>Play Round</button>
//                <div className="result">
//                    <p>Result: {result}</p>
//                    <p>Player 1 Score: {player1Score}</p>
//                    <p>Player 2 Score: {player2Score}</p>
//                    <p>Total Rounds: {rounds}</p>
//                </div>
//            </div>
//            <hr />
//            <div className="game-data">
//                <h2>All Game Data</h2>
//                <ol>
//                    {gameData.map((game, index) => (
//                        <li key={index}>
//                            <p><strong>{game.player1Name}</strong> vs <strong>{game.player2Name}</strong></p>
//                            <ul>
//                                <li>Player 1 Choice: {game.player1Choice}</li>
//                                <li>Player 2 Choice: {game.player2Choice}</li>
//                                <li>Result: {game.result}</li>
//                            </ul>
//                        </li>
//                    ))}
//                </ol>
//            </div>
//        </div>
//    );
//}
//
//export default App;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [player1Name, setPlayer1Name] = useState('');
    const [player2Name, setPlayer2Name] = useState('');
    const [player1Choice, setPlayer1Choice] = useState('');
    const [player2Choice, setPlayer2Choice] = useState('');
    const [result, setResult] = useState('');
    const [rounds, setRounds] = useState(0);
    const [player1Score, setPlayer1Score] = useState(0);
    const [player2Score, setPlayer2Score] = useState(0);
    const [gameData, setGameData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/game-data')
            .then(response => {
                setGameData(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const playRound = async () => {
        try {
            const response = await axios.post('http://localhost:3001/play', { player1Name, player2Name, player1Choice, player2Choice });
            setResult(response.data.result);
            setPlayer1Score(response.data.player1Score);
            setPlayer2Score(response.data.player2Score);
            setRounds(response.data.rounds);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container">
            <div className="game-container">
                <h1>Stone Paper Scissors</h1>
                <div className="players">
                    <input type="text" value={player1Name} onChange={e => setPlayer1Name(e.target.value)} placeholder="Player 1 Name" />
                    <input type="text" value={player2Name} onChange={e => setPlayer2Name(e.target.value)} placeholder="Player 2 Name" />
                </div>
                <div className="choices">
                    <select value={player1Choice} onChange={e => setPlayer1Choice(e.target.value)}>
                        <option value="">Select Player 1 Choice</option>
                        <option value="stone">Stone</option>
                        <option value="paper">Paper</option>
                        <option value="scissors">Scissors</option>
                    </select>
                    <select value={player2Choice} onChange={e => setPlayer2Choice(e.target.value)}>
                        <option value="">Select Player 2 Choice</option>
                        <option value="stone">Stone</option>
                        <option value="paper">Paper</option>
                        <option value="scissors">Scissors</option>
                    </select>
                </div>
                <button onClick={playRound}>Play Round</button>
                <div className="result">
                    <p>Result: {result}</p>
                    <p>Player 1 Score: {player1Score}</p>
                    <p>Player 2 Score: {player2Score}</p>
                    <p>Total Rounds: {rounds}</p>
                </div>
            </div>
            <hr />
            <div className="game-data">
                <h2>All Game Data</h2>
                <ol>
                    {gameData.map((game, index) => (
                        <li key={index}>
                            <p><strong>{game.player1Name}</strong> vs <strong>{game.player2Name}</strong></p>
                            <ul>
                                <li>Player 1 Choice: {game.player1Choice}</li>
                                <li>Player 2 Choice: {game.player2Choice}</li>
                                <li>Result: {game.result}</li>
                            </ul>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

export default App;

//''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''


//===================================================================================================================


//import React, { useState } from 'react';
//import GameResults from './GameResults';
//import GameDataPage from './GameDataPage';
//
//function App() {
//  const [player1Name, setPlayer1Name] = useState('');
//  const [player2Name, setPlayer2Name] = useState('');
//  const [player1Choice, setPlayer1Choice] = useState('');
//  const [player2Choice, setPlayer2Choice] = useState('');
//  const [rounds, setRounds] = useState([]);
//  const [overallWinner, setOverallWinner] = useState('');
//
//  const playRound = () => {
//    // Simulate the game logic here
//    const winner = determineWinner(player1Choice, player2Choice);
//    const newRound = { player1Choice, player2Choice, winner };
//    setRounds([...rounds, newRound]);
//
//    // Calculate overall winner
//    if (winner === 'Player 1') {
//      setOverallWinner(player1Name);
//    } else if (winner === 'Player 2') {
//      setOverallWinner(player2Name);
//    } else {
//      setOverallWinner('Tie');
//    }
//  };
//
//  const determineWinner = (choice1, choice2) => {
//    // Game logic to determine the winner
//    // Implement your game logic here (e.g., stone beats scissors)
//    // Return 'Player 1' or 'Player 2' or 'Tie' based on the result
//    return 'Player 1'; // Sample result, replace with actual game logic
//  };
//
//  return (
//    <div className="container">
//      <div className="game-container">
//        <h1>Stone Paper Scissors</h1>
//        <div className="players">
//          <input type="text" value={player1Name} onChange={(e) => setPlayer1Name(e.target.value)} placeholder="Player 1 Name" />
//          <input type="text" value={player2Name} onChange={(e) => setPlayer2Name(e.target.value)} placeholder="Player 2 Name" />
//        </div>
//        <div className="choices">
//          <select value={player1Choice} onChange={(e) => setPlayer1Choice(e.target.value)}>
//            <option value="">Select Choice for Player 1</option>
//            <option value="stone">Stone</option>
//            <option value="paper">Paper</option>
//            <option value="scissors">Scissors</option>
//          </select>
//          <select value={player2Choice} onChange={(e) => setPlayer2Choice(e.target.value)}>
//            <option value="">Select Choice for Player 2</option>
//            <option value="stone">Stone</option>
//            <option value="paper">Paper</option>
//            <option value="scissors">Scissors</option>
//          </select>
//        </div>
//        <button onClick={playRound}>Play Round</button>
//      </div>
//      <hr />
//      <GameResults rounds={rounds} overallWinner={overallWinner} />
//    </div>
//  );
//}
//
//export default App;
