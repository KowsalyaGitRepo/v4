import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledSkillsSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: left;
  font-family: var(--font-mono);
  font-size: var(--fz-xs);

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }
  .text {
    font-size: var(--fz-md);
    textAlign: "left",
    font-weight: 400;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Skills = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledSkillsSection id="Skills" ref={revealContainer}>
      <h2 className="numbered-heading">Skills</h2>
      <p>• Languages: Kotlin, Java, Swift, Javascript, HTML, CSS, SQL, PHP, XML, JSON </p>
      <p>
        • Technologies: Android Studio, Xcode, JIRA, AWS, PlayStore, AppStore, React Native, Flutter{' '}
      </p>
      <p>
        • Version Control: Source tree, Svn, Git, GitLab, Github CI/CD tool: Jenkins Editor: Visual
        studio code, Sublime, Notepad++{' '}
      </p>
      <p>• Certification: C, C++ Software development methodologies: Agile, Scrum</p>
      <p>• User interface : Figma, Adobe XDPhotoshop:Adobe Illustrator, Corel draw</p>
      <p>• IoT: NFC, BLE, IBeacon, ZigBee</p>
      <p>• Others: Cocoapods, Carthage, Maven or Gradle</p>
    </StyledSkillsSection>
  );
};

export default Skills;
