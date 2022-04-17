import React from "react";

import { motion } from "framer-motion";

import { H1, P } from "./core/Typography";
import styled from "@emotion/styled";
import CompanyBar from "./CompanyBar";
import Image from "./Image";
import { LearnMoreButton } from "./core/Buttons";

const HFlex = styled.section`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 16px;
  gap: 24px 80px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const CFlex = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px 0px;
  max-width: 513px;
`;

export default (props: any) => {
  return (
    <HFlex>
      <CFlex>
        <H1>Make remote work</H1>
        <P>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </P>
        <LearnMoreButton onClick={() => {}} />
        <CompanyBar />
      </CFlex>
      <CFlex>
        <Image
          style={{
            width: "430px"
          }}
          mobile="image-hero-mobile.png"
          desktop="image-hero-desktop.png"
        />
      </CFlex>
    </HFlex>
  );
};