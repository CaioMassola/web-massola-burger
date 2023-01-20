import styled from "styled-components";

const Theme = styled.section.attrs((props: { color: string }) => props)`
  background-color: ${(props) => props.color};
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

export default Theme;
