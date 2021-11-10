import React, { useState } from 'react';
import "./Tic.css";

const Tic = () => {
    const[turn, setTurn] = useState("X");
    const[cells, setCells] = useState(Array(9).fill(""));
    const[winner, setWinner] = useState();
    
    const CheckWinner = (squares) => {
        let matrix = {
            rows:[
                [0,1,2],
                [3,4,5],
                [6,7,8]
            ],
            cols:[
                [0,3,6],
                [1,4,7],
                [2,5,8]
            ],
            diags:[
                [0,4,8],
                [2,4,6]
            ]

        };

        for(let combo in matrix){
            matrix[combo].forEach((pattern) =>{
                if(
                    squares[pattern[0]] === '' ||
                    squares[pattern[1]] === '' ||
                    squares[pattern[2]] === '' 
                ){
                    //nothing
                }else if(
                    squares[pattern[0]] === squares[pattern[1]] &&
                    squares[pattern[1]] === squares[pattern[2]]
                ){
                    setWinner(squares[pattern[0]])
                }
            });
        };
    };

    const handleClick = (num) => {
        if(cells[num] !== ""){
            alert("already clicked");
            return;
        }
        let squares = [...cells];

        if(turn === 'X'){
            squares[num] = "X";
            setTurn("O");
        }else{
            squares[num] = "O";
            setTurn("X");
        }

        CheckWinner(squares);
        setCells(squares);
       
    };

    const handleRestart = () => {
        setWinner(null);
        setCells(Array(9).fill(''));
    };

    const Cell = ({num}) => {
        return <td onClick={() => handleClick(num)}>{cells[num]}</td>
    };


    return (
        
        <div className="container">
            <table>
                Turn: {turn}
                <tbody>
                    <tr>
                        <Cell num={0} />
                        <Cell num={1} />
                        <Cell num={2} />
                    </tr>
                    <tr>
                        <Cell num={3} />
                        <Cell num={4} />
                        <Cell num={5} />
                    </tr>
                    <tr>
                        <Cell num={6} />
                        <Cell num={7} />
                        <Cell num={8} />
                    </tr>
                </tbody>
            </table>
            {winner && 
                <>
                    <h1> <span class="winner">{winner}</span> is the Winner</h1>
                    <button onClick= {() => handleRestart()}>Play Again!</button>
                </>
            
            }
        </div>
    );
};

export default Tic;
