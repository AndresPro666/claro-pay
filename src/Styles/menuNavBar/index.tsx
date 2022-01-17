import { FunctionComponent } from 'react'
import styled from 'styled-components';

export type ItemType = {
    type?: any;
    value?: any;
    action?: any;
};

export type LogoType = {
    name?: any;
    uri?: any;
    width?: any;
    height?: any;
};

export interface MenuInterface {
    item?: ItemType[];
    last: ItemType;
    logo: LogoType;
};


export const MenuNavBar: FunctionComponent = styled.div`
    display:flex;
    position: fixed;
    flex-direction:column;
    height: 90vh;
    margin-top: 1rem;
`  