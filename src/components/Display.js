import styled from "styled-components";

export const Display = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  color: white;
  & div {
    display: flex;
    &.name {
      font-size: 2rem;
    }
    &.temp {
      font-size: 12rem;
      font-family: monospace;
      color: white;

      &::after {
        content: "°C";
        font-size: 2rem;
        margin-top: 1rem;
      }
    }
    &.description {
      color: white;
      font-size: 1rem;
      font-style: italic;
      text-transform: capitalize;
    }

    &.icon {
      height: 10vh;
      width: 10vw;
      background: url("http://openweathermap.org/img/wn/${(props) =>
        props.iconCode}@2x.png");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: right;
    }

    &.descriptionContainer {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
