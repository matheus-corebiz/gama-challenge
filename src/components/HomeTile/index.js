import React, { useEffect, useState, memo, useContext } from 'react'
import { PokemonContext } from '../../context'
import calculatePriceByBaseExperience from '../../utils/calculatePriceByBaseExperience'
import { Link } from "react-router-dom"
import formatPrice from '../../utils/formatPrice'
import styles from './styles.module.css'
import { getById } from '../../requests/pokemon'

const HomeTile = ({id}) => {
  const [loading, setLoading] = useState(true)
  const [pokemonData, setPokemonData] = useState({})

  const { setCartItems } = useContext(PokemonContext)

  const getPokemonData = async () => {
    const json = await getById(id)
    setPokemonData(json)
    setLoading(false)
  }

  const addToCartHandler = (ev) => {
    ev.stopPropagation()
    setCartItems((previousValue) => [...previousValue, pokemonData])
  }

  useEffect(() => {
   getPokemonData()
  }, [])

  return <div className={styles.item}>
    {
      loading
      ? <img src="/images/loader.gif" alt="" />
      : <div className={styles.tile}>
          <Link to={`/pokemon/${pokemonData.id}`} className={styles.body}>
            <div className={`${styles.imageContainer} ${styles[pokemonData.types[0].type.name]}`}>
              <img src={pokemonData.sprites.front_default} alt="Pokemon Image" />
            </div>

            <div className={styles.dataContainer}>
              <span className={styles.name}>{pokemonData.name}</span>
              <span className={styles.price}>{formatPrice(calculatePriceByBaseExperience(pokemonData.base_experience))}</span>
            </div>
          </Link>

          <div className={styles.footer}>
            <button className={styles.button} onClick={addToCartHandler}>Add to cart</button>
          </div>
      </div>
    }
  </div>
}

export default memo(HomeTile)