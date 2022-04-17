import React, { ReactNode } from "react";
import { Link } from "./core/Buttons";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

interface DropdownList {
  name: string;
  icon?: ReactNode;
  onClick: Function;
}

const ModalSection = styled(motion.section)<{ right: string }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.149126);
  border-radius: 10px;
  width: fit-content;
  max-width: fit-content;
  right: ${(props: { right: string }) => props.right};
  padding: 24px;
  top: 24px;
  justify-items: flex-start;
  gap: 0px 16px;

  > button {
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
`;

const Container = styled.section`
  display: flex;
  position: relative;
`;

const Dropdown = (props: {
  label: string;
  list: DropdownList[];
  direction: string;
}) => {
  const [open, setOpen] = React.useState(false);
  return (
    <Container>
      <Link onClick={() => setOpen(!open)}>{props.label}</Link>
      {open && (
        <ModalSection right={props.direction === "right" ? "0px" : ""}>
          {props.list.map(({ name, icon, onClick }, index) => (
            <Link
              key={`${props.label}-list-${index}`}
              onClick={(e: any) => onClick(e)}
            >
              {icon && <div>{icon}</div>}
              <div>{name}</div>
            </Link>
          ))}
        </ModalSection>
      )}
    </Container>
  );
};

export default Dropdown;
