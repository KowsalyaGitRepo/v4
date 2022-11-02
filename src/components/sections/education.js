import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledEducationSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: left;

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

const Education = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledEducationSection id="Education" ref={revealContainer}>
      <h3 className="numbered-heading">Education</h3>

      <span>Bachelors in Computer Science and Engineering </span>
      <span className="company">
        &nbsp;@&nbsp;
        <a href={'https://www.annauniv.edu/'} aria-label="External Link" className="external">
          <b>Anna university </b>
        </a>
      </span>
    </StyledEducationSection>
  );
};

export default Education;
