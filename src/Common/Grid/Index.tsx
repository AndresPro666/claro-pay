import React,  { FunctionComponent } from "react";
import styled from 'styled-components';

interface ColInterface {
    size: number;
    colSize?: number;
    styleString?: any;
};

interface ContainerInterface {
    styleString?: any;
};

export const Container: FunctionComponent<ContainerInterface> = styled('div')<{styleString?: any,}>`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;    
    ${props => props.styleString}
`  

export const Col: FunctionComponent<ColInterface> = styled('div')<{size: number, colSize?: number, styleString?: any,}>`
    width: ${props => props.size * (100 / (props?.colSize || 12))}%;
    ${props => props.styleString}
`;