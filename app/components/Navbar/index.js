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
                      <Link href="/ridesharerecord">YourRecord</Link>
                    </NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks>
                      <Link href="/carpool">查看</Link>
                    </NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks>
                      <Link href="/createCarpool">創建</Link>
                    </NavLinks>
                  </NavItem>

                  <NavItem>
                    <NavLinks>
                      <a onClick={signOut}>Sign out</a>
                    </NavLinks>
                  </NavItem>
                </>
              ) : (
                <>
                  <NavItem>
                    <NavLinks>
                      <Link href="/discover">Discover</Link>
                    </NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks>
                      <Link href="/service">Services</Link>
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
                  Hi, {session.user.name}
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
