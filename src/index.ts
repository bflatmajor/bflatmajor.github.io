import './index.css'
import Typer from './typer'

setTimeout(async () => {
    await new Typer(document.getElementById('words')).type(
        "Here's nothing, silly you! 😮"
    )
}, Math.random() * 2000 + 3000)
