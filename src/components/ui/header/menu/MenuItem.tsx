import React from 'react';
import { Link } from 'react-router-dom';
import {MenuItemProps} from "../Header";
import styled from "styled-components";
import configColor from "../../../../assets/containts/configColor";
import Text from "../../../core/Text";
function MenuItem({href, text}:MenuItemProps) {
    return (
        <Wrap className="link-menu">
            <Link to={href}>
                <Text text={text} />
            </Link>
        </Wrap>
    );
}
const Wrap = styled.div`
  & > a {
    text-transform: capitalize;
  }
  &:hover,&.active {
    a {
      color:${configColor.colorPending};
    }
  }
`;
export default MenuItem;