import { urlObjectKeys } from 'next/dist/shared/lib/utils'
import { FC } from 'react'
import Filters from '../../Filters/Filters'
import Search from '../../Search/Search'
import styles from './HeadingSection.module.scss'

import mapImg from '../../../../../assets/images/map.png'

const SearchSection: FC = () => {
  return (
    <section className={styles.section} 
    style = {{backgroundImage: `url('${mapImg.src}')`}}>
    <div>
    <h1>
        best places for trip
    </h1>
    
   

    </div>
  </section>
  )
}

export default SearchSection