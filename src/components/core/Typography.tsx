import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Theme } from "../../theme";

export const H1 = styled(motion.h1)<{ theme?: Theme }>`
  color: ${({ theme }) => theme.colors.neutral.almostBlack};
  font-style: normal;
  font-weight: 700;

  font-size: 36px;
  line-height: 42px;
  word-wrap: normal;
  text-align: center;
  letter-spacing: -0.5px;

  @media (min-width: 769px) {
    font-size: 80px;
    line-height: 80px;
    text-align: left;
    letter-spacing: -1.11111px;
  }
`;
export const P = styled(motion.p)<{ theme?: Theme }>`
  color: ${({ theme }) => theme.colors.neutral.mediumGray};
  font-style: normal;
  font-weight: 500;

  font-size: 16px;
  line-height: 26px;

  text-align: center;
  @media (min-width: 769px) {
    font-size: 18px;
    line-height: 28px;
    text-align: left;
  }
`;
