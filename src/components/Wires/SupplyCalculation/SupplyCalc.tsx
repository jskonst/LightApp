import React, { Component } from 'react'
import { FormControl, TextField, Paper, makeStyles, createStyles, Theme, FormLabel } from '@material-ui/core'


interface Props {

}
interface State {

}

class SupplyCalc extends Component<Props, State> {
    state = {}

    render() {
        return (
            <Paper>
                <FormLabel component="legend">Расчет питающих линий</FormLabel>
                <form noValidate autoComplete="off">
                    <FormControl>
                        <div>
                            <TextField id="Py"
                                label="Py" variant="outlined"
                            />

                            <TextField id="Pp"
                                label="Pp" variant="outlined"
                            />

                            <TextField id="Ip"
                                label="Ip" variant="outlined"
                            />

                            <TextField id="L"
                                label="L" variant="outlined"
                            />

                            <TextField id="M"
                                label="M" variant="outlined"
                            />

                            <TextField id="dU"
                                label="dU" variant="outlined"
                            />
                        </div>
                        <div>
                            <TextField id="kC"
                                label="kC" variant="outlined"
                            />

                            <TextField id="cosPhi"
                                label="cos(&#966;)" variant="outlined"
                            />

                            <TextField id="k"
                                label="k" variant="outlined"
                            />
                        </div>
                    </FormControl>
                </form>
            </Paper >
        )
    }
}

export default SupplyCalc
