import React from "react";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  UserGreeting,
  NavLogout,
  Profileicon,
} from "./NavbarElement";
import { signIn, signOut, useSession } from "next-auth/react";
import { SessionProvider } from "next-auth/react";

const Navbar = ({ toggle }) => {
  const username = true;
  const { data: session } = useSession();

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo>
            <Link href="/">CarryU</Link>
          </NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <SessionProvider>
            <NavMenu>
              {session?.user ? (
                <>
                  <NavItem>
                    <NavLinks>
                      <Link href="/ridesharerecord">你的記錄</Link>
                    </NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks>
                      <Link href="/carpool">查看共乘</Link>
                    </NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks>
                      <Link href="/createCarpool">創建共乘</Link>
                    </NavLinks>
                  </NavItem>

                  <NavItem>
                    <NavLinks>
                      <a onClick={signOut}>登出</a>
                    </NavLinks>
                  </NavItem>
                </>
              ) : (
                <>
                  <NavItem>
                    <NavLinks>
                      <Link href="/ridesharerecord">你的記錄</Link>
                    </NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks>
                      <Link href="/carpool">查看共乘</Link>
                    </NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks>
                      <Link href="/createCarpool">創建共乘</Link>
                    </NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks>
                      <Link href="/signup">Sign up</Link>
                    </NavLinks>
                  </NavItem>
                </>
              )}
            </NavMenu>
          </SessionProvider>
          <SessionProvider>
            <NavBtn>
              {session?.user ? (
                // 顯示用戶名
                <UserGreeting>
                  您好, {session.user.name}
                  <Link href="/settings">
                    <Profileicon />
                  </Link>
                </UserGreeting>
              ) : (
                // 如果沒有用戶名（未登入），顯示登入按鈕
                <NavBtnLink onClick={signIn}>Sign In</NavBtnLink>
              )}
            </NavBtn>
          </SessionProvider>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
