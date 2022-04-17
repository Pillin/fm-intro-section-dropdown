import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import {
  DatabizClient,
  MakerClient,
  MeetClient,
  AudiophileClient
} from "./core/Icons";

const Container = styled(motion.section)`
  max-width: 450px;
  width: 100%;
  display: flex;
  padding: 80px 0px 0px 0px;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px 16px;
  @media (min-width: 769px) {
    justify-content: space-around;
  }
`;

const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5
    }
  }
};

const CompanyBar = () => {
  return (
    <Container variants={containerVariant} initial="hidden" animate="show">
      <DatabizClient />
      <AudiophileClient />
      <MeetClient />
      <MakerClient />
    </Container>
  );
};

export default CompanyBar;
