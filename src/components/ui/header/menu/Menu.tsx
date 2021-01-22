import React from 'react';
import MenuItem from "./MenuItem";
import {MenuItemProps} from "../Header";
import styled from "styled-components";
import configColor from "assets/containts/configColor";
import {breakpointsMedia} from "assets/containts/breakpoints";
const menu = [
    {
        href: "/",
        text: "whatIsmBTC"
    },
    {
        href: "/dashboard",
        text: "dashboard"
    },
    {
        href: "/wrapper",
        text: "wrapper"
    },
    {
        href: "/unwrapper",
        text: "unwrapper"
    },
]
function Menu() {
    return (
        <Wrap>
            <div className="menu-no-open-search">
                {
                    menu.length > 0 && menu.map(({href, text}: MenuItemProps, index) => {
                        return <MenuItem key={index} href={href} text={text} />;
                    })
                }
            </div>
        </Wrap>
    );
}
const Wrap = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    /* overflow:hidden; */
    position:relative;
    .menu-no-open-search{
        display:flex;
        align-items:center; 
        justify-content:center;
        flex-flow:column;
        >div{
            padding:15px 0;
        }
    }
    .search{
        display:flex;
        align-items:center;
        width:100%;
        max-width:600px;
        position: relative;
      
        border-bottom:1px solid #C3C5E5;
        /* :before{
            content:"";
            background-color:#C3C5E5;
            height:1px;
            width:100%;
            position:absolute;
            right:0;
            bottom:0;
        } */
        &__icon{
            transform:rotate(90deg);
            cursor: pointer;
            svg{
                fill:${configColor.colorTab};

            }
        }
        
        &__input{
            flex:1;
            margin:7px 15px;
            transform:scaleX(1);

            input{
                width:100%;
                padding:5px 0;
                border:0;
                background-color:transparent;
                ::placeholder{
                    color:#A6A8C3;
                }
            }
        }
        &__close{
            cursor: pointer;
            svg{
                font-size:23px;
                fill:${configColor.colorTab};
            }
        }
    }
    .modal-result{
        margin-top:10px;
        position: relative;
        top: calc(100% + 10px);
        width: 100%;
        max-width: 600px;
        padding: 20px;
        box-shadow: 2px 1px 5px rgba(0,0,0,.3);
    }
    ${breakpointsMedia.landscape}{
        .menu-no-open-search{
            flex-flow:row wrap; 
            >div{
                padding:0 20px;
            }
        }  
    
    }
    ${breakpointsMedia.largeDesktop}{
        flex-direction:row;
        .modal-result{
            position: absolute;
            top: calc(100% + 10px);
            margin-top:0;
        }
    }
`
export default Menu;