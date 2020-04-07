import React from 'react'
import { BaseLight } from "../BaseLight/BaseLight";

const heightElements: IHeight[] = [
    {title: "Люминисцентные", value: 1},
    {title: "Накаливания", value: 2},
    {title: "Светодиодные", value: 3}
];

export const LampType: React.FC = () => {
    return (
        <BaseLight data={heightElements}/>
    )
};
