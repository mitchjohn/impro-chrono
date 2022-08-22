import {Chrono} from "./chrono";
import {Score} from "./score";

export const Scoreboard = () => {
    return <>
        <Chrono />
        Home: <Score/>
        Away: <Score/>
    </>
}