import styled from "styled-components";
import {GameboardColors} from "../functions/types";

export type AvailableResources = {
    nectar: number;
    rat: number;
    fish: number;
    wheat: number;
    worm: number;
    cranberry: number;
}

export type ResourcesProps = {
    resourcesType: string;
}
export const Resources = (props: ResourcesProps) => {
    const dummyResources: AvailableResources = {
        nectar: 0, rat: 1, fish: 2, wheat: 3, worm: 4, cranberry: 5
    };

    return <ResourcesPanel>
        <ResourcesName>{props.resourcesType}</ResourcesName>
        <ResourcesList>
            {Object.entries(dummyResources).map((entry, idx) => <ResourceItem>
                <p><strong>{entry[0]}</strong></p>
                <p>{entry[1]}</p>
                <ButtonsDiv>
                    <ResourceButton>+</ResourceButton>
                    <ResourceButton>-</ResourceButton>
                </ButtonsDiv>
            </ResourceItem>)}
        </ResourcesList>
    </ResourcesPanel>
};


const ResourcesPanel = styled.div`
    width: fit-content;
    height: fit-content;
    
    max-width: 40vw;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: start;

    border: 5px solid black;

    color: white;
    background-color: ${GameboardColors.FEEDER_GRAY};
`;

const ResourcesList = styled.ul`
    list-style: none;
    
    width: fit-content;
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    
    justify-content: center;
    align-items: center;
    gap: 2%;
    
    margin: 0;
    padding: 0 20px;
`;

const ResourceItem = styled.li`
    width: 100%;
    
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    
    justify-content: center;
    align-items: center;
    
    border: 1px solid white;
`;

const ResourcesName = styled.p`
    font-size: 18px;
`;

const ResourceButton = styled.button`
    width: 1.5vw;
    height: 1.5vw;
    
    border: 1px solid black;
    border-radius: 50%;
    
    &:hover {
        cursor: pointer;
    }
`;

export const ButtonsDiv = styled.div`
    width: 100%;
    
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: center;
`;