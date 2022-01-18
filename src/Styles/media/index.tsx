import { FunctionComponent } from 'react'
import styled from 'styled-components';

export interface MediaInterface {
    src?: string;
    alt?: string;
    name?: string;
    uri?: string;
    width?: string;
    height?: string;
    hoverColor?:string;
    padding?: string;
};


export const Media: FunctionComponent<MediaInterface> = styled('img')
<{name?: string, uri?: string, width?: string, height?: string, hoverColor?: string, padding?: string;}>`
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding: ${props => props.padding};
    ${props => props.hoverColor && 
       ` &:hover{
            fill:white; 
            background: ${props.hoverColor};
            cursor: pointer;
            transition: .2s;
        }`
    }
`  