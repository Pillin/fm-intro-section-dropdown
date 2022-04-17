import React, { ReactNode } from "react";
import { motion } from "framer-motion";

const InitialButton = {
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "18px",
  lineHeight: "28px",
  textAlign: "center",
  letterSpacing: "-0.25px",
  color: "#FAFAFA",
  backgroundColor: "#151515",
  borderRadius: "15px",
  borderColor: "#151515",
  maxWidth: "170px",
  cursor: "pointer"
};

const ButtonVariants = {
  initial: {
    ...InitialButton,
    color: "#FAFAFA",
    backgroundColor: "#151515",
    borderColor: "#151515",
    maxWidth: "170px",
    width: "100%",
    height: "60px"
  },
  animate: {
    color: "#FAFAFA",
    backgroundColor: "#151515"
  },
  hover: {
    backgroundColor: "#FAFAFA",
    color: "#151515",
    borderColor: "#151515"
  },
  tap: {
    scale: 1.1
  }
};

const RegisterButtonVariants = {
  initial: {
    ...InitialButton,
    color: "#686868",
    backgroundColor: "#FAFAFA",
    borderColor: "#686868",
    maxWidth: "170px",
    width: "100%",
    height: "40px",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "16px",
    padding: "10px 16px 12px 16px"
  },
  animate: {
    color: "#686868",
    backgroundColor: "#FAFAFA"
  },
  hover: {
    backgroundColor: "#151515",
    color: "#FAFAFA",
    borderColor: "#151515"
  },
  tap: {
    scale: 1.1
  }
};

const LinkVariant = {
  initial: {
    ...InitialButton,
    color: "#686868",
    backgroundColor: "#FAFAFA",
    borderColor: "#FAFAFA",
    border: "0px",
    maxWidth: "170px",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "16px",
    display: "flex",
    alignItems: "center",
    gap: "0px 8px"
  },
  animate: {
    color: "#686868",
    backgroundColor: "#FAFAFA"
  },
  hover: {
    backgroundColor: "#FAFAFA",
    color: "#686868",
    borderColor: "#FAFAFA"
  },
  tap: {
    scale: 1.1
  }
};

const Button = (propsFunction: {
  variants: typeof ButtonVariants;
}) => (propsChildren: { label: string | ReactNode }) => (props: {
  onClick: Function;
}) => (
  <motion.button
    initial="initial"
    animate="animate"
    variants={propsFunction.variants}
    whileHover="hover"
    whileTap="tap"
    onClick={(e) => props.onClick(e)}
  >
    {propsChildren.label}
  </motion.button>
);

export const LearnMoreButton = Button({
  variants: ButtonVariants
})({ label: "Learn More" });

export const Link = (props: { onClick: Function; children: ReactNode }) => (
  <motion.button
    initial="initial"
    animate="animate"
    variants={LinkVariant}
    whileHover="hover"
    whileTap="tap"
    onClick={(e) => props.onClick(e)}
  >
    {props.children}
  </motion.button>
);

export const Register = Button({
  variants: RegisterButtonVariants
})({ label: "Register" });

export const Login = (props: { onClick: Function }) => (
  <Link onClick={props.onClick}>Login</Link>
);
