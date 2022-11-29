import React from 'react'
import { PaginationContainer } from '../../AppGlobalStyles'

const Pagination = ({ page, setPage, pagesLength }) => {
  //El número de botones
  const botonesVisibles = 5
  //1/8 = 0.125
  //2/8 = 0.25
  //3/8 = 0375

  //9/8 = 1.125
  //10/9 = 1.25
  //16/8 =2

  //Redondear... bot 1, bot 2...
  const bloqueActual = Math.ceil(page / botonesVisibles)
  const numeroDeBloques = Math.ceil(pagesLength / botonesVisibles)
  const arrPages = []
  const initialPage = (bloqueActual - 1) * botonesVisibles + 1
  // initialPage+botonesvisibles-1
  const limitPage =
    numeroDeBloques === bloqueActual
      ? pagesLength
      : bloqueActual * botonesVisibles
  for (let i = initialPage; i <= limitPage; i++) {
    arrPages.push(i)
  }

  // console.log('pagina', page)
  // console.log('numero de paginas', pagesLength)
  // console.log('numero de bloques', numeroDeBloques)
  // console.log('bloque Actual', bloqueActual)

  return (
    <div>
      <div>&#60;</div>
      <ul>
        {arrPages.map((e) => {
          ;<li key={e}>{e}</li>
        })}
      </ul>
      <div>&#62;</div>
    </div>
  )
}

export default Pagination
