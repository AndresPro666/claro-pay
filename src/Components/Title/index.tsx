import React, { FunctionComponent } from 'react'
import { TitleInterface, Title } from '../../Styles/title';

const RenderTitle: FunctionComponent<TitleInterface> = ({
    title,
    color,
    size,
    align
}) => {
    return (
        <Title
            color={color}
            size={size}
            align={align}
        >
            {title}
        </Title>
    )
}

export default RenderTitle