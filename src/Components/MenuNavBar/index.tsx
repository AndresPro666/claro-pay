import React, { FunctionComponent } from 'react'
import Media from '../Media';
import MenuItem from './MenuItem';
import { MenuInterface, MenuNavBar, LastItem } from '../../Styles/menuNavBar';

const Menu: FunctionComponent<MenuInterface> = ({ item, last, logo }) => {
    return (
        <MenuNavBar>
            <a href="/">
                <Media
                    uri={logo?.uri}
                    name={logo?.name}
                    width={logo?.width}
                />
                <hr />
            </a>
            {item && item.map(({
                type,
                value,
                action,
            }) => (
                <>
                    <MenuItem
                        type={type}
                        value={value}
                        action={action}
                    />
                    <hr />
                </>

            ))}
            <LastItem>
                <MenuItem
                    type={last?.type}
                    value={last?.value}
                    action={last?.action}
                />
            </LastItem>
        </MenuNavBar>
    )
}

export default Menu;