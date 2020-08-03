import React from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'
function CadastroCategoria() {
    return (
      <PageDefault>
        <h1> <label for="cadastro">Cadastro de Categoria </label></h1>
        
        <input id='cadastro' type='text'/>
        


        <button>Cadastrar</button>
        <Link to='/'>
            Ir para Home
        </Link>
      </PageDefault>
    )
  }

  export default CadastroCategoria