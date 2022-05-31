import React, { useState } from 'react'
import { PropTypes } from "prop-types";

export const AddCategory = ( {setcategorias}) => {

    const [nuevaCategoria, setNuevaCategoria] = useState('')
    const handleChange = (e) => {
      setNuevaCategoria(e.target.value)
    }
    const handleSubmit = (e) => {
      e.preventDefault()
      setcategorias( categorias => [nuevaCategoria, ...categorias])
    }

  return (
    <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={ nuevaCategoria }
          onChange= { handleChange }
          ></input>

    </form>
  )
}

AddCategory.propTypes = {
  setcategorias: PropTypes.func.isRequired
}
