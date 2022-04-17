import React from "react";
import styled from "@emotion/styled";
import {
  CalendarIcon,
  Logo,
  TodoIcon,
  RemindersIcon,
  PlanningIcon
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
  return (
    <>
      <Logo width="120px" />
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

const AuthenticationBar = () => {
  return (
    <>
      <Login onClick={() => {}} />
      <Register onClick={() => {}} />
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
        {isMobile && <Logo />}
      </HFlex>
    </HFlex>
  );
};

export default Navbar;
