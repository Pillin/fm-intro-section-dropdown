import React, { ReactNode } from "react";
import { motion } from "framer-motion";

import ArrowUp from "../../images/icon-arrow-up.svg";
import ArrowDown from "../../images/icon-arrow-down.svg";

import Databiz from "../../images/client-databiz.svg";

import Maker from "../../images/client-maker.svg";
import Meet from "../../images/client-meet.svg";
import Audiophile from "../../images/client-audiophile.svg";

export { default as Logo } from "../../images/logo.svg";

export { default as CalendarIcon } from "../../images/icon-calendar.svg";
export { default as CloseMenuIcon } from "../../images/icon-close-menu.svg";
export { default as MenuIcon } from "../../images/icon-menu.svg";
export { default as PlanningIcon } from "../../images/icon-planning.svg";
export { default as RemindersIcon } from "../../images/icon-reminders.svg";
export { default as TodoIcon } from "../../images/icon-todo.svg";

const itemVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
};

const Wrapper = (props: { children: ReactNode }) => (
  <motion.div variants={itemVariant}>{props.children}</motion.div>
);

const DatabizClient = () => (
  <Wrapper>
    <Databiz />
  </Wrapper>
);

const MakerClient = () => (
  <Wrapper>
    <Maker />
  </Wrapper>
);

const MeetClient = () => (
  <Wrapper>
    <Meet />
  </Wrapper>
);

const AudiophileClient = () => (
  <Wrapper>
    <Audiophile />
  </Wrapper>
);

export {
  ArrowUp,
  ArrowDown,
  DatabizClient,
  AudiophileClient,
  MeetClient,
  MakerClient
};
