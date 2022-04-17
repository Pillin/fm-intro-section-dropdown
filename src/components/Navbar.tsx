import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import {
  CalendarIcon,
  Logo,
  TodoIcon,
  RemindersIcon,
  PlanningIcon,
  MenuIcon,
  CloseMenuIcon
} from "./core/Icons";
import Dropdown from "./Dropdown";
import { Link, Login, Register } from "./core/Buttons";
import useMediaQuery from "../hooks/useMediaQuery";

const HFlex = styled.section<{
  padding?: string;
  gap?: string;
  justify?: string;
  width?: string;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: ${(props: { width?: string }) => props.width};
  justify-content: ${(props: { justify?: string }) => props.justify};
  gap: ${(props: { gap?: string }) => props.gap};
  padding: ${(props: { padding?: string }) => props.padding};
`;

const Menu = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <>
      {!isMobile && <Logo width="120px" />}
      <Dropdown
        direction="right"
        label="Features"
        list={[
          { name: "Todo List", icon: <TodoIcon />, onClick: () => {} },
          { name: "Calendar", icon: <CalendarIcon />, onClick: () => {} },
          { name: "Reminders", icon: <RemindersIcon />, onClick: () => {} },
          { name: "Planning", icon: <PlanningIcon />, onClick: () => {} }
        ]}
      />
      <Dropdown
        direction="left"
        label="Company"
        list={[
          { name: "History", onClick: () => {} },
          { name: "Our Team", onClick: () => {} },
          { name: "Blog", onClick: () => {} }
        ]}
      />
      <Link onClick={() => {}}>Careers</Link>
      <Link onClick={() => {}}>About</Link>
    </>
  );
};

const MobileContainer = styled(motion.section)`
  position: absolute;
  z-index: 200;
  right: 0px;
  top: 0px;
  background: rgb(250, 250, 250);
  min-height: 100vh;
  height: 100%;
  width: 240px;
  display: flex;
  flex-direction: column;
  padding: 24px;

  button {
    padding: 16px 0px;
  }
  > svg {
    align-self: flex-end;
  }
`;

const AuthenticationContainer = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    flex-direction: row;
    gap: 0px 24px;
    align-items: center;
  }
`;

const AuthenticationBar = () => {
  return (
    <AuthenticationContainer>
      <Login onClick={() => {}} />
      <Register onClick={() => {}} />
    </AuthenticationContainer>
  );
};
const BlackOut = styled(motion.section)`
  position: absolute;
  width: 100vw;
  min-height: 100vh;
  height: 200%;
  top: 0px;
  left: 0px;
  opacity: 0.75;
  background-color: black;
  z-index: 10;
`;

const MobileMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      {isOpen && (
        <>
          <BlackOut onClick={() => setIsOpen(false)}></BlackOut>
          <MobileContainer>
            <CloseMenuIcon onClick={() => setIsOpen(!isOpen)} />
            <Menu />
            <AuthenticationBar />
          </MobileContainer>
        </>
      )}

      {!isOpen && <MenuIcon onClick={() => setIsOpen(!isOpen)} />}
    </>
  );
};

const Navbar = () => {
  const isDesktop = useMediaQuery("(min-width: 769px)");
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <HFlex
      gap="0px 24px"
      padding="0px 24px"
      justify="space-between"
      width="100%"
    >
      <HFlex padding="" gap="0px 24px">
        {isDesktop && <Menu />}
        {isMobile && <Logo />}
      </HFlex>
      <HFlex gap="0px 24px">
        {isDesktop && <AuthenticationBar />}
        {isMobile && <MobileMenu />}
      </HFlex>
    </HFlex>
  );
};

export default Navbar;
