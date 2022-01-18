import React, { FunctionComponent } from 'react'
import { MediaInterface, Media } from '../../Styles/media'

const RenderMedia: FunctionComponent<MediaInterface> = ({
    name,
    uri,
    width,
    height,
    hoverColor,
    padding
}) => {
    return (
        <Media padding={padding}
            hoverColor={hoverColor}
            src={uri} alt={name}
            width={width}
            height={height}
        />
    )
}

export default RenderMedia