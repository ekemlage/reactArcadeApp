import "./styling.css";
import { useState } from 'react';

export default function TicTacToe(){
    const [turnTracker, setTurnTracker] = useState(0); 
    let letters = ["X","O"]
    let blankBoard = ["","","","","","","","",""];
    const [turnMessage, setTurnMessage] = useState("Player 1's Turn");
    const [gameBoard, setGameBoard] = useState(blankBoard); 
    const [message, setMessage] = useState("");
    let winArray = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    const [won, setWon] = useState("false");
    
    let gradeBoard = function(gameBoard){       
        for(let i=0; i<winArray.length; i++){
            let a = winArray[i][0];
            let b = winArray[i][1];
            let c = winArray[i][2];
            if(gameBoard[a]!="" && gameBoard[a]===gameBoard[b] && gameBoard[a]===gameBoard[c]){
                if(gameBoard[a]===letters[0] && won ==="false"){
                    setMessage(<div><div>Player 1 Wins!</div><button onClick={handleNewGame}>New Game</button></div>);
                    setWon("true");
                    setTurnMessage("");
                    setTurnTracker(turnTracker+1)
                }
                if(gameBoard[a]===letters[1] && won ==="false"){
                    setMessage(<div><div>Player 2 Wins!</div><button onClick={handleNewGame}>New Game</button></div>);
                    setWon("true");
                    setTurnMessage("");
                    setTurnTracker(turnTracker+1)
                }   
            }
            if(!gameBoard.includes("")){
                setTurnTracker(turnTracker+4)
            }
            if(turnTracker>8 && won!="true"){//8 cant win last move //9cant tie
                setMessage(<div><div>Tie Game!</div><button onClick={handleNewGame}>New Game</button></div>);
            }

        }
        //if(!gameBoard.includes("") && won!="true"){ //cant win on last move, tie works
        //if(turnTracker===9 && won!="true"){//8 cant win last move //9cant tie
            //setMessage(<div><div>Tie Game!</div><button onClick={handleNewGame}>New Game</button></div>);
        //}
    }

    const handleNewGame = () => {
        setGameBoard(blankBoard);
        setMessage("");
        setTurnTracker(0);
        setTurnMessage("Player 1's Turn")
        setWon("false");
    }

    const handleClick = (space) => {            
        if(gameBoard[space]==="" && won==="false"){ 
            if(turnTracker%2===0){ 
                gameBoard[space] = letters[0]; //x
                setTurnMessage("Player 2's Turn");
                setMessage("");
                gradeBoard(gameBoard);
            }else{
                gameBoard[space] = letters[1]; //o
                setTurnMessage("Player 1's Turn");
                setMessage("");
                gradeBoard(gameBoard);
            }   
            setTurnTracker(turnTracker+1);
        }else{
            if(won!="true"){
                setMessage("Choose a different space");
            }
        }
    }
    
    
    return (
        <div>
            <table>
                <tbody id="gameBoard">
                    <tr>
                        <td onClick={() => handleClick(0)} class ="gameBoard">{gameBoard[0]}</td>
                        <td onClick={() => handleClick(1)} class ="column2 gameBoard">{gameBoard[1]}</td>
                        <td onClick={() => handleClick(2)} class ="gameBoard">{gameBoard[2]}</td>
                    </tr>
                    <tr id="row2">
                        <td onClick={() => handleClick(3)} class ="gameBoard row2">{gameBoard[3]}</td>
                        <td onClick={() => handleClick(4)} class ="column2 gameBoard row2">{gameBoard[4]}</td>
                        <td onClick={() => handleClick(5)} class ="gameBoard row2">{gameBoard[5]}</td>
                    </tr>
                    <tr>
                        <td onClick={() => handleClick(6)} class ="gameBoard">{gameBoard[6]}</td>
                        <td onClick={() => handleClick(7)} class ="column2 gameBoard">{gameBoard[7]}</td>
                        <td onClick={() => handleClick(8)} class ="gameBoard">{gameBoard[8]}</td>
                    </tr>
                    <tr>
                        <th colspan="3">{turnMessage}</th>
                    </tr>
                    <tr>
                        <th colspan="3">{message}</th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}