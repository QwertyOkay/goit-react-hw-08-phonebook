import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  background-color: #000;

  text-decoration: none;
  /* box-shadow: 0px 3px 20px #7a7a7a; */
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px;
`;

export const WellcomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & p {
    margin-right: 10px;

    font-size: 16px;
    font-weight: 300;
    margin-top: 0px;
    letter-spacing: 2px;
    font-weight: 300;
    color: white;

    text-decoration: inherit;

    /* text-shadow: 1px 1px 0 #7a7a7a; */
  }

  & button {
    padding: 3px 10px;
    border-radius: 5px;

    background-color: white;
    color: #000;
    font-size: 12px;
    line-height: 1.3;
    letter-spacing: 1px;

    border: none;
    cursor: pointer;

    text-shadow: 0 0 10px #ffffff;
  }
`;

export const MyNavLink = styled(NavLink)`
  padding: 5px 10px;
  margin-right: 20px;

  font-size: 16px;
  font-weight: 300;
  margin-top: 0px;
  letter-spacing: 2px;
  font-weight: 300;
  color: white;

  text-decoration: inherit;

  text-shadow: 1px 1px 0 #7a7a7a;
  &.active {
    border: 1px solid white;
    border-radius: 10px;

    box-shadow: 1px 1px 1px 0px white, inset 1px 1px 5px 0px white,
      1px 1px 5px 2px rgba(0, 0, 0, 0);
  }
`;
