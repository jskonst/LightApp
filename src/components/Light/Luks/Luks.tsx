import React, { Component } from 'react'
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

interface ILuks {
    title: string;
    value: number;
}

export default class Luks extends Component {
    state = {
        height: 0
    }

    private heightElements: ILuks[] = [
        { title: "5", value: 5 },
        { title: "10", value: 10 },
        { title: "20", value: 20 },
        { title: "30", value: 30 },
        { title: "50", value: 50 },
        { title: "75", value: 75 },
        { title: "100", value: 100 },
        { title: "150", value: 150 },
        { title: "200", value: 200 },
        { title: "300", value: 300 },
        { title: "400", value: 400 },
        { title: "500", value: 500 },
        { title: "600", value: 600 },
        { title: "750", value: 750 },
        { title: "1000", value: 1000 },
        { title: "3000", value: 3000 },
        { title: "10000 (Солнце)", value: 10000 },

    ]

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        this.setState({ height: +event.target.value });
    };

    render() {
        console.log(this.state);
        return (
            <React.Fragment>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Высота</FormLabel>
                    <RadioGroup aria-label="height" name="height" value={this.state.height} onChange={this.handleChange}>
                        {this.heightElements.map((item) => {
                            return <FormControlLabel value={item.value} control={<Radio />} label={item.title} />

                        })
                        }
                    </RadioGroup>
                </FormControl>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Высота</FormLabel>
                    <RadioGroup aria-label="height" name="height" value={this.state.height} onChange={this.handleChange}>
                        {this.heightElements.map((item) => {
                            return <FormControlLabel value={item.value} control={<Radio />} label={item.title} />

                        })
                        }
                    </RadioGroup>
                </FormControl>
            </React.Fragment>
        );
    }
}
