import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import { Design, Develope } from "./AllSvgs";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import BigTitle from "../subComponents/BigTitlte";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 0.8vw);

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 0.8vw);
  padding: 0.5rem 0;

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
`;

const MyExperiencePage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <Main>
          <Title>
            <Design width={40} height={40} /> Software Developer Intern,
            Arcesium
          </Title>
          <Description>
            <ul>
              <li>
                Developed an in-memory data analytics microservice, to reduce
                the overhead of databases while performing SQL-like operations
                on large datasets.
              </li>
              <li>
                Increased the supported input dataset sizes by 30x and reduced
                computation time by 10x wrt orthodox DB.
              </li>
            </ul>
          </Description>
          <Description>
            <strong>Tech Stack</strong>
            <ul>
              <li>Python, Dask, Pytest</li>
            </ul>
          </Description>
        </Main>
        <Main>
          <Title>
            <Develope width={40} height={40} /> Product Developer, Appointy
          </Title>
          <Description>
            <ul>
              <li>
                Developed an application for appointment sharing in two steps,
                integrated with main product.
              </li>
              <li>
                Developed Outlook and Chrome Plugins from scratch, integrated
                the “Appointment Sharing” app as a web component
              </li>
            </ul>
          </Description>
          <Description>
            <strong>Tech Stack</strong>
            <ul>
              <li>React.js, GraphQL, Relay</li>
            </ul>
          </Description>
        </Main>
        <BigTitle text="EXPERIENCE" top="80%" right="30%" />
      </Box>
    </ThemeProvider>
  );
};

export default MyExperiencePage;
