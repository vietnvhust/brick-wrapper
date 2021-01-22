import React from 'react';
import Image from "./Image";
import ImageLoading from "assets/images/loading.svg";
import styled from "styled-components";
function Loading() {
    return (
        <Wrap>
            <Image src={ImageLoading} />
        </Wrap>
    );
}
const Wrap = styled.div`
    display:flex;
    justify-content:center;
    img{
        width:50px;
        height:50px;
    }
`;
export default Loading;