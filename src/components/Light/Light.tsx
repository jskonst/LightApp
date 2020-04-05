import React, { Component } from 'react'
import Height from './Height/Height'
import Luks from './Luks/Luks'
import LampType from './LampType/LampType'
import NominalPower from './NominalPower/NominalPower'
import { TextField } from '@material-ui/core'

interface Props {

}
interface State {

}

export default class Light extends Component<Props, State> {
    state = {}

    render() {
        return (
            <React.Fragment>
                <form noValidate autoComplete="off">
                    <TextField id="1"
                    label="Площадь"
                        variant="outlined"
                    />
                </form>

                <Height />
                <Luks />
                <LampType />
                <NominalPower />
                <form noValidate autoComplete="off">
                    <TextField id="2"
                    label="Удельная мощность"
                        variant="outlined"
                    />
                    <TextField id="3"
                    label="Мощность"
                        variant="outlined"
                    />
                    <TextField id="4"
                    label="Количество"
                        variant="outlined"
                    />
                </form>
            </React.Fragment>
        )
    }
}
