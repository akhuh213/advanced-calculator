import React, { useState } from 'react';
import './App.css'





function Calculator() {
    
    let [result, setResult ] = useState(0);
    let [numOne, setNumOne ] = useState('');
    let [numTwo, setNumTwo ] = useState('');
    let [operator, setOperator] = useState('');

    
    const pressNum = (e) => {
        setNumOne(numOne+e.target.value)
        setNumTwo(numTwo+e.target.value)
    }
    
    const pressOperator = (e) => {
        setNumOne()
        setOperator(e.target.value)
    }
        
        
    const calculate = (e) => {
        e.preventDefault()
        if(operator === '+' ){
            setResult(numOne+numTwo)
            setNumOne('')
            setNumTwo('')
            setOperator('')
        }
        if(operator === '-' ){
            setResult(numOne-numTwo)
            setNumOne('')
            setNumTwo('')
            setOperator('')
        }
        if(operator === '*') {
            setResult(numOne*numTwo)
            setNumOne('')
            setNumTwo('')
            setOperator('')

        } 
        if(operator === '/') {
            setResult(numOne/numTwo)
            setNumOne('')
            setNumTwo('')
            setOperator('')

        }
    }
    
    const clear = (e) => {
        setResult(0)
        setNumOne('')
        setNumTwo('')
        setOperator('')
    }


    return(
        <div ClassName="container">
            <div className="calc-container">
            <p>Values: {numOne || numTwo} {operator} {operator ? numOne : ' '}</p>
            <div classMName="result">{result}</div>
            <div className="calc-row">
                <button className="calc-button" onClick={pressNum} value="0">0</button>
                <button className="calc-button" onClick={pressNum} value="1">1</button>
                <button className="calc-button" onClick={pressNum} value="2">2</button>
            </div>
            <div className="calc-row">
                <button className="calc-button" onClick={pressNum} value="3">3</button>
                <button className="calc-button" onClick={pressNum} value="4">4</button>
                <button className="calc-button" onClick={pressNum} value="5">5</button>
            </div>
            <div className="calc-row">
                <button className="calc-button" onClick={pressNum} value="6">6</button>
                <button className="calc-button" onClick={pressNum} value="7">7</button>
                <button className="calc-button" onClick={pressNum} value="8">8</button>

            </div>
            <div className="calc-row">
                <button className="calc-button" onClick={pressNum} value="9">6</button>
                <button className="calc-button" onClick={pressOperator} value="+">+</button>
                <button className="calc-button" onClick={pressOperator} value="-">-</button>
            </div>
            <div className="calc-row">
                <button className="calc-button" onClick={pressOperator} value="*">x</button>
                <button className="calc-button" onClick={pressOperator} value="/">/</button>
                <button className="calc-button" onClick={clear} value="">C</button>
            </div>
            </div>

        </div>



    )

}


export default Calculator