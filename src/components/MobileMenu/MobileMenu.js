/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS, WEIGHTS, QUERIES } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen = {isOpen} onDismiss={onDismiss}>
    <Content aria-label="Mobile Menu Modal">
      <Filler>
      <CloseButton onClick={onDismiss}>
        <Icon id='close'/>
        <VisuallyHidden>Dismiss menu </VisuallyHidden>
      </CloseButton>
      </Filler>
      <NavigationMenu>
        <NavLink href="/sale">Sale</NavLink>
        <NavLink href="/new">New&nbsp;Releases</NavLink>
        <NavLink href="/men">Men</NavLink>
        <NavLink href="/women">Women</NavLink>
        <NavLink href="/kids">Kids</NavLink>
        <NavLink href="/collections">Collections</NavLink>
      </NavigationMenu>
     

      <Filler>
      <Footer>
        <FooterLink href="/terms">Terms and Conditions</FooterLink>
        <FooterLink href="/privacy">Privacy Policy</FooterLink>
        <FooterLink href="/contact">Contact Us</FooterLink>
      </Footer>
      </Filler>
    </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: hsla(220deg, 5%, 40%, 0.8);
  display: flex;
  justify-content: flex-end;
`;
 
const Content = styled(DialogContent)`
    background-color: var(--color-white);
    width: 80%;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 32px;
`;

const Filler = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const CloseButton = styled(UnstyledButton)`
    position: absolute;
    top: 26px;
    right: 16px;
`;

const NavigationMenu = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 22px;
`;

const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    gap: 14px;
`;

const NavLink = styled.a`
    color: ${COLORS.gray[900]};
    text-decoration: none;
    font-size: ${18 / 16}rem;
    font-weight: var(--weight-medium);
    text-transform: uppercase;

    &:first-of-type{
      color: var(--color-secondary);
    }
`;

const FooterLink = styled.a`
    color: ${COLORS.gray[700]};
    text-decoration: none;
    font-size: ${14 / 16}rem;
    font-weight: ${WEIGHTS.normal};
`;

export default MobileMenu;
