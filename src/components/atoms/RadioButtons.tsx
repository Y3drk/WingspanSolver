import React, {useState} from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

export type RadioButtonsProps = {
    values: string[];
};


export const RadioButtons = () => {
    const [value, setValue] = useState(2); //TODO:state and change as props!!!

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(parseInt((event.target as HTMLInputElement).value));
    };
    return <RadioGroup row name="use-radio-group" defaultValue="2" value={value}
                       onChange={handleChange}>
        <FormControlLabel value="2" label="two (2)" control={<Radio/>}/>
        <FormControlLabel value="3" label="three (3)" control={<Radio/>}/>
        <FormControlLabel value="4" label="four (4)" control={<Radio/>}/>
        <FormControlLabel value="5" label="five (5)" control={<Radio/>}/>
    </RadioGroup>
}