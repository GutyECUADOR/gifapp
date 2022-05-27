import React, { useState } from 'react'

export const AddCategory = () => {

    const [nuevaCategoria, setNuevaCategoria] = useState('Hola mundo')
    const handleChange = (e) => {
      setNuevaCategoria(e.target.value)
    }
    const handleSubmit = (e) => {
      e.preventDefault()
      console.log('submit')
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
