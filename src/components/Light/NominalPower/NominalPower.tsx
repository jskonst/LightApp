import React, { Component } from 'react'
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

interface IHeight {
    title: string;
    value: number;
}

export default class NominalPower extends Component {
    state = {
        height: 0
    }

    private heightElements: IHeight[] = [
        { title: "40", value: 40 },
        { title: "60", value: 60 },
        { title: "80", value: 80 },
        { title: "100", value: 100 },
        { title: "150", value: 150 },
        { title: "200", value: 200 }
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
