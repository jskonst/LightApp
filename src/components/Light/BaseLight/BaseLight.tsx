import React, { useCallback, useEffect, useState } from 'react'
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

type BaseLightProps = {
    data: IHeight[] | ILuks[],
    value?: number,
    changeHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const BaseLight: React.FC<BaseLightProps> = ({
    data,
    value = 0,
    changeHandler
}) => {
    const [height, setHeight] = useState(value);

    useEffect(() => {
        if (value) {
            setHeight(value);
        }
    }, [value]);

    const handleChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            if (changeHandler) {
                changeHandler(event)
            } else {
                console.log('BaseLight handleChange', event.target.value);
                setHeight(+event.target.value)
            }
        }, [changeHandler]
    );

    console.log('BaseLight', height);

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Высота</FormLabel>
            <RadioGroup aria-label="height" name="height" value={height} onChange={handleChange}>
                {
                    data.map((item) => {
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
