import {Widget} from "./OtherPlayer";
import styled from "styled-components";
import {GameboardColors} from "../functions/types";


export type ObjectiveProps = {
    objectiveType: string;
    objectives: GameObjective[];
    color: GameboardColors;
}

export type GameObjective = {
    text: string;
    maxPointsToGain: number;
    pointsCurrentlyGained: number;
}

export const Objectives = (props: ObjectiveProps) => {
    return <ObjectiveWidget objectives={props.objectives} color={props.color} objectiveType={props.objectiveType}>
        <p>{props.objectiveType}</p>
    </ObjectiveWidget>
}

export const ObjectiveWidget = styled(Widget)<ObjectiveProps>`
    background-color: ${(props) => props.color};
    color: ${(props) => props.color === GameboardColors.BACKGROUND_GREEN ? "white" : "black"};
`;