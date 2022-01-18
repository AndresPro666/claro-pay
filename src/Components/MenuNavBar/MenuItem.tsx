import React, { FunctionComponent } from 'react';
import {COLORS} from '../../Constants'
import Media from '../Media'
import Icon from '../Icon'

interface MenuItemInterface {   // No se que es 
    type: string;
    value: string;
    action?: string;
};
const MenuItem: FunctionComponent<MenuItemInterface> = ({  //por que aca? 
    type,
    value,
    action,
}) => {
    return (
        <a href={action}>
           { type === 'Media' 
           ? <Media
                padding="1rem;"
                width="25px" uri={value}
                hoverColor={COLORS.HOVER_BUTTON}
            /> 
            : <Icon name={value} hoverColor={COLORS.HOVER_BUTTON}/>}
        </a>
    )
}

export default MenuItem;