import styled from "styled-components";

export const Buscador = styled.input.attrs({
  type: "text",
  placeholder: "Ciudad...",
})`
  height: 2.5rem;
  width: 60vw;
  border-radius: 10px;
  padding-left: 7px;
  font-family: "Courier New", Courier, monospace;
  font-size: 1rem;
  text-decoration: none;
  outline: none;
  border: none;
  text-transform: uppercase;
  letter-spacing: 0.09rem;

  &:focus {
    border: none;
    resize: none;
    outline: none;
  }
`;
