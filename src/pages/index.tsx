import * as React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";

const Main = styled(motion.main)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 0px;
`;

const IndexPage = () => {
  return (
    <Main>
      <AnimatePresence>
        <Navbar />
        <Card />
      </AnimatePresence>
    </Main>
  );
};

export default IndexPage;
