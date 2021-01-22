import React from 'react';
import { Link } from 'react-router-dom'
import logo from 'assets/images/logo.svg';
import Image from "components/core/Image";
import styled from "styled-components";
import {breakpointsMedia} from "assets/containts/breakpoints";
import Menu from "./menu/Menu";
export interface MenuItemProps {
    href: string,
    text: string
}
function Header() {
    return (
        <HeaderWrap>
            <div className="container">
                <HeaderElement className="header">
                    <div className="header-logo">
                        <Link to="/">
                            <Image src={logo}></Image>
                        </Link>
                    </div>
                    <div className="header-menu">
                        <Menu/>
                    </div>
                </HeaderElement>
            </div>
        </HeaderWrap>
    );
}
const HeaderWrap = styled.header`
    margin-bottom:35px;
    padding:10px 0;
`;
const HeaderElement = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    .header-logo{
        display:flex;
        align-items:center;
        .header-icon{
            font-size:36px;
            margin-right:15px;
            line-height:20px;
        }
        img{
            width:85px;
            height:25px;
        }
    }
    .header-menu{
       flex:1;
    }
    ${breakpointsMedia.landscape}{
        /* padding:30px 0 20px; */
        .header-logo{
            .header-icon{
                font-size:36px;
                margin-right:20px;
            }
            img{
                width:108px;
                height:32px;
            }
        }
    }
    ${breakpointsMedia.largeDesktop}{
        /* padding:30px; */
        .header-logo{
            img{
                width:170px;
                height:50px;
            }
        }
    }
`;
export default Header;