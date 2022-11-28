import React from 'react'
import { useState } from 'react'
import { PageGamesContainer } from '../../AppGlobalStyles'


const Page = ({ setPages }) => {
    const [page, setPage] = useState('1')
    //console.log('setPages', setPages)
  const [visibility, setVisibility] = useState('hide')

  const handleVisibility = (e) => {
    let inputContain = e.target.value

    if (inputContain.length === 0) {
      setVisibility('hide')
    } else {
      setVisibility('')
    }
  }

  const searcher = (e) => {
    const valueSearch = e.target.value;
      setPage(valueSearch)
    }
    let arrayPages = []
    if(arrayPages <10){
        for(let i=1; i<= setPages; i++){
            arrayPages.push(i)  
          }
    }

  return (
    <PageGamesContainer>
      <span>
        <label className='color-gray' htmlFor="page-id">Page</label>
        
        <div>
            {/* {arrayPages.map(e=>{

                
                 <span><a href='!#'>e</a></span>
             })} */}
        <input
            onBlur={handleVisibility}
            onFocus={handleVisibility}
            onKeyDown={(e) => {

            searcher(e)
            handleVisibility(e)
            }}
            type="search"
            id="page-id"
            name="page"
            placeholder="Page"
          /> 
        </div>  
        <div className={`errase__button ${visibility}`}></div>
      </span>
    </PageGamesContainer>
    
  )
}
export default Page