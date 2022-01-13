import { FunctionComponent } from 'react'
import styled from 'styled-components';

export interface IconInterface {
    name: string;
    color?: string;
    className?: string;
    size?: string;
};

export const Icon: FunctionComponent<IconInterface> = styled('div')
<{color?: string,}>`
    color: ${props => props.color};
    margin-right: 8px;
    margin-left: 8px;
`  