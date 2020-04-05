
import React, { Component } from 'react'
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, TextField } from '@material-ui/core';

interface IType {
    title: string;
    value: number;
}

export default class LandingType extends Component {
    state = {
        type: 0
    }

    private heightElements: IType[] = [
        { title: "По земле", value: 1 },
        { title: "По воздуху", value: 2 },
    ]

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        this.setState({ type: +event.target.value });
    };

    render() {
        console.log(this.state);
        return (
            <FormControl component="fieldset">
                <FormLabel component="legend">Способ прокладки</FormLabel>
                <RadioGroup aria-label="type" name="type" value={this.state.type} onChange={this.handleChange}>
                    {this.heightElements.map((item) => {
                        return <FormControlLabel value={item.value} control={<Radio />} label={item.title} />
                    })
                    }
                </RadioGroup>
                <TextField id="iDop"
                    label="Idop" variant="outlined"
                />
            </FormControl>
        );
    }
}
