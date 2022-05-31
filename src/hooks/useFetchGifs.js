import { useState, useEffect } from "react";
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( categoria ) => {
  const [state, setState] = useState({
      imagenes: [],
      loading: true
  })

  useEffect( () => {
    getGifs(categoria).then( data => {
      setState({
        imagenes: data,
        loading: false
      })
    }

    )
  }, [categoria]) 

  return state;
}
