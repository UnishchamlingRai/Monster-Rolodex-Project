import React from 'react'
import Cards from '../Cards/Cards'
import './CardList.css'
const CardList = ({filteredMonster}) => {
  return (
    <div className='card-list'>
       {filteredMonster.map((monster,index)=>{
        return(
            <Cards monster={monster} key={index}/>
        )
       })}
    </div>
  )
}

export default CardList