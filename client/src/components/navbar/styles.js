import styled from "styled-components";

export const Header = styled.header`
height: 167px;
width: 100vw;
background: #FFFFFF;
`
export const Nav = styled.nav`
    background: linear-gradient(90deg, rgba(58,73,180,1) 51%, rgba(35,183,217,1) 100%);
    height: 167px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid rgb(2, 164, 204);
    box-shadow: 4px 0 8px rgb(2, 83, 103);
`
export const HeaderLogo = styled.div`
margin-left: 50px;
`
export const HeaderLinks = styled.ul`
    display: flex;
    margin-right: 50px;
    list-style:none;
`
export const HeaderLinksLi = styled.li`
margin: 0 20px;
a{
    color: rgb(255, 255, 255);
    font-size: 20px;
    padding: 0px 12px;
    display: block;
    
    a:hover{
    color: rgb(7, 3, 43);
    transition: .3s;
  }
}
`
