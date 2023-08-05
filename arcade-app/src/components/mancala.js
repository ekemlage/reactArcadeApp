import "./styling.css";
import { useState } from 'react';

export default function Mancala(){   
    const [turnTracker, setTurnTracker] = useState(0); 
    let blankBoard = [0,4,4,4,4,4,4,0,4,4,4,4,4,4];
    const [turnMessage, setTurnMessage] = useState("Player 1's Turn");
    const [gameBoard, setGameBoard] = useState(blankBoard); 
    let won = "false";
    const [message, setMessage] = useState("");
    let chosenBeans = 0;
    //const [won, setWon] = useState("false");

    const moveBeans = (chosenBeans, space) => {
        for(let i=0; i<=chosenBeans; i++){
            gameBoard[space+i]=gameBoard[space+i]+1;
        }
    } 

    const handleClick = (space) => {            
        if(gameBoard[space]>0 && won==="false"){ 
            if(turnTracker%2===0){ 
                chosenBeans = gameBoard[space];
                moveBeans(chosenBeans, space);
                gameBoard[space] = 0;
                setTurnMessage("Player 2's Turn");
                setMessage("");
                //gradeBoard(gameBoard);
            }else{
                chosenBeans = gameBoard[space];
                moveBeans(chosenBeans, space);
                gameBoard[space] = 0;
                setTurnMessage("Player 1's Turn");
                setMessage("");
                //gradeBoard(gameBoard);
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
            <table id="mancalaTable">
                <tr>
                <td colspan="10">Player 1's Pits</td>
                </tr>
                <tr>
                    <td rowspan="3">Player 1's Store</td>
                    <td rowspan="3" class="mancalaSpace">{gameBoard[0]}a</td>
                    <td onClick={() => handleClick(1)} class="mancalaSpace">{gameBoard[1]}b</td>
                    <td onClick={() => handleClick(2)} class="mancalaSpace">{gameBoard[2]}c</td>
                    <td onClick={() => handleClick(3)} class="mancalaSpace">{gameBoard[3]}d</td>
                    <td onClick={() => handleClick(4)} class="mancalaSpace">{gameBoard[4]}e</td>
                    <td onClick={() => handleClick(5)} class="mancalaSpace">{gameBoard[5]}f</td>
                    <td onClick={() => handleClick(6)} class="mancalaSpace">{gameBoard[6]}g</td>
                    <td  rowspan="3" class="mancalaSpace">{gameBoard[7]}h</td>
                    <td rowspan="3">Player 2's Store</td>
                </tr>
                <tr>                  
                    <th colspan="6" class="mancalaSpace">{turnMessage}{message}</th>
                </tr>
                <tr>
                    <td onClick={() => handleClick(13)} class="mancalaSpace">{gameBoard[13]}n</td>
                    <td onClick={() => handleClick(12)} class="mancalaSpace">{gameBoard[12]}m</td>
                    <td onClick={() => handleClick(11)} class="mancalaSpace">{gameBoard[11]}l</td>
                    <td onClick={() => handleClick(10)} class="mancalaSpace">{gameBoard[10]}k</td>
                    <td onClick={() => handleClick(9)} class="mancalaSpace">{gameBoard[9]}j</td>
                    <td onClick={() => handleClick(8)} class="mancalaSpace">{gameBoard[8]}i</td>
                </tr>
                <tr>
                <td colspan="10">Player 2's Pits</td>
                </tr>
            </table>
        </div>
    );
}