import React, { FunctionComponent } from 'react'
import {IconInterface, Icon} from '../../Styles/icon'


const FontIcon: FunctionComponent<IconInterface> = ({
    name,
    color,
    size
}) => {
    return (
        <Icon
            name={name}
            color={color}
            className={`${name} ${size}` || "fas fa-camera"}
        >
        </Icon>
    )
}

export default FontIcon