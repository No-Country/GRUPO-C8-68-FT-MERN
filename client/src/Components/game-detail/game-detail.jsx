import { GameDetailDescription } from './game-detail-description/game-detail-description'
import { GameDetailImage } from './game-detail-image/game-detail-image'
import { GameDetailInfo } from './game-detail-info/game-detail-info'
import {
  GameDetailContainer,
  GameDetailTitle,
  InfoDescriptionContainer,
} from './styles'

export const GameDetail = ({
  title,
  img,
  release,
  categories,
  price,
  description,
}) => {
  return (
    <GameDetailContainer>
      <GameDetailTitle>{title}</GameDetailTitle>
      <section>
        <GameDetailImage img={img} />
        <InfoDescriptionContainer>
          <GameDetailInfo
            release={release}
            categories={categories}
            price={price}
          />
          <GameDetailDescription description={description} />
        </InfoDescriptionContainer>
      </section>
    </GameDetailContainer>
  )
}
