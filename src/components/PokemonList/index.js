import React, { useContext } from 'react'
import { PokemonContext } from '../../context'
import getIdFromUrl from '../../utils/getIdFromUrl'
import HomeTile from '../HomeTile'
import styles from './styles.module.css'

const PokemonList = () => {
  const { searchResult } = useContext(PokemonContext)
  return <div className={styles.list}>
    {
      searchResult.map((pokemon) => {
        return <HomeTile key={pokemon.name} id={getIdFromUrl(pokemon.url)} />
      })
    }
  </div>
}

export default PokemonList