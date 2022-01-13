import { FunctionComponent } from 'react'
import styled from 'styled-components';

export interface TitleInterface {
    title?: string;
    color?: string;
    size?: string;
    align?: string;
};

export const Title: FunctionComponent<TitleInterface> = styled('div')
<{title?: string, color?: string, size?: string, align?: string,}>`
background: #FFF;
color: ${props => props.color};
margin-top: 15px;
margin-bottom:15px;
box-sizing: border-box; 
font-size: ${props => props.size} !important;
text-align: ${props => props.align};
`  