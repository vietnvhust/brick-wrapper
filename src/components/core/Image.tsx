import React, { ImgHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'
interface ImagesProps extends ImgHTMLAttributes<HTMLImageElement> {
    src: string,
    type?: "normal" | "cover"
    alt?: string
}
const Images = ({ src, alt = "", type = "normal", ...OtherAttr }: ImagesProps) => {
    return (
        <Image src={src} alt={alt} type={type} {...OtherAttr} />
    )
}
export default React.memo(Images)
interface ImageElementProps {
    type?: string
}
const Image = styled.img<ImageElementProps>`
    ${props => props.type === "cover" && css`object-fit:cover;`}
`