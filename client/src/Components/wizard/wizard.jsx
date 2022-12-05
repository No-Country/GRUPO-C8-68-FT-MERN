import React from 'react'
import { WizardButton, WizardButtonContainer, WizardContainer } from './styles'

const Wizard = ({ children }) => {
  const [activePageIndex, setActivePageIndex] = React.useState(0)
  const pages = React.Children.toArray(children)
  const currentPage = pages[activePageIndex]

  const goNextPage = () => {
    setActivePageIndex((index) => index + 1)
  }

  const goPrevPage = () => {
    setActivePageIndex((index) => index - 1)
  }

  const ButtonPrev = () =>
    activePageIndex > 0 ? (
      <WizardButton type="button" onClick={goPrevPage} style={{gridArea:"left", float: "left"}}>
        Back
      </WizardButton>
    ) : null
  const ButtonNext = () =>
    activePageIndex < pages.length - 1 ? (
      <WizardButton type="button" onClick={goNextPage} style={{gridArea:"right", float: "right"}}>
        Continue
      </WizardButton>
    ) : null
  return (
    <WizardContainer>
      <div>{currentPage}</div>
      <WizardButtonContainer>
        <ButtonPrev />
        <ButtonNext />
      </WizardButtonContainer>
    </WizardContainer>
  )
}

export default Wizard
