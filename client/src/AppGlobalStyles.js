import styled from "styled-components";

export const AppContainer = styled.div`
  color: white;
  min-height: 100%;
  width: 100%;
  position: absolute;
  padding-top: 130px;
  padding-bottom: 150px;
  background-color: #141518;

  /* //! Para elegir tipo de fuente añadiendo un className
  */
  .font-light {
    font-weight: 300;
  }
  .font-regular {
    font-weight: 400;
  }
  .font-semibold {
    font-weight: 500;
  }
  .font-bold {
    font-weight: 700;
  }

  /* //! Para elegir color de fuente añadiendo un className
  */
  .color-gray {
    color: #9C9797;
  }
  .color-skyblue {
    color: #00ADEF;
  }

  /* //! Para hacer invisibles objetos con la clase hide
  */
  .hide {
    opacity: 0;
  }

  /* //! Para quitar centrado con margen con clase centerOff
  */
  .centerOff {
    margin: 0;
  }
`

/* //* Títulos
*/
export const Title = styled.h1`
  margin: 0 auto;
  width: fit-content;
  font-size: 26px;
  font-weight: 500;
  @media (min-width: 600px) {
    font-size: 30px;
  }
`

/* //* Subtítulos
*/
export const Subtitle = styled.h2`
  font-size: 21px;
  font-weight: 400;
  @media (min-width: 600px) {
    font-size: 25px;
  }
`

/* //* Texto
*/
export const Text = styled.p`
  font-size: 16px;
  transition: color .4s ease, opacity .4s ease;
  @media (min-width: 600px) {
    font-size: 20px;
  }
`

/* //* Cuando se quiera insertar un Texto que tenga Links o Simplemente un Link del Router DOM
*/
export const LinkedText = styled.p`
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 6px;
  a {
    font-smooth: 16px;
    text-decoration: none;
    color: #9C9797;
    display: inline-block;
    position: relative;
    overflow: hidden;
    transition: color .4s ease;
    ::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #9C9797;
    }
    ::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: -1px;
      width: 100%;
      height: 1px;
      background-color: white;
      transform: translate3d(-100%, 0, 0);
      transition: transform .4s ease;
    }
    :hover {
      color: white;
      ::after {
        transform: translate3d(0, 0, 0);
      }
    }
    :focus {
      color: white;
      ::after {
        transform: translate3d(0, 0, 0);
      }
    }
    @media (min-width: 600px) {
      font-size: 20px;
    }
  }
  @media (min-width: 600px) {
    font-size: 20px;
    gap: 7px;
  }
`

/* //* Formulario
*/
export const Form = styled.div`
  width: 90%;
  max-width: 740px;
  margin: 10px auto;
  position: relative;
  padding: 23px 9px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(105, 129, 138, 0.65);
  border: 1px solid #fff6;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  form {
    color: white;
    width: 80%;
    max-width: 510px;
    display: flex;
    flex-direction: column;
    align-items: center;
    label {
      font-size: 16px;
      align-self: flex-start;
      @media (min-width: 600px) {
        font-size: 20px;
      }
    }
    /* //* Si se quiere colocar un botón dentro del Input, encerrar ambos dentro de un Div y ponerle la clase "input__button"
    */
    div {
      position: relative;
      width: 100%;
    }
    input {
      box-sizing: border-box;
      margin: 10px 0;
      width: 100%;
      padding: 2rem 1.2rem;
      color: white;
      border: none;
      border-radius: 20px;
      background: rgba(217, 217, 217, 0.3);
      font-size: 16px;
      font-weight: 400;
      outline: none;
      :focus {
        outline: 1px solid #fff6;
      }
      @media (min-width: 600px) {
        font-size: 20px;
      }
    }
    .input__button {
      position: absolute;
      right: 18px;
      top: 50%;
      transform: translateY(-50%);
      :active {
        transform: scale(.8) translateY(-62%);
      }
    }
  }
  a {
    font-smooth: 16px;
    text-decoration: none;
    color: white;
    display: inline-block;
    position: relative;
    overflow: hidden;
    transition: color .4s ease;
    ::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: white;
    }
    ::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: -1px;
      width: 100%;
      height: 1px;
      background-color: #9C9797;
      transform: translate3d(-100%, 0, 0);
      transition: transform .4s ease;
    }
    :hover {
      color: #9C9797;
      ::after {
        transform: translate3d(0, 0, 0);
      }
    }
    :focus {
      color: #9C9797;
      ::after {
        transform: translate3d(0, 0, 0);
      }
    }
    @media (min-width: 600px) {
      font-size: 20px;
    }
  }
`

/* //* Botones
*/
export const BigButton = styled.button`
  height: 86px;
  width: 48.3%;
  margin: 6px;
  font-size: 16px;
  padding: 0 10px;
  border: none;
  border-radius: 16px;
  align-self: center;
  background-color: white;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  transition: filter .2s ease;
  :hover {
    cursor: pointer;
    filter: brightness(.8);
  }
  p {
    text-align: end;
    padding: 0 10px;
  }
  @media (min-width: 600px) {
    gap: 10px;
    font-size: 20px;
    padding: 1.4rem 2rem;
    p {
      text-align: center;
      padding: 0;
    }
  }
  @media (max-width: 400px) {
    p {
      display: none;
    }
  }
`
export const MediumButton = styled.button`
  height: 62px;
  min-width: 197px;
  margin: 6px;
  font-size: 16px;
  padding: 0 10px;
  border: none;
  border-radius: 16px;
  align-self: center;
  background-color: white;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  transition: filter .2s ease;
  :hover {
    cursor: pointer;
    filter: brightness(.8);
  }
  @media (min-width: 600px) {
    gap: 10px;
    font-size: 20px;
    padding: 1.4rem 2rem;
  }
  @media (max-width: 360px) {
    p {
      display: none;
    }
  }
`
export const MiniButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: none;
  background: none;
  border-radius: 50%;
  transition: background-color .2s ease, transform .2s ease;
  :hover {
    cursor: pointer;
    background-color: #0003;
  }
  :active {
    transform: scale(.8);
  }
