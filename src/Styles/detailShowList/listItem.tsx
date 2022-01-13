import { FunctionComponent } from 'react';
import styled from 'styled-components';

interface VerticalBarInterface {
    color: string;
    marginRight?: any;
};

export const VerticalBar: FunctionComponent<VerticalBarInterface> = styled('a')<{color: string, marginRight: any}>`
    font-weight: 600;
    color: green;
    font-size: 30px;
    color: ${props => props.color};
    margin-right: ${props => props.marginRight};
`;

export const Row = styled.div`
    height: 50px;
    padding: 2px 2px 2px 2px;
    background-color: #ffffff;
    box-sizing: border-box;
`;

export const CommonString = styled.div`
    margin-top: 15px;
`;

export const AcceptValue = styled.div`
    margin-top: 10px;
    color: green;
    font-weight: 500;
    padding: 3px;
`;