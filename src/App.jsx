import { useState } from 'react'
import './App.css'
import { languages } from './languages'

export default function App(){

    const [ currentWord, setCurrentWord ] = useState("react");

    const letters = "abcdefghijklmnopqrstuvwxyz"

    const wordBox = Array.from(currentWord).map((letter, index) => {
        return (
            <span className='word-letter' key={index}>{letter.toUpperCase()}</span>
        )
    })

    const keyboard = Array.from(letters).map(letter => {
        return (
            <button className='alphabet' key={letter}>{letter.toUpperCase()}</button>
        )
    })

    const langBoxes = languages.map((obj) => {
        const styles = {
            backgroundColor : obj.backgroundColor,
            color : obj.color,
            padding: "5px",
            borderRadius: "5px"
        }
        return (
            <div style={styles} key={obj.name}>{obj.name}</div>
        )
    })

    return (
        <main>
            <hgroup>
                <h3>Assembly: Endgame</h3>
                <p>Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
            </hgroup>
            <section className="status-bar">
                <h3>You Win</h3>
                <p>Well done! 🎉</p>
            </section>
            <section className="langBoxContainer">
                {langBoxes}
            </section>
            <section className="wordBox">
                {wordBox}
            </section>
            <section className="key-board">
                {keyboard}
            </section>
            <button className="new-game-btn">New Game</button>
        </main>
    )
}