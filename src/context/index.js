import React, { createContext, useState, useRef, useEffect } from 'react'
import { getById } from '../requests/pokemon'
import getCookie from "../utils/getCookie"
import setCookie from "../utils/setCookie"

export const PokemonContext = createContext()

const Context = ({children}) => {
  const [searchText, setSearchText] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const [cartItems, setCartItems] = useState([])

  const allPokemon = useRef([])

  const loadAllPokemon = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=905&offset=0'
    const request = await fetch(url)
    if(request.status !== 200) return false
    const json = await request.json()
    allPokemon.current = json.results
    setSearchResult(allPokemon.current.slice(0, 9))
  }

  const loadCartItems = async () => {
    const cartItemsCookie = JSON.parse(getCookie("cart"))
    let cartItemsResponses = []
    for await (let cartItemCookie of cartItemsCookie) {
      const response = await getById(cartItemCookie)
      if(!response) return

      cartItemsResponses.push(response)
    }

    setCartItems(cartItemsResponses)
  }

  useEffect(() => {
    loadAllPokemon()
    loadCartItems()
  }, [])

  useEffect(() => {
    cartItems.length && setCookie("cart", JSON.stringify(cartItems.map((item) => item.id)), 60)
  }, [cartItems])

  useEffect(() => {
    setSearchResult(() => searchText.trim()
      ? allPokemon.current.filter((pokemon) => pokemon.name.includes(searchText.toLocaleLowerCase()))
      : allPokemon.current.slice(0, 9))

  }, [searchText])

  return <PokemonContext.Provider value={{
    cartItems,
    searchText,
    setSearchText,
    searchResult,
    setSearchResult,
    allPokemon,
    setCartItems
  }}>
    {children}
  </PokemonContext.Provider>
}

export default Context