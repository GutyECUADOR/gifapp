import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifApp = () => {

  const [categorias, setcategorias] = useState(['PHP','JS'])

  /* const agregarCategoria = () => {
    setcategorias([...categorias,'TEST'])
  } */

  return (
      <>
          <h2>GifApp</h2>
          <hr/>
            <AddCategory></AddCategory>
            <ol>
              {
                categorias.map( categoria => {
                  return <li key={categoria}> {categoria} </li>
                })
              }
            </ol>
          
      </>
  )
}