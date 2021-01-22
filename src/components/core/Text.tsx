import React from 'react';
import configColor from "../../assets/containts/configColor";
import { useWidthScreen } from '../../assets/hooks/useWidthScreen';
interface TextProps extends React.HTMLAttributes<HTMLParagraphElement>{
    element?: "p" | "span"|'raw',
    color?: "primary" | "seconds" | "white" | "success" | "pending" | "error" | "tab",
    size?: "normal" | "large" | "big" | "tiny" | "label",
    text: string,
    textRaw?: string,
    fontWeight?: "initial" | "bold" | "normal" | "500",
    textTransform?: "initial" | "capitalize" | "uppercase"
}
interface ColorText {

}
const SizeText = {
    "normal": "1em",//16
    "large": "1.56em",//25
    "big": "3.12em",//50
    "tiny": "12px",//15
    "label": "0.875em"//14
}
const SizeTextTable = {
    "normal": "1em",//16
    "large": "20px",//25
    "big": "40px",//50
    "tiny": "12px",//15
    "label": "0.875em"//14
}
const SizeTextMobile = {
    "normal": "1em",//16
    "large": "20px",//25
    "big": "30px",//50
    "tiny": "12px",//15
    "label": "0.875em"//14
}
const Text = ({ element = "p", color = 'primary', text, size = "normal", textRaw, fontWeight = "normal", textTransform = "initial", ...props }: TextProps) => {
    const width = useWidthScreen();
    console.log(width);
    return (
        <p>{text}</p>
    );
}

export default Text;