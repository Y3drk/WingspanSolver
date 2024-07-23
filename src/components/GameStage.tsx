import {GameboardColors, PlayerColors} from "../functions/types";
import {OtherPlayer, PlayerProps} from "./OtherPlayer";
import styled from "styled-components";
import {Objectives} from "./Objectives";
import {Resources} from "./Resources";

export const GameStage = () => {
    const objectivesPerRoundName = "Cele co rundę";
    const personalObjectivesName = "Cele osobiste";
    const personalResourcesName = "Moje zasoby";
    const resourcesInFeeder = "Zasoby w karmniku";

    const dummyPlayers: PlayerProps[] = [
            {name: "P1", color: PlayerColors.PURPLE},
        {name: "P2", color: PlayerColors.GREEN},
        {name: "P3", color: PlayerColors.RED},
        {name: "P4", color: PlayerColors.YELLOW}
    ];

    return <GamestageContainer>
        <div>LEFT COLUMN
            <OtherPlayer name={dummyPlayers[0].name} color={dummyPlayers[0].color} />
            <Objectives objectiveType={objectivesPerRoundName} objectives={[]} color={GameboardColors.BACKGROUND_BLUE} />
            <Objectives objectiveType={personalObjectivesName} objectives={[]} color={GameboardColors.BACKGROUND_GREEN} />
            {dummyPlayers.length >= 2 && <OtherPlayer name={dummyPlayers[1].name} color={dummyPlayers[1].color} />}
        </div>
        <div>CENTER COLUMN
            <Resources resourcesType={personalResourcesName} />
            <button>RUCH HEURYSTYCZNY</button>
            <button>RUCH LOSOWY</button>
        </div>
        <div>RIGHT COLUMN
            {dummyPlayers.length >= 3 && <OtherPlayer name={dummyPlayers[2].name} color={dummyPlayers[2].color} />}
            <Resources resourcesType={resourcesInFeeder} />
            {dummyPlayers.length >= 4 && <OtherPlayer name={dummyPlayers[3].name} color={dummyPlayers[3].color} />}
        </div>
    </GamestageContainer>;
}

const GamestageContainer = styled.div`
    width: fit-content;
    height: fit-content;
    
    max-width: 100vw;
    max-height: 100vh;
    
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    
    gap: 2vw;
`;