
import React, { Component } from 'react'
import { FormControl, TextField, Paper, makeStyles, createStyles, Theme, FormLabel } from '@material-ui/core'


interface Props {

}
interface State {

}

class Interpolation extends Component<Props, State> {
    state = {}

    render() {
        return (
            <Paper>
                <FormLabel component="legend">Интерполяция</FormLabel>
                <form noValidate autoComplete="off">
                    <FormControl>
                        <div>
                            <TextField id="1"
                                variant="outlined"
                            />

                            <TextField id="2"
                                variant="outlined"
                            />

                            <TextField id="3"
                                variant="outlined"
                            />
                        </div>
                        <div>

                            <TextField id="4"
                                variant="outlined"
                            />

                            <TextField id="5"
                                 variant="outlined"
                            />

                            <TextField id="6"
                                variant="outlined"
                            />
                        </div>
                    </FormControl>
                </form>
            </Paper >
        )
    }
}

export default Interpolation
