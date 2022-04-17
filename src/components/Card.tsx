import React from "react";

import { motion } from "framer-motion";

import { H1, P } from "./core/Typography";
import styled from "@emotion/styled";
import CompanyBar from "./CompanyBar";
import Image from "./Image";
import { LearnMoreButton } from "./core/Buttons";

const HFlex = styled(motion.section)`
  display: flex;
  flex-direction: column-reverse;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 16px;
  gap: 24px 80px;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;
const CFlex = styled(motion.section)`
  display: flex;
  flex-direction: column;
  gap: 40px 0px;
  max-width: 513px;
  width: 100%;
  align-items: center;
  @media (min-width: 769px) {
    align-items: flex-start;
  }
`;

const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 1
    }
  }
};
export default (props: any) => {
  return (
    <HFlex>
      <CFlex variants={containerVariant}>
        <H1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1.5 } }}
          whileHover={{
            color: "black",
            scale: 1.01,
            transition: { duration: 1 }
          }}
        >
          Make remote work
        </H1>
        <P
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2 } }}
          whileHover={{
            color: "black",
            scale: 1.01,
            transition: { duration: 1 }
          }}
        >
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </P>
        <LearnMoreButton onClick={() => {}} />
        <CompanyBar />
      </CFlex>
      <CFlex>
        <Image
          style={{
            maxWidth: "430px",
            width: "100%"
          }}
          mobile="image-hero-mobile.png"
          desktop="image-hero-desktop.png"
        />
      </CFlex>
    </HFlex>
  );
};
