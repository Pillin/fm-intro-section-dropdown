import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Picture = styled(motion.picture)`
  width: fit-content;

  > img {
    width: 100%;
  }
`;

const Img = styled(motion.img)``;

const Image = (props: { mobile: string; desktop: string; style: any }) => {
  return (
    <Picture>
      <source media="(max-width: 768px)" srcset={props.mobile} />
      <source media="(min-width: 769px)" srcset={props.desktop} />
      <Img
        src={props.desktop}
        style={props.style}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 2.5 } }}
        alt="Chris standing up holding his daughter Elva"
      />
    </Picture>
  );
};

export default Image;
