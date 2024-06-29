import {RadioButtons} from "./atoms/RadioButtons";

export const Setup = () => {
    const instruction = "Create the game environment by selecting the parameters below";

    return <div>
        <h2>{instruction}</h2>
        <ul>
            <li>Number of players: <RadioButtons /></li>
            <li>Per round objectives</li>
            <li>Your objective</li>
        </ul>
    </div>;
}