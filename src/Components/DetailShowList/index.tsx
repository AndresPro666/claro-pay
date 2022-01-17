import React, { FunctionComponent } from 'react';
import DetailShowList from '../../Styles/detailShowList/Index';
import Title from '../Title';
import Item from './ListItem';

export type ItemsType = {
    name: string;
    value: string;
};

interface MenuInterface {
    items: ItemsType[];
    title: string;
};

const Menu: FunctionComponent<MenuInterface> = ({ items, title }) => {
    return (
        <DetailShowList>
            <div style={{ marginLeft: '4px' }}>
                <Title title={title} color="black" size="20px" />
            </div>
            {items && items.map(item => (
                <Item {...item} />
            ))}
        </DetailShowList>
    )
}

export default Menu;