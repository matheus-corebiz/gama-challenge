import React from 'react'
import DefaultTemplate from '../../templates/default'
import { Link } from 'react-router-dom'

import styles from './styles.module.css'

const Success = () => {
  return <DefaultTemplate>
    <div className={styles.body}>
    <span className={styles.title}>Parabéns</span>

    <span className={styles.subtitle}>Compra realizada</span>

    <Link to={'/'} className={styles.link}>Voltar à tela inicial</Link>

    </div>

  </DefaultTemplate>
}

export default Success