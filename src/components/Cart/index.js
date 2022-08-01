import React, { useContext } from 'react'
import { PokemonContext } from '../../context'
import CartTile from '../CartTile'
import styles from './styles.module.css'
import calculatePriceByBaseExperience from '../../utils/calculatePriceByBaseExperience'
import formatPrice from '../../utils/formatPrice'
import { useNavigate } from "react-router-dom"

const Cart = () => {
  const { cartItems, setCartItems } = useContext(PokemonContext)

  let navigate = useNavigate()

  const onClickHandler = () => {
    setCartItems([])
    navigate("/success",)
  }

  return <div className={styles.card}>
    <span className={styles.title}>Carrinho</span>

    <div className={styles.body}>
      {
        cartItems?.length
        ? cartItems.map((pokemon, index) => <CartTile key={index} pokemon={pokemon} />)
        : <></>
      }
    </div>

    <div className={styles.totalizers}>
      <span className={styles.totalizerLabel}>TOTAL</span>
      <span className={styles.totalizerValue}>{formatPrice(cartItems.reduce((previous, current) => previous + calculatePriceByBaseExperience(current.base_experience), 0))}</span>
    </div>
    <button className={styles.finish} onClick={onClickHandler}>
      FINALIZAR
    </button>
  </div>
}

export default Cart