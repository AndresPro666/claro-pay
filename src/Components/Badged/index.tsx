import React, { FunctionComponent } from 'react'
import { BadgedInterface, Badged } from '../../Styles/badged';

const RenderTitle: FunctionComponent<BadgedInterface> = ({
    text,
    icon,
    color,
    size,
    backColor
}) => {
    return (
        <Badged color={color} size={size} backColor={backColor}>
            {text}
            &nbsp;
            {icon && <i className={icon}></i>}
        </Badged>
    )
}

export default RenderTitle