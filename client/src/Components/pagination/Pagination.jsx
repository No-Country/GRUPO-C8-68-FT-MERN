import React from "react";
import {PaginationContainer} from '../../AppGlobalStyles'

const Pagination = ({page, setPage, pagesLength}) =>{
    //El número de botones
    const botonesVisibles = 8
                    //1/8 = 0.125
                    //2/8 = 0.25
                    //3/8 = 0375

                    //9/8 = 1.125
                    //10/9 = 1.25
                    //16/8 =2

                    //Redondear... bot 1, bot 2...
    const bloqueActual = Math.ceil(page/ botonesVisibles)
    const numeroDeBloques =  Math.ceil(pagesLength/botonesVisibles)
    const arrPages =[]
    const initialPage = (bloqueActual -1) * botonesVisibles +1
    // initialPage+botonesvisibles-1
    const limitPage = numeroDeBloques===bloqueActual? pagesLength: bloqueActual * botonesVisibles
    for(let i= initialPage; i<=limitPage; i++){
        arrPages.push(i)
        console.log('tipo de array', typeof i)
    }
    
    console.log('Tipo de pagina', typeof page)
    console.log('pagina', page)
    console.log('numero de paginas', pagesLength)
    console.log('numero de bloques', numeroDeBloques)
    console.log('bloque Actual', bloqueActual)
    
    const flechitaPrev=()=>{
        setPage(page-1)
    }
    const flechitaNext=()=>{
        setPage(page+1)
    }
    const botonPagina=(e)=>{
        setPage(e)
    }

    return(
        <PaginationContainer>
        <div className='pagination'>
            {page > 1 &&
            <div onClick={flechitaPrev} className='pagination__prev pagination__active'>&#60;</div>
            }
            <ul className='pagination__container'>
                {
                arrPages.map(e => (
                <li
                    className={`pagination__page ${page==e && 'pagination__active'}`}
                    onClick={() => botonPagina(e)}
                    key={e}>{e}
                </li>
                ))
                }   
            </ul>
            {page < pagesLength &&
            <div onClick={flechitaNext} className='pagination__next pagination__active'>&#62;</div>
            }
        </div>
        </PaginationContainer>
    )
}
export default Pagination