import { useEffect, useState } from 'react'
import axios from 'axios'
import Search from '../Components/search/Search'
import Pagination from '../Components/pagination/Pagination'
import { Card } from '../Components/card/card'
import {
  GamesContainer,
  MediumSeparator,
  Text,
  Subtitle,
  TitlesContainer,
} from '../AppGlobalStyles'
import { Spinner } from '../Components/spinner/spinner'

const GamesPage = () => {
  //! Se obtienen todos los juegos de la BD

  const [allGames, setAllGames] = useState([])
  const [loading, setLoading] = useState(true)

  const [search, setSearch] = useState('')
  const [page, setPage] = useState('1')
  const [pagesLength, setPagesLength] = useState(20)
  const [gamesPerPage, setGamesPerPage] = useState(20)
  const [gamesToShow, setGamesToShow] = useState(allGames)

  const inicialElement = 0
  //const finalElement = page * gamePorPage
  const finalElement = gamesPerPage
  console.log('Page', page)

  useEffect(() => {
    const URL =
      'https://nc8-68backend-production.up.railway.app/games?page=' +
      page +
      (search ? '&search=' + search : '')
    axios
      .get(URL)
      .then((res) => {
        setAllGames(res.data.games)
        setGamesToShow(res.data.games)
        setLoading(false)
        setPagesLength(res.data.pages)
      })
      .catch((err) => console.log(err.data))
  }, [search])

  //! Se crea es estado de los juegos a mostrar

  useEffect(() => {
    if (!search) {
      setGamesToShow(allGames)
    } else {
      setGamesToShow(
        allGames.filter((dato) =>
          dato.name.toLowerCase().includes(search.toLocaleLowerCase())
        )
      )
    }
  }, [search, allGames])

  return (
    <section>
      <MediumSeparator></MediumSeparator>
      <Search setSearch={setSearch} />
      <Pagination page={page} setPage={setPage} pagesLength={pagesLength} />
      <TitlesContainer style={{ maxWidth: '1360px' }}>
        <Subtitle className="color-gray">All Games</Subtitle>
      </TitlesContainer>

      {loading ? (
        <Spinner />
      ) : (
        <GamesContainer>
          {gamesToShow.length !== 0 ? (
            gamesToShow
              .slice(inicialElement, finalElement)
              .map((game) => (
                <Card
                  key={game.id}
                  title={game.name}
                  price={game.price}
                  img={game.background_image}
                  id={game.id}
                />
              ))
          ) : (
            <Text style={{ margin: '0 auto' }}>No games found</Text>
          )}
        </GamesContainer>
      )}
    </section>
  )
}
//
export default GamesPage
