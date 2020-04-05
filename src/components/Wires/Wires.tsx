import React, { Component } from 'react'
import SupplyCalc from './SupplyCalculation/SupplyCalc'
import Interpolation from './Interpolation/Interpolation'
import LandingType from './LandigType/LandingType'
import WireTypes from './WiresTypes/WiresTypes'

interface Props {

}
interface State {

}

export default class Wires extends Component<Props, State> {
    state = {}
    el: any;

    componentDidMount() {
    }

    componentWillUnmount() {
        // this.$el.chosen('destroy');
    }

    render() {
        return (
            <div>
                <WireTypes />
                <LandingType />
                <Interpolation />
                <SupplyCalc />

            </div>
        )
    }
}