`

/* //* Contenedores
*/
export const TitlesContainer = styled.div`
  width: 80%;
  max-width: 620px;
  margin: 0 auto;
`
export const SmallSeparator = styled.div`
  width: 100%;
  height: 16px;
`
export const MediumSeparator = styled.div`
  width: 100%;
  height: 32px;
`
export const BigSeparator = styled.div`
  width: 100%;
  height: 64px;
`
export const SeparatorOr = styled.div`
  margin-top: 20px;
  padding: 30px 0;
  position: relative;
  width: 80%;
  text-align: center;
  div {
    background: #FFF;
    width: 45%;
    height: 1px;
  }
  .line-left {
    position: absolute;
    left: 0;
    top: 50%;
  }
  .line-right {
    position: absolute;
    right: 0;
    top: 50%;
  }
`
export const WrapContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`
export const AdvicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
  transition: height .4s ease;
  span {
    display: flex;
    gap: 2px;
    div {
      max-width: 24px;
      max-height: 24px;
      img {
        transition: opacity .4s ease;
        position: absolute;
        top: 12px;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
      }
    }
  }
`
export const PageContainer = styled.section`
  position: relative;
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
`
export const GamesContainer = styled.section`
  position: relative;
  min-width: 90%;
  max-width: 1440px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 40px auto;
  row-gap: 60px;
`
export const PageGamesContainer = styled.div`
  div {
    box-sizing: border-box;
    margin: 30px 0;
    width: 30%;
    padding: 1.2rem 1.2rem;
    color: white;
    border: none;
    border-radius: 20px;
    background: rgba(217, 217, 217, 0.3);
    font-size: 16px;
    font-weight: 400;
    outline: none;
    :focus {
      outline: 1px solid #fff6;
    }
  }
`
export const SearchGamesContainer = styled.div`
  width: 100%;
  max-width: 450px;
  @media (min-width: 1300px) {
    pointer-events: none;
    position: fixed;
    z-index: 20;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100px;
    max-width: 100%;
    margin: 0 auto;
  }
  span {
    position: relative;
    max-width: 360px;
    display: flex;
    flex-direction: column;
    @media (min-width: 1300px) {
      align-items: center;
      justify-content: center;
      position: relative;
      height: 100%;
      width: 100%;
      max-width: 1280px;
      margin: auto auto;
    }
    label {
      font-size: 21px;
      @media (min-width: 600px) {
        font-size: 25px;
      }
      @media (min-width: 1300px) {
        display: none;
      }
    }
    input {
      ::-webkit-search-decoration,::-webkit-search-cancel-button,::-webkit-search-results-button,::-webkit-search-results-decoration {
          display: none;
      }
      pointer-events: all;
      box-sizing: border-box;
      margin: 10px 0;
      padding: 1.2rem 1.2rem;
      color: white;
      border: none;
      box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
      border-radius: 20px;
      background: rgba(217, 217, 217, 0.3);
      font-size: 16px;
      font-weight: 400;
      outline: none;
      :focus {
        outline: 1px solid #fff6;
      }
      @media (min-width: 600px) {
        font-size: 20px;
      }
      @media (min-width: 1300px) {
        background-color: white;
        color: #9C9797;
        position: absolute;
        left: 240px;
      }
    }
    svg {
      pointer-events: all;
      color: #9C9797;
      width: 25px;
      height: 25px;
      position: absolute;
      z-index: 50;
      transform: translateY(-50%);
      transition: transform .1s ease;
      :hover {
        cursor: pointer;
        transform: scale(1.04) translateY(-48%);
      }
    }
  }
`

export const FooterContainer = styled.footer`
  height: 120px;
  width: 100%;
  position: absolute;
  bottom: 0;
  section {
    background: rgba(105,129,138,0.65);
    border-top: 1px solid #fff6;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px 5px 0 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    color: white;
    ul {
      display: flex;
      list-style: none;
      gap: 30px;
      li {
        margin: 0 20px;
        a {
          color: white;
          padding: 0px 12px;
          :hover {
            color: rgb(7, 3, 43);
            transition: 0.3s;
          }
        }
      }
    }
  }
`
export const PaginationContainer = styled.div`        
  .pagination{
    margin-left: auto;
    margin-right: auto;
    width: max-content;
    display: flex;
    gap:10px;
    align-items: center;
  }
  .pagination__container{
    display: flex;
    gap:35px;
  }
  .pagination__page,
  .pagination__next,
  .pagination__prev{
    width: 40px;
    display: flex;
    justify-content: center;
    align-content: center; 
    cursor: pointer;   
  }
  .pagination__active{
    background-color: rgb(151, 15, 201);
    color:rgb(255, 255, 255);
    border-radius:5px;
  }
`
