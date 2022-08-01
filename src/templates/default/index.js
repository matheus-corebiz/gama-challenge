import React from 'react'
import styles from './styles.module.css'

const DefaultTemplate = ({children}) => {
  return <div className={styles.wrapper}>
    {
      children
    }
  </div>
}

export default DefaultTemplate