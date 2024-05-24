import PlayStation from "./consoles/PlayStation";
import Xbox from "./consoles/Xbox";
import IConsole from "./consoles/interfaces/IConsole";
import AdvancedPlay from "./games/AdvancedPlay";
import Play from "./games/Play";

const startPlay = (pc : IConsole) => {
    console.log("Vambora")
    const play = new Play(pc)
    play.playing()
    play.result()
}

startPlay(new PlayStation())

const advancedPlay = (pc : IConsole) => {
    console.log("Boraa")
    const advanced = new AdvancedPlay(pc)
    advanced.playing()
    advanced.result()
    advanced.challenge()
}

advancedPlay(new Xbox())