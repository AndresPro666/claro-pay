import { FunctionComponent } from 'react'
import styled from 'styled-components';

export interface BadgedInterface {
    text?: string;
    color?: string;
    size?: string;
    icon?: string;
    backColor?: string;
};

export const Badged: FunctionComponent<BadgedInterface> = styled('div')
<{color?: string, size?: string, icon?: string, backColor?: string,}>`
    display: inline-block;
    padding: 4px;
    font-size: ${props => props.size};
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25rem;
    color: ${props => props.color};
    background-color: ${props => props.backColor};  
`  