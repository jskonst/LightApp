import React, { Component, useCallback, useState } from 'react'
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

interface IHeight {
    title: string;
    value: number;
}

const heightElements: IHeight[] = [
    {title: "40", value: 40},
    {title: "60", value: 60},
    {title: "80", value: 80},
    {title: "100", value: 100},
    {title: "150", value: 150},
    {title: "200", value: 200}
];

export const NominalPower = () => {
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
                                label={item.title}/>
                        )
                    })
                }
            </RadioGroup>
        </FormControl>
    );
}
