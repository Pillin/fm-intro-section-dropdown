import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Picture = styled(motion.picture)`
  width: 100%;

  > img {
    width: 100%;
  }
`;

const Image = (props: { mobile: string; desktop: string; style: any }) => {
  return (
    <Picture>
      <source media="(max-width: 768px)" srcset={props.mobile} />
      <source media="(min-width: 769px)" srcset={props.desktop} />
      <img
        src={props.desktop}
        style={props.style}
        alt="Chris standing up holding his daughter Elva"
      />
    </Picture>
  );
};

export default Image;
