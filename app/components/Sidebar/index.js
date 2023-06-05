import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBtnWrap,
  SidebarLink,
  SiderbarWrapper,
  SidebarRoute,
  SiderbarMenu,
} from "./SidebarElement";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SiderbarWrapper>
        <SiderbarMenu>
          <SidebarLink to="/CreateCarpool" onClick={toggle}>
            組團
          </SidebarLink>
          <SidebarLink to="/carpool" onClick={toggle}>
            查看
          </SidebarLink>
          <SidebarLink to="Service" onClick={toggle}>
            Service
          </SidebarLink>
          <SidebarLink to="/signup" onClick={toggle}>
            Sign Up
          </SidebarLink>
        </SiderbarMenu>
        <SideBtnWrap to="/signin">
          <SidebarRoute>Sign In</SidebarRoute>
        </SideBtnWrap>
      </SiderbarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
