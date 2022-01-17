import React, { FunctionComponent } from 'react'
import {IconInterface, Icon} from '../../Styles/icon'


const FontIcon: FunctionComponent<IconInterface> = ({
    name,
    color,
    size,
    backColor
}) => {
    return (
        <Icon
            name={name}
            color={color}
            className={`${name} ${size}` || "fas fa-camera"}
            backColor={backColor}
        >
        </Icon>
    )
}

export default FontIcon