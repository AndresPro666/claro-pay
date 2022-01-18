import { FunctionComponent } from 'react'
import styled from 'styled-components';

export interface IconInterface {
    name: string;
    color?: string;
    className?: string;
    size?: string;
    backColor?: string;
    hoverColor?: string;
};

export const Icon: FunctionComponent<IconInterface> = styled('div')
<{color?: string, backColor?: string, hoverColor?: string;}>`
    color: ${props => props.color};
    margin-right: 8px;
    margin-left: 8px;
    background-color: ${props => props.backColor};
    max-width: 20px;
    padding: 1rem;
    ${props => props.hoverColor && 
       ` &:hover{
            fill:white; 
            background: ${props.hoverColor};
            cursor: pointer;
            transition: .2s;
        }`
    }
`  