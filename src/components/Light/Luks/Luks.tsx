import React, { useCallback, useState } from 'react'
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

interface ILuks {
    title: string;
    value: number;
}

const heightElements: ILuks[] = [
    {title: "5", value: 5},
    {title: "10", value: 10},
    {title: "20", value: 20},
    {title: "30", value: 30},
    {title: "50", value: 50},
    {title: "75", value: 75},
    {title: "100", value: 100},
    {title: "150", value: 150},
    {title: "200", value: 200},
    {title: "300", value: 300},
    {title: "400", value: 400},
    {title: "500", value: 500},
    {title: "600", value: 600},
    {title: "750", value: 750},
    {title: "1000", value: 1000},
    {title: "3000", value: 3000},
    {title: "10000 (Солнце)", value: 10000},

]

export const Luks = () => {

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
        <React.Fragment>
            <FormControl component="fieldset">
                <FormLabel component="legend">Высота</FormLabel>
                <RadioGroup aria-label="height" name="height" value={height}
                            onChange={handleChange}>
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
        </React.Fragment>
    );
}
