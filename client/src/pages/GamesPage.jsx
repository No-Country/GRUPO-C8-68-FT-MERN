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

const GamesPage = () => {
  //! Se obtienen todos los juegos de la BD

  const [allGames, setAllGames] = useState([])
  const [loading, setLoading] = useState(true)

  const [search, setSearch] = useState('')
  const [page, setPage] = useState(8)
  const [pagesLength, setPagesLength] = useState(20)
  const gamesPerPage = 15
  const [gamesToShow, setGamesToShow] = useState(allGames)

  const inicialElement = 0
  //const finalElement = page * gamePorPage
  const finalElement = gamesPerPage
  // console.log('Page', page)

  useEffect(() => {
    const URL = // nuevo https://grupo-c8-68-ft-mern-production.up.railway.app/
      //viejo  'https://nc8-68backend-production.up.railway.app/games?page=' +
      'https://grupo-c8-68-ft-mern-production.up.railway.app/ames?page=' +
      page +
      (search ? '&search=' + search : '')
    console.log('URL', URL)
    axios
      .get(URL)
      .then((res) => {
        res.data.games.forEach((e) => {
          // console.log(
          //   'platforms in GamesPage',
          //   e.name,
          //   e.platforms,
          //   'id: ',
          //   e.id
          // )
        })

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
      <Search setSearch={setSearch} />
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
    </PageContainer>
  )
}
//
export default GamesPage
