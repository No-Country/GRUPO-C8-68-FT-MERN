import { GameDetailDescriptionContainer } from './styles'

export const GameDetailDescription = ({ description }) => {
  return (
    <GameDetailDescriptionContainer>
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </GameDetailDescriptionContainer>
  )
}
