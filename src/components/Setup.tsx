import {RadioButtons} from "./atoms/RadioButtons";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export const Setup = () => {
    const instruction = "Przygotuj środowisko gry wybierając odpowiednie ustawienia";
    const [numberOfPlayers, setNumberOfPlayers] = useState(2);
    const labels = ["dwóch (2)", "trzech (3)", "czterech (4)", "pięciu (5)"];

    const navigate = useNavigate();

    const startGame = () => {
      navigate("../game")
    };

    return <div>
        <h2>{instruction}</h2>
        <ul>
            <li>Ilość graczy: <RadioButtons  labels={labels} values={[2,3,4,5]} value={numberOfPlayers} setValue={setNumberOfPlayers}/></li>
            <li>Cele co rundę</li>
            <li>Twoja karta celu</li>
            <li>Gracze i ich kolory (dopiero po Rozpocznij gre?)</li>
        </ul>
        <button onClick={startGame} disabled={numberOfPlayers < 3}>Rozpocznij grę</button>
    </div>;
}

//TODO: change disabled condition later