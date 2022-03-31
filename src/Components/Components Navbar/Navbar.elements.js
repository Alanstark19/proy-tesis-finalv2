import styled from 'styled-components'

export const Container2 = styled.div`
width: 100%;
height: 70px;
background-color: #003c6b;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
`;

export const LogoContainer = styled.div`
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-family: sans-serif;
  p{
    &:nth-child(2){
      color: #fff;
    }

    &:nth-child(3){
      color: #fff;
      font-size: 1.5rem;
      font-weight: 500;
    }
  }
  svg{
    fill: #976b00;
    margin-right: 0.5rem;
  }
`;

export const Menu = styled.ul`
height: 100%;
display: flex;
justify-content: space-between;
list-style: none;

@media screen  and (max-width: 960px){
  background-color: #003c6b;
  position: absolute;
  top: 70px;
  left: ${({ open }) => (open ? "0" : "-100%")};
  width: 100%;
  height: 90vh;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  transition: 0.5s all ease;  

}
`;

export const MenuItem2 = styled.li`
height: 100%;

@media screen and (max-width: 960px) {
  width 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

export const MenuItemLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.5rem 2.5rem;
  color: #fff;
  font-family: sans-serif;
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  position: relative;
  z-index: 99;
  
  &:before {
    content: "";
    position: absolute;
    width: 95%;
    height: 92%;
    background: #cc9833;
    border: 2px solid #cc9833;
    transform: scale(0);
    opacity: 0;
  }
  &:after {
    content: "";
    position: absolute;
    width: 95%;
    height: 92%;
    background-color: #003c6b;
    border: 2px solid #393939;
    border-radius: 10px;
    transform: scale(0);
    opacity: 0;
  }


  &:hover {
    color: #eee;
    transition: 0.5s;
     
    &:before {
      opacity: 1;
      transform: scale(1);
      transition: 0.5s;
      z-index: -1;
    }
    &:after {
      opacity: 1;
      transform: scale(1);
      transition: 0.4s;
      border-radius: 15px;
      z-index: -1;
    }
  }
  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      display: none;
      fill: #976b00;
      margin-right: 0.5rem;
    }
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    div {
      width: 30%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
  @media screen and (max-width: 880px) {
    div {
      width: 40%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
  @media screen and (max-width: 500px) {
    div {
      width: 60%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
  @media screen and (max-width: 260px) {
    div {
      width: 100%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
`;

export const MobileIcon = styled.a`
  display: none;

@media screen  and (max-width: 960px){
  display: flex;
  align-items: center;
  cursor: pointer;
  svg{
    fill: #cc9933;
    margin-right: 0.5rem;
  }

}

`;