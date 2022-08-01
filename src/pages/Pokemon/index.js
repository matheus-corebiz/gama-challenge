import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"
import { PokemonContext } from '../../context'
import { getById } from '../../requests/pokemon'
import DefaultTemplate from '../../templates/default'
import Cart from '../../components/Cart'
import styles from './styles.module.css'

const Pokemon = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const [pokemonData, setPokemonData] = useState()

  const { setCartItems } = useContext(PokemonContext)

  const loadPokemonData = async () => {
    const request = await getById(id)
    if(!request) return false
    setPokemonData(request)
    setLoading(false)
  }

  const clickHandler = () => {
    setCartItems((previousValue) => [...previousValue, pokemonData])
  }

  useEffect(() => {
    if(id) loadPokemonData()
  }, [id])

  return <DefaultTemplate>
    {
      loading
      ? <img src="/images/loader.gif" alt="" />
      : <div className={styles.body}>
          <div className={styles.mainContent}>
            <h1 className={styles.name}>{pokemonData.name}</h1>

            <img className={styles.image} src={pokemonData.sprites.other.dream_world.front_default || pokemonData.sprites.front_default} alt={pokemonData.name} />
          </div>

          <div className={styles.statsContent}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <td>Stat</td>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Tamanho</td>
                  <td>{pokemonData.height}</td>
                </tr>

                <tr>
                  <td>Base experience</td>
                  <td>{pokemonData.base_experience}</td>
                </tr>

                <tr>
                  <td>Tipo</td>
                  <td>{pokemonData.types?.[0]?.type?.name}</td>
                </tr>
              </tbody>
            </table>

            <button className={styles.addToCart} onClick={clickHandler}>Add To cart</button>

            <Cart />
          </div>
      </div>
    }
  </DefaultTemplate>
}

export default Pokemon