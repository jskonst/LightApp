import React, { useCallback, useState } from 'react'
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

interface IHeight {
    title: string;
    value: number;
}

const heightElements: IHeight[] = [
    {title: "2 - 3", value: 1},
    {title: "3 - 4", value: 2},
    {title: "4 - 6", value: 3}
];

export const Height = () => {

    const [height, setHeight] = useState(
        {
            height: 0
        }
    );

    const handleChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            console.log(event.target.value);
            setHeight({height: +event.target.value})
        }, [height]
    );

    console.log(height);

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Высота</FormLabel>
            <RadioGroup aria-label="height" name="height" value={height} onChange={handleChange}>
                {
                    heightElements.map((item) => {
                        return (
                            <FormControlLabel
                                key={item.title}
                                value={item.value}
                                control={<Radio/>}
                                label={item.title}
                            />
                        )
                    })
                }
            </RadioGroup>
        </FormControl>
    );
}
