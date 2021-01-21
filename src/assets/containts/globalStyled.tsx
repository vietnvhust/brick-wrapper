import {createGlobalStyle} from "styled-components";
import configColor from "./configColor";
import {breakpointsMedia} from "./breakpoints";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color:${configColor.colorWhite};
        color:${configColor.colorPrimary};
        font-size:14px;
    }
    .container{
        width:100%;
        padding:0 20px;
        margin:0 auto;
    }
    ${breakpointsMedia.landscape}{
        .container{
            max-width:100%;
            padding:0 20px;
        }
       
    }
    ${breakpointsMedia.tablet}{
        .container{
            padding:0 35px;
        }
    }
    ${breakpointsMedia.largeDesktop}{
        body {
          font-size:16px;
        }
        .container{
            max-width:1170px;
            padding:0;

        }
    }
    ${breakpointsMedia.xLargeDesktop}{
        .container{
            max-width:1200px;
        }
    }
    ${breakpointsMedia.xxLargeDesktop}{
        .container{
            max-width:1410px;
        }
    }
`;