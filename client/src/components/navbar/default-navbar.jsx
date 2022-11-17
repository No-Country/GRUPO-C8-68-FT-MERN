import { Header, HeaderLinks, HeaderLinksLi, HeaderLogo, Nav } from "./styles";

export const DefaultNavbar = () => {
  return (
    <Header>
      <Nav>
        <HeaderLogo>
          {/* <img src={} className="logo" alt="logo" /> */}
        </HeaderLogo>
        <HeaderLinks>
          <HeaderLinksLi>
            <a href="/">Games</a>
          </HeaderLinksLi>
          <HeaderLinksLi>
            <a href="/">
              {/* <BsCart size="30px" /> */}
            </a>
          </HeaderLinksLi>
          <HeaderLinksLi>
            <a href="/">Log in</a>
          </HeaderLinksLi>
          <HeaderLinksLi>
            <a href="/register">Register</a>
          </HeaderLinksLi>
        </HeaderLinks>
      </Nav>
    </Header>
  );
};
