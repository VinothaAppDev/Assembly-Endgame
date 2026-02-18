import { useState } from 'react'
import './App.css'
import { languages } from './languages'

export default function App(){
    const [ currentWord, setCurrentWord ] = useState("react");

    const wordBox = Array.from(currentWord).map(letter => {
        return (
            <span className='letter' key={letter}>{letter.toUpperCase()}</span>
        )
    })

    let langBoxes = languages.map((obj) => {
        let styles = {
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
        </main>
    )
}