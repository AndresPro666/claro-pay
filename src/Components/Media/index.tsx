import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

interface MediaInterface {
    name?: string;
    uri?: string;
    width?: string;
    height?: string;
};

const RenderMedia: FunctionComponent<MediaInterface> = ({
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

export default RenderMedia