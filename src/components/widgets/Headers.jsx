import Image from 'next/image'
import Logo from '/public/img/logo.png'

import styles from '/styles/components/widgets/header.module.scss'

export default function Header() {
  return (
    <div className={styles.header}>
      <Image 
        src={Logo} 
        width={50} 
        height={50} 
        alt="Logo"
        className={styles.header__img}
      />
      <span className={styles.header__title}>GitHub Profile README Generator</span>
      <div className={styles.header__bottom}>
        <button className={`${styles.header__btn} btn`}>
          Star this repo 
          <span className={styles.header__btn__number}>6169</span>
        </button>
        <button className={`${styles.header__btn} btn`}>
          Fork on Github 
          <span className={styles.header__btn__number}>1063</span>
        </button>
      </div>
    </div>
  )
}