import React from 'react';
import './App.css';
import {Setup} from "./components/Setup";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {GameStage} from "./components/GameStage";
import styled from "styled-components";

function App() {
  return (
      <BrowserRouter>
          <BaseBody>
              <Routes>
                  <Route path="/" element={<Setup/>} />
                  <Route path="game" element={<GameStage/>} />
                  <Route path="*" element={<Setup />} />
              </Routes>
          </BaseBody>
      </BrowserRouter>
  );
}

export default App;

const BaseBody = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: fit-content;
    min-height: 100%;
    margin: 0;
    padding: 0;
    
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    
    justify-content: center;
    align-items: center;
`;
