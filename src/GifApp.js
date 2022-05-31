import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifsGrid } from "./components/GifsGrid";

export const GifApp = () => {

  const [categorias, setcategorias] = useState([])

  return (
      <>
          <h2>GifApp</h2>
          <hr/>
            <AddCategory setcategorias={setcategorias}></AddCategory>
            <ol>
              {
                categorias.map( categoria => {
                  return <GifsGrid 
                            key={categoria}
                            categoria={categoria}>
                          </GifsGrid>
                })
              }
            </ol>
          
      </>
  )
}