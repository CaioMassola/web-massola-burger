import styled from "styled-components";
import { DARKTEXT, LIGHT, LIGHTTEXT } from "../../global/colors";

const ThemeColor = styled.p.attrs((props: { theme: boolean }) => props)`
  color: ${(props) => (props.theme === LIGHT ? LIGHTTEXT : DARKTEXT)};
  &:hover {
    color: red;
  }
`;

const BorderColor = styled.nav.attrs((props: { theme: boolean }) => props)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-color: ${(props) => (props.theme === LIGHT ? LIGHTTEXT : DARKTEXT)};
  border: 1px solid ${(props) => (props.theme === LIGHT ? LIGHTTEXT : DARKTEXT)};
  border-left: 0;
  border-right: 0;
  border-top: 0;
  height: 80px;
`;

export { ThemeColor, BorderColor };
