import { theme } from "@/app/styles/theme";
import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 90vh;
  border: 2px solid lightblue;
`;

export const TopContent = styled.div`
  width: 50%;
  height: 50%;
  background-color: red;

  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  h1 {
    font-size: 3rem;
    text-align: left;
    width: 40%;
    margin-right: 2rem;
    color: ${theme.colors.light};
    font-family: ${theme.fonts.montserrat};
  }
`;

export const BottomContent = styled.div`
  width: 50%;
  height: 50%;
  background-color: blue;
  margin-left: auto;

  display: flex;

  h1 {
    font-size: 3rem;
    text-align: left;
    width: 40%;
    margin-left: 2rem;
    color: ${theme.colors.light};
  }
`;
