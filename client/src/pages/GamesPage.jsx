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
  PageContainer,
} from '../AppGlobalStyles'
import { Spinner } from '../Components/spinner/spinner'
import { useSelector } from 'react-redux'

const GamesPage = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn)

  //! Se obtienen todos los juegos de la BD

  const [allGames, setAllGames] = useState([])
  const [loading, setLoading] = useState(true)

  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [pagesLength, setPagesLength] = useState(20)
  const gamesPerPage = 15
  const [gamesToShow, setGamesToShow] = useState(allGames)

  const inicialElement = 0
  const finalElement = gamesPerPage

  useEffect(() => {
    const URL =
      'https://grupo-c8-68-ft-mern-production.up.railway.app/games?page=' +
      page +
      (search ? '&search=' + search : '')
    console.log('URL', URL)
    axios
      .get(URL)
      .then((res) => {
        setAllGames(res.data.games)
        setGamesToShow(res.data.games)
        setLoading(false)
        setPagesLength(res.data.pages)
      })
      .catch((err) => console.log(err.data))
  }, [search, page])

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
    <PageContainer>
      <MediumSeparator></MediumSeparator>
      <Search setSearch={setSearch} isLoggedIn={isLoggedIn} />
      <TitlesContainer style={{ maxWidth: '1360px' }} className="centerOff">
        <Subtitle className="color-gray">All Games</Subtitle>
      </TitlesContainer>
      <Pagination page={page} setPage={setPage} pagesLength={pagesLength} />

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
                  price={game.price.toFixed(2)}
                  img={game.background_image}
                  id={game.id}
                />
              ))
          ) : (
            <Text style={{ margin: '0 auto' }}>No games found</Text>
          )}
        </GamesContainer>
      )}
    </PageContainer>
  )
}
//
export default GamesPage
