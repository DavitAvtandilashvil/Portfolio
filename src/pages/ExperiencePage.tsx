import styled from "styled-components";
import SingleProject from "../components/SingleProject";

export default function ExperiencePage() {
  return (
    <Experience>
      <ExperienceWrapper>
        <h2>Projects</h2>
        <AllProjects>
          <SingleProject />
        </AllProjects>
      </ExperienceWrapper>
    </Experience>
  );
}

const Experience = styled.div`
  padding: 4rem 17rem 0rem;
`;

const ExperienceWrapper = styled.div`
  & > h2 {
    color: #fff;
    font-family: Preahvihear;
    font-size: 4rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.8px;
  }
`;

const AllProjects = styled.div``;
