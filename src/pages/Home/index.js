import React, { memo, useContext } from 'react'
import Cart from '../../components/Cart'
import PokemonList from '../../components/PokemonList'
import SearchBar from '../../components/SearchBar'
import DefaultTemplate from '../../templates/default'
import styles from './styles.module.css'

const Home = () => {  
  return <DefaultTemplate>
    <SearchBar />
      <div className={styles.body}>
        <PokemonList />

        <Cart />
    </div>
  </DefaultTemplate>
}

export default Home