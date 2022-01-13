import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

interface TitleInterface {
    name?: string;
    uri?: string;
    width?: string;
    height?: string;
};

const RenderTitle: FunctionComponent<TitleInterface> = ({
    name,
    uri,
    width,
    height,
}) => {
    const Media = styled.img`
        display: block;
        margin-left: auto;
        margin-right: auto;
    `
    return (
        <>
            <Media src={uri} alt={name} width={width} height={height} />
        </>
    )
}

export default RenderTitle