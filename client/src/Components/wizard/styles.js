import styled from 'styled-components'

export const WizardContainer = styled.div`
width: 80vw;
min-height: 50vh;
margin: 0 auto;
padding: 20px 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
background: #4B5B62;
border: 1px solid #fff6;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
div{
  width: 100%;
}

`
export const WizardButton = styled.button`
  height: 40px;
  width: 90px;
  margin: 6px;
  font-size: 16px;
  padding: 0 10px;
  border: none;
  border-radius: 16px;
  background-color: white;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  transition: filter .2s ease;
  color: #00ADEF;
  font-weight: bold;
  :hover {
    cursor: pointer;
    filter: brightness(.8);
  }
`
export const WizardButtonContainer = styled.div`
width: 100%;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "left right";
    align-items: center;
    justify-content: space-between;
`