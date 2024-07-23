import {PlayerColors} from "../functions/types";
import styled from "styled-components";

export type PlayerProps = {
    name: string;
    color: PlayerColors;
};
export const OtherPlayer = (props: PlayerProps) => {
    return (<PlayerWidget name={props.name} color={props.color}>
        <p>{props.name}</p>
    </PlayerWidget>);
}

export const Widget = styled.div`
    width: 8vw;
    height: 8vw;

    border: 5px solid black;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;

    font-size: 18px;

    &:hover {
        cursor: pointer;
    }
`;

const PlayerWidget = styled(Widget)<PlayerProps>`
    background-color: ${(props) => props.color};
    color: ${(props) => props.color === PlayerColors.BLUE || props.color === PlayerColors.PURPLE || props.color === PlayerColors.RED ? "white" : "black"};
`;