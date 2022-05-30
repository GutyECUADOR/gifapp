import React, { useEffect, useState } from 'react'
import { GifItem } from './GifItem';
import { getGifs } from '../helpers/getGifs';

export const GifsGrid = ( {categoria}) => {

    const [imagenes, setImagenes] = useState([])

    useEffect( () => {
        getGifs(categoria).then(setImagenes)
    }, [categoria])

   

  return (
    <>
        <h3>{categoria}</h3>
        <div className='card-grid'>
                {
                    imagenes.map( item => {
                        return <GifItem key={item.id} {...item}></GifItem>
                    })
                }
        </div>
    </>
  )
}
