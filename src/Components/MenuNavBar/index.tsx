import React, { FunctionComponent } from 'react'
import Media from '../Media';
import MenuItem from './MenuItem';
import {MenuInterface, MenuNavBar} from '../../Styles/menuNavBar';

const Menu: FunctionComponent<MenuInterface> = ({ item, last, logo }) => {
    return (
        <MenuNavBar>
            <a href="/">
                <Media
                    uri={logo?.uri}
                    name={logo?.name}
                    width={logo?.width}
                />
            </a>
            {item && item.map(({
                type,
                value,
                action,
            }) => (
                <MenuItem
                    type={type}
                    value={value}
                    action={action}
                />
            ))}
            <div style={{
                position: 'absolute',
                bottom: 0,
            }}>
                <MenuItem
                    type={last?.type}
                    value={last?.value}
                    action={last?.action}
                />
            </div>
        </MenuNavBar>
    )

}

export default Menu;