import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifItem } from './GifItem';

export const GifsGrid = ( {categoria}) => {

    const {imagenes, loading} = useFetchGifs(categoria);
    
  return (
    <>
        <h3>{categoria}</h3>
        <p>{ loading && 'cargando...'}</p>
        {<div className='card-grid'>
                {
                    imagenes.map( item => {
                        return <GifItem key={item.id} {...item}></GifItem>
                    })
                }
        </div>}
    </>
  )
}
