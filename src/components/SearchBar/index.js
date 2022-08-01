import React, { useContext } from 'react'
import { PokemonContext } from '../../context'
import styles from './styles.module.css'

const SearchBar = () => {

  const {setSearchText} = useContext(PokemonContext)

  const onChangeHandler = (ev) => {
    setSearchText(ev.target.value)
  }

  return <div className={styles.searchBar}>
    <img src="/images/search-icon.svg" alt="Search icon" className={styles.icon} />

    <input type="text" placeholder='Search here' name="text" className={styles.input} onInput={onChangeHandler} />
  </div>
}

export default SearchBar