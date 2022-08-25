import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'Redux/Auth/auth-operations';
import {
  Container,
  MyNavLink,
  NavContainer,
  WellcomeContainer,
} from './styled.module';

function NavBar() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const userName = useSelector(state => state.auth.user.name);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authOperations.logoutUser());
  };

  return (
    <Container>
      <NavContainer className={`container`}>
        <nav>
          <MyNavLink to="/">Home</MyNavLink>

          {isLoggedIn && <MyNavLink to="/phonebook">Phonebook</MyNavLink>}
        </nav>

        {isLoggedIn ? (
          <WellcomeContainer>
            <p>Welcome, {userName}!</p>
            <button type="button" onClick={handleLogout}>
              Sign out
            </button>
          </WellcomeContainer>
        ) : (
          <div>
            <MyNavLink to="/login">Sign in</MyNavLink>
            <MyNavLink to="/register">Sign up</MyNavLink>
          </div>
        )}
      </NavContainer>
    </Container>
  );
}

export default NavBar;
