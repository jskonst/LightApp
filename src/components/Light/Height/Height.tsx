import React from 'react'
import { BaseLight } from "../BaseLight/BaseLight";

const heightElements: IHeight[] = [
    {title: "2 - 3", value: 1},
    {title: "3 - 4", value: 2},
    {title: "4 - 6", value: 3}
];

export const Height: React.FC = () => {
    return (
        <BaseLight data={heightElements}/>
    )
};

