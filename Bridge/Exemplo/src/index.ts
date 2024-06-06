import Facebook from "./platforms/Facebook";
import Twitch from "./platforms/Twitch";
import IPlatform from "./platforms/interfaces/IPlatform";
import AdvancedLive from "./transmissions/AdvancedLive";
import Live from "./transmissions/Live";

const startLive = (platform : IPlatform) => {
    console.log("Aguarde")
    const live = new Live(platform)
    live.broadcasting()
    live.result()
}

startLive(new Twitch())

const startAdvancedLive = (platform : IPlatform) => {
    console.log("Aguarde")
    const advancedLive = new AdvancedLive(platform)
    advancedLive.broadcasting()
    advancedLive.result()
    advancedLive.subtitles()
    advancedLive.comments()
}

startAdvancedLive(new Facebook())