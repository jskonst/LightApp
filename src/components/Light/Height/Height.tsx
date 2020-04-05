import React, { Component } from 'react'
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

interface IHeight {
    title: string;
    value: number;
}

export default class Height extends Component {
    state = {
        height: 0
    }

    private heightElements: IHeight[] = [
        { title: "2 - 3", value: 1 },
        { title: "3 - 4", value: 2 },
        { title: "4 - 6", value: 3 }
    ]

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        this.setState({ height:  +event.target.value});
    };

    render() {
        console.log(this.state);
        return (
            <FormControl component="fieldset">
                <FormLabel component="legend">Высота</FormLabel>
                <RadioGroup aria-label="height" name="height" value={this.state.height} onChange={this.handleChange}>
                    {this.heightElements.map((item) => {
                        return <FormControlLabel value={item.value} control={<Radio />} label={item.title} />
                    })
                    }
                </RadioGroup>
            </FormControl>
        );
    }
}
