
import React, { Component } from 'react'
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, TextField, MenuItem } from '@material-ui/core';

interface IType {
    title: string;
    value: number;
}

const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];


export default class WireTypes extends Component {
    state = {
        currency: "Rub",
        phase: 0,
        type: 0
    }

    private phase: IType[] = [
        { title: "3Ф", value: 3 },
        { title: "1Ф", value: 1 },
    ]

    private type: IType[] = [
        { title: "Cu", value: 1 },
        { title: "Al", value: 2 },
    ]

    handlePhase = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ ...this.state, phase: +event.target.value });
    };

    handleType = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ ...this.state, type: +event.target.value });
    };

    render() {
        console.log(this.state);
        return (
            <div>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Марка провода</FormLabel>
                    <RadioGroup aria-label="type" name="type" value={this.state.phase} onChange={this.handlePhase}>
                        {this.phase.map((item) => {
                            return <FormControlLabel value={item.value} control={<Radio />} label={item.title} />
                        })
                        }
                    </RadioGroup>
                    <RadioGroup aria-label="type" name="type" value={this.state.type} onChange={this.handleType}>
                        {this.type.map((item) => {
                            return <FormControlLabel value={item.value} control={<Radio />} label={item.title} />
                        })
                        }
                    </RadioGroup>
                    <div>
                        <TextField
                            id="standard-select-currency"
                            select
                            label="Select"
                            value={this.state.currency}
                            // onChange={handleChange}
                            helperText="Please select your currency"
                        >
                            {currencies.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            id="standard-select-currency"
                            select
                            label="Select"
                            value={this.state.currency}
                            // onChange={handleChange}
                            helperText="Please select your currency"
                        >
                            {currencies.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            id="standard-select-currency"
                            select
                            label="Select"
                            value={this.state.currency}
                            // onChange={handleChange}
                            helperText="Please select your currency"
                        >
                            {currencies.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>

                        <TextField id="iDop"
                            label="Idop" variant="outlined"
                        />
                    </div>
                </FormControl>
            </div>
        );
    }
}
