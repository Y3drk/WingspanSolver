import React, {Dispatch, SetStateAction} from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

export type RadioButtonsProps = {
    values: any[];
    labels: string[];
    value: any;
    setValue: Dispatch<SetStateAction<any>>;
};


export const RadioButtons = (props: RadioButtonsProps) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setValue(parseInt((event.target as HTMLInputElement).value));
    };
    return (props.values.length > 0 ?
            (<RadioGroup row name="use-radio-group" defaultValue={props.value.toString()} value={props.value.toString()}
                        onChange={handleChange}>
                {props.values.map((value, index) =>
                <FormControlLabel
                    key={`option${index}`}
                    value={value}
                    label={props.labels[index]}
                    control={<Radio/>}/>
                )}
            </RadioGroup>)
            : <p>Values unavailable</p>
    );
}