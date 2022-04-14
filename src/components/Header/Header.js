import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS, QUERIES} from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import VisuallyHidden from '../VisuallyHidden';


const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <IconWrapper>
          <ShoppingButton>
          <Icon id="shopping-bag" color={COLORS.gray[900]} strokeWidth={2}/>
          <VisuallyHidden>Open Cart</VisuallyHidden>
          </ShoppingButton>
          <UnstyledButton>
          <Icon id="search" color={COLORS.gray[900]} strokeWidth={2}/>
          <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton>
          <Icon id="menu" color={COLORS.gray[900]} strokeWidth={2}
          onClick={() => setShowMobileMenu(true)}
          />
          <VisuallyHidden>Open Menu</VisuallyHidden>
          </UnstyledButton>
          </IconWrapper>
          <Filler/>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  overflow-x: auto;
  overflow-y: hidden;

  @media ${QUERIES.tabletMax} {
    align-items: center;
    justify-content: space-between;
    border-top: 4px solid ${COLORS.gray[900]};
  }

  @media ${QUERIES.mobileMax} {
    padding: 18px 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(
    1rem,
    10.2vw - 5rem,
    3.5rem
  );
  
  margin: 0px 48px;

  @media ${QUERIES.tabletMax} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;

  @media ${QUERIES.tabletMax} {
    flex: revert;
  }
`;

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletMax} {
    display: none;
  }
`;


const IconWrapper = styled.div`
  display: none;

  @media ${QUERIES.tabletMax} {
    display: flex;
    gap: 32px;
    align-items: center;
  }

  @media ${QUERIES.mobileMax} {
    gap: 16px;
  }
`;

const ShoppingButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
