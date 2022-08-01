import React, { useContext, useEffect, useState } from 'react'
import { PokemonContext } from '../../context'
import calculatePriceByBaseExperience from '../../utils/calculatePriceByBaseExperience'
import formatPrice from '../../utils/formatPrice'

import styles from './styles.module.css'

const CartTile = ({pokemon}) => {
  const { setCartItems } = useContext(PokemonContext)

  const clickButtonHandler = () => {
    setCartItems((previousValue) => previousValue.filter(previousPokemon => previousPokemon.id !== pokemon.id))
  }

  return <div className={styles.tile}>
    <button className={styles.buttonDelete} onClick={clickButtonHandler}>
      <img src="/images/icon-delete.jpg" alt="Delete" />
    </button>
    <img src={pokemon.sprites.front_default} alt="" className={styles.image} />
    <span className={styles.name}>{pokemon.name}</span>
    <span className={styles.price}>{formatPrice(calculatePriceByBaseExperience(pokemon.base_experience))}</span>
  </div>
}

export default CartTile