import React from 'react'
import { BaseLight } from "../BaseLight/BaseLight";

const heightElements: IHeight[] = [
    {title: "40", value: 40},
    {title: "60", value: 60},
    {title: "80", value: 80},
    {title: "100", value: 100},
    {title: "150", value: 150},
    {title: "200", value: 200}
];

export const NominalPower: React.FC = () => {
    return (
        <BaseLight data={heightElements}/>
    )
}
