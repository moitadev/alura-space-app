import { createGlobalStyle } from "styled-components";
import GandhiSansBold from "../../assets/fonts/GandhiSans-Bold.otf";
import GandhiSansRegular from "../../assets/fonts/GandhiSans-Bold.otf";

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Gandhi Sans Regular';
  src: url(${GandhiSansRegular}) format('otf');
}

@font-face {
  font-family: 'Gandhi Sans Bold';
  src: url(${GandhiSansBold}) format('otf');
}
`;

export default FontStyles;