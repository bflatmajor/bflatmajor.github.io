import './index.css'
import Typer from './typer'

setTimeout(async () => {
    await new Typer(document.getElementById('words')).type(
        "Here's nothing, silly you! 😮"
    )
    setTimeout(() => {
        location.assign('https://live.bilibili.com/22363472')
    }, 2000)
}, Math.random() * 2000 + 3000)
