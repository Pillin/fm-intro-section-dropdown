import React, { ReactNode } from "react";
import { Link } from "./core/Buttons";
import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowUp } from "./core/Icons";

interface DropdownList {
  name: string;
  icon?: ReactNode;
  onClick: Function;
}

const ModalSection = styled(motion.section)<{ right: string }>`
  display: flex;
  flex-direction: column;
  background: rgb(250, 250, 250);
  width: fit-content;
  max-width: fit-content;
  justify-items: flex-start;
  padding: 0px 0px 16px 0px;
  gap: 0px 16px;

  > button,
  > section > button {
    display: flex;
    padding: 8px 0px;
    gap: 0px 16px;
  }

  > button > div:first-of-type {
    width: 24px;
    display: flex;
    justify-content: center;
  }

  > button > div:last-of-type {
    width: fit-content;
    text-align: left;
  }

  @media (min-width: 769px) {
    position: absolute;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.149126);
    border-radius: 10px;
    right: ${(props: { right: string }) => props.right};
    padding: 24px;
    top: 24px;
  }
`;

const Container = styled(motion.section)`
  display: flex;
  flex-direction: column;
  position: relative;
  @media (min-width: 769px) {
  }
`;

const menuOptionVariant = {
  hidden: { opacity: 0 },
  show: (custom: number) => ({
    opacity: 1,
    transition: {
      delay: custom * 0.15
    }
  }),
  hover: {
    scale: 1.05,
    transition: { duration: 0.002 }
  },
  selected: {
    opacity: 1,
    transition: { duration: 0.002 }
  },
  tap: {
    scale: 1.1
  }
};

const Dropdown = (props: {
  label: string;
  list: DropdownList[];
  direction: string;
}) => {
  const [open, setOpen] = React.useState(false);
  return (
    <Container
      initial={{ left: "-200px", opacity: 0 }}
      animate={{ left: "0px", opacity: 1 }}
    >
      <Link onClick={() => setOpen(!open)}>
        {props.label}
        <span> </span>
        {!open ? <ArrowDown /> : <ArrowUp />}
      </Link>
      {open && (
        <ModalSection
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0 }}
          right={props.direction === "right" ? "0px" : ""}
        >
          <AnimatePresence>
            {props.list.map(({ name, icon, onClick }, index) => (
              <Link
                whileHover="hover"
                whileTap="tap"
                variants={menuOptionVariant}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0 }}
                custom={index}
                key={`${props.label}-list-${index}`}
                onClick={(e: any) => onClick(e)}
              >
                {icon && <div>{icon}</div>}
                <div>{name}</div>
              </Link>
            ))}
          </AnimatePresence>
        </ModalSection>
      )}
    </Container>
  );
};

export default Dropdown;
